export interface Donuts {
  count: number;
  results: Donut[];
}

export interface Donut {
  id: number;
  ref: string;
  name: string;
  photo: string;
  calories: number;
}