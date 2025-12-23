"use client";

import { useState } from "react";
import { Recipe } from "@/types";
import RecipeInput from "@/components/RecipeInput";
import RecipeList from "@/components/RecipeList";
import MealPlanner from "@/components/MealPlanner";

export default function Home() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const handleRecipeAdded = (recipe: Recipe) => {
    setRecipes([...recipes, recipe]);
  };

  const handleRemoveRecipe = (id: string) => {
    setRecipes(recipes.filter((r) => r.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 font-[family-name:var(--font-geist-sans)]">
      <main className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Social Meal Planner</h1>
          <p className="text-gray-600">
            Turn your saved Instagram, TikTok, and YouTube recipes into a weekly meal plan.
          </p>
        </header>

        <section className="mb-12">
          <RecipeInput onRecipeAdded={handleRecipeAdded} />
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Recipe Collection ({recipes.length})</h2>
          <RecipeList recipes={recipes} onRemove={handleRemoveRecipe} />
        </section>

        <section>
          <MealPlanner recipes={recipes} />
        </section>
      </main>
      
      <footer className="mt-20 text-center text-gray-400 text-sm">
        <p>Built with Next.js & Tailwind CSS</p>
      </footer>
    </div>
  );
}
