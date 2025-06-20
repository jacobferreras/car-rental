import { NextResponse } from "next/server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const corsHeaders = {
  "Access-Control-Allow-Origin": "http://localhost:3000",
  "Access-Control-Allow-Methods": "GET,OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function OPTIONS() {
  return NextResponse.json({}, { status: 204, headers: corsHeaders });
}

export async function GET() {
  const { getPermission } = getKindeServerSession();
  const permission = await getPermission("create:car");
  return NextResponse.json(
    { isGranted: !!permission?.isGranted },
    {
      status: permission?.isGranted ? 200 : 403,
      headers: corsHeaders,
    }
  );
}
