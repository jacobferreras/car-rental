import { PrismaClient } from "../../../generated/prisma/client";

const Prisma = new PrismaClient();

export async function GET(
  req: Request,
  { params }: { params: { model: string } }
) {
  try {
    const car = await Prisma.car.findFirst({
      where: { model: { equals: params.model, mode: "insensitive" } },
    });

    console.log("Fetching car details for model:", params.model);

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
