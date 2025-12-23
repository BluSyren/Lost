import { Recipe } from '../types';

interface RecipeListProps {
  recipes: Recipe[];
  onRemove: (id: string) => void;
}

export default function RecipeList({ recipes, onRemove }: RecipeListProps) {
  if (recipes.length === 0) {
    return (
      <div className="text-center p-8 text-gray-500">
        No recipes added yet. Paste some URLs above!
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="bg-white rounded-lg shadow overflow-hidden border border-gray-100">
          <div className="h-40 bg-gray-200 relative">
             {/* eslint-disable-next-line @next/next/no-img-element */}
             <img 
               src={recipe.image} 
               alt={recipe.title} 
               className="w-full h-full object-cover"
             />
             <span className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 text-xs rounded capitalize">
               {recipe.source}
             </span>
          </div>
          <div className="p-4">
            <h3 className="font-bold text-gray-800 mb-2 truncate">{recipe.title}</h3>
            <div className="flex justify-between items-center mt-4">
              <a 
                href={recipe.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 text-sm hover:underline"
              >
                View Original
              </a>
              <button
                onClick={() => onRemove(recipe.id)}
                className="text-red-500 text-sm hover:text-red-700"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
