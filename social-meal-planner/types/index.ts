export interface Recipe {
  id: string;
  url: string;
  source: 'instagram' | 'tiktok' | 'youtube' | 'pinterest' | 'other';
  title: string;
  image?: string;
  ingredients: string[];
  tags: string[];
}

export interface DayPlan {
  day: string; // "Monday", "Tuesday", etc.
  breakfast?: Recipe;
  lunch?: Recipe;
  dinner?: Recipe;
}

export type WeekPlan = DayPlan[];
