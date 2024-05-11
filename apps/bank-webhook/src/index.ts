import express from "express";
import db from "@moneymingle/db/client"
import { paymentInformationZod } from "@moneymingle/zod/zod";
const app = express();

app.get("/bankHook", (req, res) => {
  const isValid = paymentInformationZod.safeParse(req.body);

  if (isValid) {
    const paymentInformation = {
      token: req.body.token,
      userId: req.body.userId,
      amount: req.body.amount,
    };
  }else {
    res.status(400).json({
      message: "Invalid payment information",
    });
  }
});
