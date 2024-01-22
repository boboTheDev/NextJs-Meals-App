import Link from 'next/link';
import Image from 'next/image';

import HeaderBackground from "./header-background";
import NavLink from "./navLink";
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
                            <NavLink url="/meals">Browse Meals</NavLink>
                        </li>
                        <li>
                            <NavLink url="/community">Meals Community</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}