export interface Invoice {
    customerId: number;
    date: string;
    hours: number;
    id: number;
    paid: boolean = false;
    rate: number;
    service: string;
  }