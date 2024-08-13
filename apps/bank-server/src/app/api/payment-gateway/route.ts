import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const data = await request.json();
    if (data) {
        // Assuming `data` has a property `id` that we want to use in the URL
        const dataId = data.id;
        if (dataId) {
            return NextResponse.redirect(new URL(`/gateway/${dataId}`, request.url));
        } else {
            // If dataId is missing, return an appropriate error response
            return NextResponse.json({ error: "Missing data ID" }, { status: 400 });
        }
    } else {
        // Handle the case where no data is received
        return NextResponse.json({ error: "No data received" }, { status: 400 });
    }
}
