export interface Product {
  id: number | string;
  name: string;
  category: string;
  price: number;
  description: string;
  imageURL: string;
  isAvailable: boolean;
  featured: boolean;
  whatsAppMessage: string;
  tags: string;
  addedOn: string;
  displayOrder: number;
  offer: string;
}

export interface ProductsResponse {
  table: {
    rows: Array<{
      c: Array<{
        v: any;
      } | null>;
    }>;
  };
}
