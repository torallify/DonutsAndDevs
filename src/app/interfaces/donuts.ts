export interface Donuts {
  count: number;
  results: Donut[];
}

export interface Donut {
  id: number;
  name: string;
  photo: string;
  calories: number;
}