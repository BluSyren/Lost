"use client";

import { useState } from 'react';
import { Recipe, WeekPlan, DayPlan } from '../types';

interface MealPlannerProps {
  recipes: Recipe[];
}

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export default function MealPlanner({ recipes }: MealPlannerProps) {
  const [plan, setPlan] = useState<WeekPlan>([]);

  const generatePlan = () => {
    if (recipes.length === 0) return;

    const newPlan: WeekPlan = DAYS.map(day => {
      const dayPlan: DayPlan = { day };
      
      // Simple random assignment logic
      // In a real app, this would be smarter (e.g., balance nutrition, use leftovers)
      if (Math.random() > 0.2) {
        dayPlan.breakfast = recipes[Math.floor(Math.random() * recipes.length)];
      }
      if (Math.random() > 0.1) {
        dayPlan.lunch = recipes[Math.floor(Math.random() * recipes.length)];
      }
      dayPlan.dinner = recipes[Math.floor(Math.random() * recipes.length)];

      return dayPlan;
    });

    setPlan(newPlan);
  };

  return (
    <div className="mt-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Weekly Meal Plan</h2>
        <button
          onClick={generatePlan}
          disabled={recipes.length === 0}
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 disabled:bg-gray-400 transition-colors"
        >
          Generate New Plan
        </button>
      </div>

      {plan.length > 0 ? (
        <div className="grid grid-cols-1 gap-6">
          {plan.map((dayPlan) => (
            <div key={dayPlan.day} className="bg-white p-6 rounded-lg shadow border-l-4 border-blue-500">
              <h3 className="text-xl font-bold mb-4 text-gray-800">{dayPlan.day}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <MealSlot title="Breakfast" recipe={dayPlan.breakfast} />
                <MealSlot title="Lunch" recipe={dayPlan.lunch} />
                <MealSlot title="Dinner" recipe={dayPlan.dinner} />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center p-12 bg-gray-50 rounded-lg border border-dashed border-gray-300 text-gray-500">
          Click "Generate New Plan" to create your weekly schedule from your saved recipes.
        </div>
      )}
    </div>
  );
}

function MealSlot({ title, recipe }: { title: string, recipe?: Recipe }) {
  return (
    <div className="bg-gray-50 p-3 rounded">
      <div className="text-xs text-gray-500 uppercase font-semibold mb-1">{title}</div>
      {recipe ? (
        <div className="flex items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={recipe.image} alt="" className="w-10 h-10 rounded object-cover" />
          <div className="overflow-hidden">
             <div className="text-sm font-medium text-gray-800 truncate">{recipe.title}</div>
             <a href={recipe.url} target="_blank" className="text-xs text-blue-500 hover:underline">View Recipe</a>
          </div>
        </div>
      ) : (
        <div className="text-sm text-gray-400 italic">No meal planned</div>
      )}
    </div>
  );
}
