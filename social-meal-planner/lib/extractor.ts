import { Recipe } from '../types';

export const extractRecipeFromUrl = async (url: string): Promise<Recipe> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  let source: Recipe['source'] = 'other';
  if (url.includes('instagram.com')) source = 'instagram';
  else if (url.includes('tiktok.com')) source = 'tiktok';
  else if (url.includes('youtube.com')) source = 'youtube';
  else if (url.includes('pinterest.com')) source = 'pinterest';

  // Mock data generation based on URL or random
  const id = Math.random().toString(36).substring(7);
  
  // In a real app, this would call a backend scraping service
  // For this demo, we'll generate plausible looking data
  
  const mockTitles = [
    'Spicy Feta Pasta',
    'Green Goddess Salad',
    'Overnight Oats',
    'Avocado Toast with Egg',
    'Chicken Teriyaki Bowl',
    'Salmon with Asparagus',
    'Creamy Mushroom Risotto',
    'Banana Bread'
  ];

  const randomTitle = mockTitles[Math.floor(Math.random() * mockTitles.length)];
  
  return {
    id,
    url,
    source,
    title: `${randomTitle} (${source})`,
    image: `https://placehold.co/600x400?text=${encodeURIComponent(randomTitle)}`,
    ingredients: ['Ingredient 1', 'Ingredient 2', 'Ingredient 3'],
    tags: ['easy', 'quick']
  };
};
