'use client';

import Image from 'next/image';
import { Car } from '@/types/car';
import CarPlaceholder from './CarPlaceholder';

interface CarCardProps {
    car: Car;
}

export default function CarCard({ car }: CarCardProps) {
    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('ru-RU').format(price);
    };

    const formatMileage = (mileage: number) => {
        return new Intl.NumberFormat('ru-RU').format(mileage);
    };

    const carName = `${car.mark_id} ${car.folder_id}`;
    // Handle both flat array and nested image object structures
    const hasImages = car.images && 
        (Array.isArray(car.images) ? car.images.length > 0 : 
         car.images.image && car.images.image.length > 0);
    
    const mainImage = hasImages ? 
        (Array.isArray(car.images) ? car.images[0] : car.images.image[0]) : 
        null;

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            {/* Car Image */}
            <div className="relative h-48 bg-gray-200">
                {hasImages && mainImage ? (
                    <Image
                        src={mainImage}
                        alt={carName}
                        fill
                        className="object-cover"
                        onError={(e) => {
                            console.error('Image failed to load:', mainImage);
                            // Fallback to placeholder if image fails to load
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.parentElement?.classList.add('image-error');
                        }}
                        onLoad={() => {
                            console.log('Image loaded successfully:', mainImage);
                        }}
                    />
                ) : (
                    <CarPlaceholder className="w-full h-full" />
                )}
            </div>

            {/* Car Details */}
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {carName}
                </h3>

                <div className="text-2xl font-bold text-blue-600 mb-3">
                    {formatPrice(car.price)} ₽
                </div>

                <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex justify-between">
                        <span>Год:</span>
                        <span className="font-medium">{car.year}</span>
                    </div>

                    <div className="flex justify-between">
                        <span>Пробег:</span>
                        <span className="font-medium">{formatMileage(car.mileage)} км</span>
                    </div>

                    <div className="flex justify-between">
                        <span>Двигатель:</span>
                        <span className="font-medium">{car.engine_volume}л</span>
                    </div>

                    <div className="flex justify-between">
                        <span>КПП:</span>
                        <span className="font-medium">{car.transmission}</span>
                    </div>

                    <div className="flex justify-between">
                        <span>Топливо:</span>
                        <span className="font-medium">{car.fuel_type}</span>
                    </div>
                </div>

                <button className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200">
                    Подробнее
                </button>
            </div>
        </div>
    );
}