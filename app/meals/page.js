import Link from 'next/link';

import './page.css';

export default function MealsPage(){ 
    return (
        <main>
                <h1>Meals Page.</h1>
                <p><Link href="/meals/meal-slug">go to any page</Link></p>
        </main>
    );
}