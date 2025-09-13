export interface BookingData {
  id?: number;
  email: string;
  firstName: string;
  lastName: string;
  carModel: string;
  carMake: string;
  startDate: string | Date;
  endDate: string | Date;
  status?: "pending" | "confirmed" | "cancelled";
}
