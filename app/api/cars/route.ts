import { PrismaClient } from "../../generated/prisma/client";

const prisma = new PrismaClient();

export async function GET(req: Request, res: Response) {
  try {
    const { searchParams } = new URL(req.url);

    const limit = parseInt(searchParams.get("limit") || "10", 10);
    const page = parseInt(searchParams.get("page") || "1", 10);
    const seater = parseInt(searchParams.get("seats") || "0", 10);
    const status = searchParams.get("status") || undefined;

    const skip = (page - 1) * limit;

    const where: any = {};
    if (seater > 0) {
      where.seats = seater;
    }
    if (status) {
      where.status = status;
    }

    const cars = await prisma.car.findMany({
      where,
      take: limit,
      skip: skip,
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
