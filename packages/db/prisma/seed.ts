import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const alice = await prisma.user.upsert({
    where: { number: "9999999999" },
    update: {},
    create: {
      number: "9999999999",
      password: "$2a$10$jKE8ENhTg3mKlpTt0f3/JuYjPd7o.uxXNZ2t2tZfaKLDHJVCC8REG",
      name: "alice",
      email:"alice@gmail.com",
      Balance:{
        create:{
            amount:1000,
            locked:3000
        }
      },
      OnRampTransaction: {
        create: {
          startTime: new Date(),
          status: "SUCCESS",
          amount: 20000,
          token: "122",
          provider: "HDFC Bank",
        },
      },
    },
  });
  const bob = await prisma.user.upsert({
    where: { number: "9999999998" },
    update: {},
    create: {
      number: "9999999998",
      password: "$2a$10$i/fpXhOoRctbZxGOQJFS3.nuHAkLaJl/fWWA/ytQIbaUQVl8dlMXq",
      name: "bob",
      email:"bob@gmail.com",
      Balance:{
        create:{
            amount:1000,
            locked:3000
        }
      },
      OnRampTransaction: {
        create: {
          startTime: new Date(),
          status: "FAILED",
          amount: 2000,
          token: "123",
          provider: "HDFC Bank",
        },
      },
    },
  });
  console.log({ alice, bob });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
