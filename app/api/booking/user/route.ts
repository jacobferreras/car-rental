import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import prisma from "@/prisma/client";

const corsHeaders = {
  "Access-Control-Allow-Origin": "http://localhost:3000",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function OPTIONS() {
  return new Response(null, { status: 204, headers: corsHeaders });
}

export async function GET(request: Request) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user)
    return new Response("Unauthorized", { status: 401, headers: corsHeaders });

  try {
    const bookings = await prisma.booking.findMany({
      where: { userId: user.id },
      orderBy: { createdAt: "asc" },
    });
    return new Response(JSON.stringify(bookings), {
      status: 200,
      headers: corsHeaders,
    });
  } catch (error) {
    console.error("Error fetching user bookings:", error);
    return new Response("Internal Server Error", {
      status: 500,
      headers: corsHeaders,
    });
  }
}
