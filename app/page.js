import Image from 'next/image'
import './page.css'
import Link from 'next/link';

import HeroSlideShow from '@/components/heroSlideShow/heroSlideShow';

export default function Home() {
  return (
    <>
      <main>
        <div className='slideshow-session'>
          <div className='slideshow'>
            <HeroSlideShow/>
          </div>
          <div className='slideshow-cta'>
            <div className='slideshow-text'>
              <h1>Love a meal? Share a meal.</h1>
              <p>Taste & share meals from all over the world!</p>
            </div>
            <div className='cta'>
              <Link href="/community">Join Our Community</Link>
              <Link href="/meals">Explore Meals</Link>
            </div>
          </div>
        </div>
        <section>
          <h2>How it works</h2>
          <p>
            MEALS OF THE DAY is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            MEALS OF THE DAY is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section>
          <h2>Why MEALS OF THE DAY?</h2>
          <p>
            MEALS OF THE DAY is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            MEALS OF THE DAY is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
  )
}
