// src/types/Item.ts
export type Item = {
  id: number;
  type: "movie" | "book";
  title: string;
  authorOrDirector: string;
  image: string;
  rating: number; // 1~5
};
