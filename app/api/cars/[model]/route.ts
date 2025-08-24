import { PrismaClient } from "../../../generated/prisma/client";
import { NextRequest } from "next/server";

const Prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  try {
    // Extract the model param from the URL
    const model = req.nextUrl.pathname.split("/").pop();

    if (!model) {
      return new Response("Model parameter is required", { status: 400 });
    }

    const car = await Prisma.car.findFirst({
      where: { model: { equals: model, mode: "insensitive" } },
    });

    if (!car) {
      return new Response("Car not found", { status: 404 });
    }

    return new Response(JSON.stringify(car), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response("Internal Server Error", { status: 500 });
  }
}
