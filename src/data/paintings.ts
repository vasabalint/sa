import paintingsData from "../../paintings.json";

export interface Painting {
  id: string;
  title: string;
  year: number;
  technique: string;
  dimensions: string;
  category: string;
  description: string;
  image: string;
  featured: boolean;
}

export const paintings: Painting[] = paintingsData as Painting[];

export function getPaintingById(id: string): Painting | undefined {
  return paintings.find((p) => p.id === id);
}

export function getPaintingsByCategory(category: string): Painting[] {
  if (category === "All") return paintings;
  return paintings.filter((p) => p.category === category);
}

export function getAllCategories(): string[] {
  const cats = paintings.map((p) => p.category);
  return ["All", ...Array.from(new Set(cats))];
}
