// types.ts
export interface Client {
  id: number;
  name: string;
  email: string;
  phone: string;
}

export interface ClientFormProps {
  onAddClient: (client: Omit<Client, 'id'>) => void;
}