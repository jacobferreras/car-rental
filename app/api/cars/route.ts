import { PrismaClient } from "../../generated/prisma/client";

const prisma = new PrismaClient();

const corsHeaders = {
  "Access-Control-Allow-Origin": "http://localhost:3000",
  "Access-Control-Allow-Methods": "GET,POST,OPTIONS,PATCH",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: corsHeaders,
  });
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    const limit = parseInt(searchParams.get("limit") || "10", 10);
    const page = parseInt(searchParams.get("page") || "1", 10);
    const seater = parseInt(searchParams.get("seats") || "0", 10);
    const transmission = searchParams.get("transmission") || "";
    const search = searchParams.get("search") || "";

    const skip = (page - 1) * limit;

    const where: any = {};
    if (seater > 0) {
      where.seats = seater;
    }
    if (transmission) {
      where.transmission = { equals: transmission, mode: "insensitive" };
    }
    if (search) {
      where.OR = [
        { make: { contains: search, mode: "insensitive" } },
        { model: { contains: search, mode: "insensitive" } },
      ];
    }

    const totalCars = await prisma.car.count({ where });
    const totalpages = Math.ceil(totalCars / limit);

    const cars = await prisma.car.findMany({
      where,
      take: limit,
      skip: skip,
      orderBy: { id: "asc" },
    });
    return new Response(JSON.stringify({ cars, totalpages }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching cars:", error);
    return new Response("Internal Server Error", {
      status: 500,
      headers: corsHeaders,
    });
  } finally {
    await prisma.$disconnect();
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      make,
      model,
      description,
      year,
      seats,
      transmission,
      imageUrl,
      status,
      pricePerDay,
      fuelType,
    } = body;

    if (
      !make ||
      !model ||
      !description ||
      !year ||
      !seats ||
      !transmission ||
      !imageUrl ||
      !status ||
      !pricePerDay ||
      !fuelType
    ) {
      return new Response("Missing required fields", {
        status: 400,
        headers: corsHeaders,
      });
    }

    const newCar = await prisma.car.create({
      data: {
        make: String(make).trim(),
        model: String(model).trim(),
        description: String(description).trim(),
        year: Number(year),
        seats: Number(seats),
        transmission: String(transmission).trim(),
        imageUrl: String(imageUrl).trim(),
        status,
        pricePerDay: parseFloat(pricePerDay),
        fuelType,
      },
    });

    return new Response(JSON.stringify(newCar), {
      status: 201,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error creating car:", error);
    return new Response("Internal Server Error", {
      status: 500,
      headers: corsHeaders,
    });
  } finally {
    await prisma.$disconnect();
  }
}

export async function PATCH(req: Request) {
  try {
    const body = await req.json();
    const { id, ...updateData } = body;

    if (!id || Object.keys(updateData).length === 0) {
      return new Response("Missing required fields", {
        status: 400,
        headers: corsHeaders,
      });
    }

    Object.keys(updateData).forEach(
      (key) => updateData[key] === undefined && delete updateData[key]
    );

    const updatedCar = await prisma.car.update({
      where: { id: Number(id) },
      data: updateData,
    });

    return new Response(JSON.stringify(updatedCar), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error updating car:", error);
    return new Response("Internal Server Error", {
      status: 500,
      headers: corsHeaders,
    });
  } finally {
    await prisma.$disconnect();
  }
}
