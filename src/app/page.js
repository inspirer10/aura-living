'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

import Categories from './Components/Categories';
import FeaturedProjects from './Components/FeaturedProjects';
import Header from './Components/Header';
import Introduction from './Components/Introduction';
import OurStory from './Components/OurStory';
import Footer from './Components/Footer';

export default function Home() {
    useEffect(() => {
        const lenis = new Lenis();

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }, []);

    return (
        <>
            <Header />
            <Introduction />
            <FeaturedProjects />
            <Categories />
            <OurStory />
            <Footer />
        </>
    );
}
