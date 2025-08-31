import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import prisma from "@/prisma/client";

const corsHeaders = {
  "Access-Control-Allow-Origin": "http://localhost:3000",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function OPTIONS() {
  return new Response(null, { status: 204, headers: corsHeaders });
}

export async function POST(request: Request) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user)
    return new Response("Unauthorized", { status: 401, headers: corsHeaders });

  const { carId, carName, startDate, endDate, firstName, lastName } =
    await request.json();

  if (!carId || !startDate || !endDate) {
    return new Response("Missing required fields", {
      status: 400,
      headers: corsHeaders,
    });
  }

  const booking = await prisma.booking.create({
    data: {
      carId,
      carName,
      userId: user.id,
      email: user.email,
      firstName,
      lastName,
      startDate,
      endDate,
    },
  });

  return new Response(JSON.stringify(booking), {
    status: 201,
    headers: corsHeaders,
  });
}

export async function GET(request: Request) {
  const bookings = await prisma.booking.findMany({
    orderBy: {
      createdAt: "asc",
    },
  });
  return new Response(JSON.stringify(bookings), {
    status: 200,
    headers: corsHeaders,
  });
}
