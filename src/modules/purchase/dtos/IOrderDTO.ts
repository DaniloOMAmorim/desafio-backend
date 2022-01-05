export interface ICreateOrderDTO { 
  amount: number;
  customer_id?: string;
  created_at: Date;
}

export interface IFindOrderDTO { 
  start_date: string;
  end_date: string;
}
