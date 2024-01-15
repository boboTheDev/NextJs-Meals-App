import Link from 'next/link';
import Image from 'next/image';

import logoImg from '@/assets/logo.png';

import './header.css'

export default function Header() {
    return (
        <header>
            <Link href="/">
                <Image src={logoImg.src} alt="Meals App Logo." width={500} height={500}/>
                Meals App
            </Link>

            <nav>
                <ul>
                    <li>
                        <Link href="/meals">Browse Meals</Link>
                    </li>
                    <li>
                        <Link href="/community">Meals Community</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}