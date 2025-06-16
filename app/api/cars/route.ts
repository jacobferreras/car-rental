import { PrismaClient } from "../../generated/prisma/client";

const prisma = new PrismaClient();

export async function GET(req: Request, res: Response) {
  try {
    const cars = await prisma.car.findMany({
      orderBy: { id: "asc" },
    });
    return new Response(JSON.stringify(cars), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error fetching cars:", error);
    return new Response("Internal Server Error", { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
