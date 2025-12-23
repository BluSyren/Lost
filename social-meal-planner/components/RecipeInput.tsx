"use client";

import { useState } from 'react';
import { Recipe } from '../types';
import { extractRecipeFromUrl } from '../lib/extractor';

interface RecipeInputProps {
  onRecipeAdded: (recipe: Recipe) => void;
}

export default function RecipeInput({ onRecipeAdded }: RecipeInputProps) {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;

    setLoading(true);
    setError('');

    try {
      const recipe = await extractRecipeFromUrl(url);
      onRecipeAdded(recipe);
      setUrl('');
    } catch (err) {
      setError('Failed to extract recipe. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Add Social Recipe</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="url"
          placeholder="Paste Instagram, TikTok, etc. URL here"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 disabled:bg-blue-300 transition-colors"
        >
          {loading ? 'Extracting...' : 'Add Recipe'}
        </button>
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </form>
    </div>
  );
}
