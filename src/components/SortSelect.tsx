'use client';

import { SortOrder } from '@/types/car';

interface SortSelectProps {
  currentSort: SortOrder;
  onSortChange: (sort: SortOrder) => void;
}

export default function SortSelect({ currentSort, onSortChange }: SortSelectProps) {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
      <label className="text-sm font-medium text-gray-700">
        Сортировка по цене:
      </label>
      <select
        value={currentSort}
        onChange={(e) => onSortChange(e.target.value as SortOrder)}
        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        <option value="">Не выбрана</option>
        <option value="asc">По возрастанию</option>
        <option value="desc">По убыванию</option>
      </select>
    </div>
  );
}