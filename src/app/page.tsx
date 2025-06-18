'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import CarCard from '@/components/CarCard';
import SortSelect from '@/components/SortSelect';
import Pagination from '@/components/Pagination';
import { Car, ApiResponse, SortOrder } from '@/types/car';

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [meta, setMeta] = useState({
    current_page: 1,
    total_pages: 1,
    total_count: 0,
    per_page: 12
  });

  // Get current parameters from URL
  const currentPage = parseInt(searchParams.get('page') || '1');
  const currentSort = (searchParams.get('sort') || '') as SortOrder;

  const fetchCars = async (page: number, sort: SortOrder) => {
    setLoading(true);
    setError(null);

    try {
      let url = `/api/cars?_limit=12&_page=${page}`;
      
      if (sort) {
        url += `&_sort=price&_order=${sort}`;
      }

      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error('Failed to fetch cars');
      }

      const data: ApiResponse = await response.json();
      setCars(data.data);
      setMeta(data.meta);
    } catch (err) {
      setError('Ошибка при загрузке автомобилей');
      console.error('Fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  // Update URL with new parameters
  const updateURL = (page: number, sort: SortOrder) => {
    const params = new URLSearchParams();
    
    if (page > 1) {
      params.set('page', page.toString());
    }
    
    if (sort) {
      params.set('sort', sort);
    }

    const newURL = params.toString() ? `/?${params.toString()}` : '/';
    router.push(newURL);
  };

  const handleSortChange = (sort: SortOrder) => {
    updateURL(1, sort); // Reset to first page when sorting changes
  };

  const handlePageChange = (page: number) => {
    updateURL(page, currentSort);
  };

  // Fetch cars when parameters change
  useEffect(() => {
    fetchCars(currentPage, currentSort);
  }, [currentPage, currentSort]);

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-red-600">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Каталог автомобилей
      </h1>

      {/* Sort Controls */}
      <div className="mb-6">
        <SortSelect 
          currentSort={currentSort} 
          onSortChange={handleSortChange} 
        />
      </div>

      {/* Loading State */}
      {loading && (
        <div className="text-center py-12">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <p className="mt-2 text-gray-600">Загрузка...</p>
        </div>
      )}

      {/* Cars Grid */}
      {!loading && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
            {cars.map((car, index) => (
              <CarCard key={`car-${car.id || index}`} car={car} />
            ))}
          </div>

          {/* Pagination */}
          <Pagination
            currentPage={meta.current_page}
            totalPages={meta.total_pages}
            onPageChange={handlePageChange}
          />

          {/* Results Info */}
          <div className="text-center mt-6 text-sm text-gray-600">
            Показано {cars.length} из {meta.total_count} автомобилей
          </div>
        </>
      )}
    </div>
  );
}