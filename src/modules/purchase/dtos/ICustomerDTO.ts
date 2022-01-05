export interface ICreateCustomerDTO { 
  name: string;
  email: string;
}

export interface IFindCustomerDTO {
  email: string;
  average_ticket_amount: number;
  total_spend_amount: number;
}