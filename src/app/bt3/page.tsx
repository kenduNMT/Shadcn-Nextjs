import React from 'react';
import Breadcrumb from '@/components/ui/breadcrumb';

export default function HomePage() {
    const breadcrumbItems1 = [
        { label: 'Home', href: '/' },
        { label: 'Components', href: '/components' },
        { label: 'Breadcrumb' }
    ];

    const breadcrumbItems2 = [
        { label: 'Home', href: '/' },
        { label: 'List product', href: '/list-product' }
    ];

    const breadcrumbItems3 = [
        { label: 'Home', href: '/' },
        { label: 'Order', href: '/order' },
        { label: 'Order detail' }
    ];

    return (
        <div className="space-y-6">
            {/* Breadcrumb Example 1 */}
            <Breadcrumb items={breadcrumbItems1} />

            {/* Breadcrumb Example 2 */}
            <Breadcrumb items={breadcrumbItems2} />

            {/* Breadcrumb Example 3 */}
            <Breadcrumb items={breadcrumbItems3} />
        </div>
    );
}
