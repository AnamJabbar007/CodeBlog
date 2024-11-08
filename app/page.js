"use client";
import Image from "next/image";
import BlogSection from "@/components/Top-blogs";
import Typed from 'typed.js';
import React, {useRef, useEffect} from 'react';

export default function Home() {
    // Create reference to store the DOM element containing the animation
    const el = useRef(null);

    useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ['Frontend Development', 'Web Development',  'React (Next js)', 'HTML,CSS,Javascript'],
        typeSpeed: 50,
      });
  
      return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
      };
    }, []); 


  return (
    <main>
      {/*Hero section */}
      <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center bg-[var(--background)] text-[var(--foreground)]">
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
          <h1 className="text-3xl leading-snug md:text-4xl text-[var(--foreground)] dark:text-[var(--primary-foreground)]">
            Discover <span className="font-semibold">insider tips</span> and{" "}
            <br className="hidden lg:block" /> tutorials for{" "}
            <br />
            <span className="font-semibold underline decoration-[var(--primary)]">
            <span ref={el} />
            </span>
          </h1>
          <p className="mt-4 text-lg text-[var(--muted)] dark:text-[var(--muted-foreground)]">
            Discover expert tips, tutorials, and insights on modern frontend
            development. Elevate your skills and build beautiful,
            high-performance web experiences.
          </p>
          
          <div className="mt-6 bg-transparent border border-[var(--border)] rounded-lg dark:border-[var(--border)] lg:w-2/3 flex items-center">
            <form action="/subscribe" method="post" className="flex w-full">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="flex-1 h-12 px-4 text-[var(--foreground)] placeholder-[var(--input)] bg-transparent border border-[var(--border)] rounded-l-lg dark:text-[var(--card-foreground)] dark:border-[var(--border)] focus:outline-none focus:border-[var(--primary)] focus:ring-0"
              />
              <button
                type="submit"
                className="h-12 px-4 bg-primary text-white dark:text-black rounded-r-lg hover:bg-primary/70 focus:outline-none focus:bg-primary/70"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
          <Image
            src="/image.webp"
            alt="Frontend Development Illustration"
            width={500}
            height={500}
            className="w-full h-full max-w-md mx-auto"
          />
        </div>
      </section>

      {/* Top Blogs section */}
      <BlogSection />
    </main>
  );
}
