import { NextResponse } from "next/server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function GET() {
  const { getPermission } = getKindeServerSession();
  const permission = await getPermission("create:car");
  return NextResponse.json({ isGranted: !!permission?.isGranted });
}
