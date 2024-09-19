'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function NavLinks() {
    const pathname = usePathname();

    const links = [
        {
            name: 'Home',
            href: '/',
        },
        {
            name: 'Dashboard',
            href: '/dashboard',
        },
        {
            name: 'Invoices',
            href: '/dashboard/invoices',
        },
        {
            name: 'Customers',
            href: '/dashboard/customers',
        },
    ];

    return (
        <div>
            <ul>
                {links.map((link) => (
                    <li key={link.name}>
                        <Link
                            href={link.href}
                            className={`hover:bg-slate-300 ${
                                pathname === link.href
                                    ? 'text-blue-300 bg-slate-50'
                                    : ''
                            }`}
                        >
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
