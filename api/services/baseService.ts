import { Response, Request } from "express";
export class BaseService {
  constructor(req: Request) {}
  getDate(): Date {
    return new Date();
  }
  dateNullToString(dateTime: Date): string {
    if (dateTime) {
      return dateTime.toLocaleDateString();
    } else {
      return "";
    }
  }
}
