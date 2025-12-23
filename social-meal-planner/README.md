# Social Recipe Meal Planner

This is a Next.js application that helps you organize recipes from social media (Instagram, TikTok, YouTube, etc.) into a weekly meal plan.

## Features

- **Recipe Extraction**: Paste a URL from a social platform. The app mocks the extraction of recipe details (Title, Image, Ingredients).
- **Recipe Collection**: View and manage your saved recipes.
- **Meal Planning**: Automatically generate a weekly meal plan (Breakfast, Lunch, Dinner) from your collection.

## getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) with your browser.

## Project Structure

- `app/page.tsx`: Main application page.
- `components/`: React components (RecipeInput, RecipeList, MealPlanner).
- `lib/extractor.ts`: Mock service to simulate recipe extraction from URLs.
- `types/`: TypeScript definitions.

## Note

Since real-time scraping of social media platforms often requires expensive APIs or complex scraping logic (which violates TOS), this project uses a **mock extractor** (`lib/extractor.ts`) to simulate the experience. In a real production environment, you would replace this with a backend service using official APIs (e.g., Instagram Graph API) or a third-party scraping service.
