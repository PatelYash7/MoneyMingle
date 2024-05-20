-- CreateTable
CREATE TABLE "p2pTransfer" (
    "id" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,
    "SenderUserId" TEXT NOT NULL,
    "ReceiverUserId" TEXT NOT NULL,

    CONSTRAINT "p2pTransfer_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "p2pTransfer" ADD CONSTRAINT "p2pTransfer_SenderUserId_fkey" FOREIGN KEY ("SenderUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "p2pTransfer" ADD CONSTRAINT "p2pTransfer_ReceiverUserId_fkey" FOREIGN KEY ("ReceiverUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
