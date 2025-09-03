import { CarStatus, CarType } from "../app/generated/prisma";
import { Decimal } from "@prisma/client/runtime/library";

export interface Car {
  id: number;
  make: string;
  model: string;
  description: string;
  year: number;
  pricePerDay: Decimal;
  imageUrl: string;
  status: CarStatus;
  transmission: string;
  fuelType: string;
  type: CarType;
  color: string | null;
  engine: string | null;
  mileage: number | null;
  horsepower: number | null;
  frontImage: string | null;
  backImage: string | null;
  interiorImage: string | null;
  rearImage: string | null;
  createdAt: Date;
  updatedAt: Date;
}
