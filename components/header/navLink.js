'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import './navLink.css'

export default function NavLink({url, children}) {
    const path = usePathname();
    return (
        <Link 
            href={url}
            className = {path.startsWith(url) ? 'active': ''}
        >
            {children}
        </Link>
    )
}