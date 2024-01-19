import Link from 'next/link';
import Image from 'next/image';

import HeaderBackground from "./header-background";
import logoImg from '@/assets/logo.png';
import './header.css'

export default function Header() {
    return (
        <>
            <HeaderBackground/>
            <header>
                <Link href="/" className="logo">
                    <Image src={logoImg.src} alt="Meals App Logo." width={100} height={100} className="logoImg"/>
                    MEALS OF THE DAY
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
        </>
    )
}