export interface Car {
  id: number;
  mark_id: string;
  folder_id: string;
  price: number;
  year: number;
  mileage: number;
  engine_volume: number;
  transmission: string;
  fuel_type: string;
  drive_type: string;
  body_type: string;
  color: string;
  images: string[] | { image: string[] };
  created_at: string;
  updated_at: string;
}

export interface ApiResponse {
  data: Car[];
  meta: {
    current_page: number;
    total_pages: number;
    total_count: number;
    per_page: number;
  };
}

export type SortOrder = 'asc' | 'desc' | '';