import express from "express";
import bodyParser from "body-parser";
import prisma from "@moneymingle/db/client"
import { paymentInformationZod } from "@moneymingle/zod/zod";
const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.json({
        Message: "Hello world"
    })
})
app.post("/bankHook", async (req, res) => {
    const isValid = paymentInformationZod.safeParse(req.body);

    const Status = await prisma.onRampTransaction.findFirst({
        where: {
            token: isValid.data?.token,
        }
    })
    console.log(Status)
    if (isValid.success && Status?.status=="PROCESSING") {
        console.log(isValid.data);
        const paymentInformation = isValid.data;
        try {
            await prisma.$transaction([
                prisma.balance.update({
                    where: {
                        userId: paymentInformation.userId
                    },
                    data: {
                        amount: {
                            increment: Number(paymentInformation.amount)
                        },
                        locked:{
                            decrement: Number(paymentInformation.amount)
                        }
                    }
                }),
                prisma.onRampTransaction.update({
                    where: {
                        token: paymentInformation.token
                    },
                    data: {
                        status: "SUCCESS"
                    }
                })
            ]);
            res.json({
                message: "Captured"
            })
        } catch (err) {
            console.log(err)
            await prisma.onRampTransaction.update({
                where: {
                    token: paymentInformation.token
                },
                data: {
                    status: "FAILED"
                }
            })
            res.status(411).json({
                message: "Error while processing the Transaction"
            })
        }

    } else {
        res.status(400).json({
            message: "Invalid payment information",
        });
    }
});

app.listen(3003, () => {
    console.log("Listening on port 3003")
})