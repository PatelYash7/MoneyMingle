import db from "@moneymingle/db/client";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../../lib/authoptions/auth";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../../component/ui/card";
import { Label } from "../../../../component/ui/label";
import { IndianRupee } from "lucide-react";
export default async function Page() {
  const session = await getServerSession(authOptions);
  const BankDetails = await db.userBank.findFirst({
    where: {
      wallet: {
        id: session?.user.id,
      },
    },
  });
  return (
    <div className="flex justify-center">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Bank Account Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-2">
            <Label className="text-lg font-bold">Name</Label>
            <div>{BankDetails?.name}</div>
          </div>
          <div className="grid gap-2">
            <Label className="text-lg font-bold">Total Amount In Bank</Label>
            <div className="flex gap-2"><IndianRupee className="w-4 font-bold"/> {Number(BankDetails?.Amount)/100}</div>
          </div>
          <div className="grid gap-2">
            <Label className="text-lg font-bold">Banking Name</Label>
            <div>{BankDetails?.bankingName}</div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
