"use client";

type Props = {
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
};

const categories = ["All", "Silk", "Classic", "Daily", "Premium"];

export default function FilterBar({ selectedCategory, setSelectedCategory }: Props) {
  return (
    <div className="mb-6 flex flex-wrap gap-3">
      {categories.map((category) => {
        const active = selectedCategory === category;
        return (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              active ? "bg-pink-600 text-white" : "border border-pink-200 bg-white text-slate-700"
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
