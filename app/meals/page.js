import Link from 'next/link';

export default function Meals(){ // name can be anything
    return (
        <main>
                <h1>Meals Page.</h1>
                <p><Link href="/meals/meal-slug">go to any page</Link></p>
        </main>
    );
}