import * as React from 'react';
import Link from 'next/link';

export interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
    return (
        <nav className="flex space-x-2 text-sm" aria-label="Breadcrumb">
            {items.map((item, index) => (
                <React.Fragment key={index}>
                    {item.href ? (
                        <Link href={item.href} className="text-blue-600 hover:underline">
                            {item.label}
                        </Link>
                    ) : (
                        <span className="text-gray-500">{item.label}</span>
                    )}
                    {index < items.length - 1 && <span className="text-gray-500">›</span>}
                </React.Fragment>
            ))}
        </nav>
    );
};

export default Breadcrumb;
