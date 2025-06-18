export default function CarPlaceholder({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 400 240" className={className}>
            <svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg">
                <rect width="400" height="240" fill="#f3f4f6" />
                <path d="M80 140 L100 120 L140 110 L260 110 L300 120 L320 140 L320 180 L300 190 L280 190 L270 180 L130 180 L120 190 L100 190 L80 180 Z" fill="#6b7280" stroke="#4b5563" stroke-width="2" />

                <path d="M120 120 L140 100 L260 100 L280 120 L260 110 L140 110 Z" fill="#9ca3af" stroke="#4b5563" stroke-width="2" />

                <path d="M120 120 L140 100 L140 110 L120 120" fill="#e5e7eb" stroke="#6b7280" stroke-width="1" />

                <path d="M280 120 L260 100 L260 110 L280 120" fill="#e5e7eb" stroke="#6b7280" stroke-width="1" />

                <rect x="150" y="105" width="40" height="15" fill="#e5e7eb" stroke="#6b7280" stroke-width="1" />
                <rect x="210" y="105" width="40" height="15" fill="#e5e7eb" stroke="#6b7280" stroke-width="1" />

                <circle cx="130" cy="180" r="20" fill="#374151" stroke="#1f2937" stroke-width="2" />
                <circle cx="130" cy="180" r="12" fill="#6b7280" />
                <circle cx="130" cy="180" r="6" fill="#9ca3af" />

                <circle cx="270" cy="180" r="20" fill="#374151" stroke="#1f2937" stroke-width="2" />
                <circle cx="270" cy="180" r="12" fill="#6b7280" />
                <circle cx="270" cy="180" r="6" fill="#9ca3af" />

                <ellipse cx="90" cy="140" rx="8" ry="12" fill="#fbbf24" stroke="#f59e0b" stroke-width="1" />

                <ellipse cx="310" cy="140" rx="6" ry="10" fill="#ef4444" stroke="#dc2626" stroke-width="1" />

                <rect x="200" y="135" width="6" height="3" rx="1" fill="#4b5563" />

                <rect x="85" y="155" width="25" height="12" rx="2" fill="#ffffff" stroke="#6b7280" stroke-width="1" />

                <line x1="85" y1="145" x2="95" y2="145" stroke="#4b5563" stroke-width="1" />
                <line x1="85" y1="148" x2="95" y2="148" stroke="#4b5563" stroke-width="1" />
                <line x1="85" y1="151" x2="95" y2="151" stroke="#4b5563" stroke-width="1" />

                <text x="200" y="75" text-anchor="middle" fill="#9ca3af" font-family="Arial, sans-serif" font-size="16" font-weight="500">
                    🚗 Фото автомобиля
                </text>

                <ellipse cx="200" cy="205" rx="80" ry="8" fill="#d1d5db" opacity="0.5" />
            </svg>
        </svg>
    );
}