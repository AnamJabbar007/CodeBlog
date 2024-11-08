import React from 'react'; 
import Image from 'next/image'; // Assuming you are using Next.js
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';

const blogs = [
  {
    imageUrl: '/blogimg.jpg',
    title: 'React (Js FrameWork)',
    description: 'Learn how to get started with React, a popular JavaScript library for building user interfaces.',
    link: '/blogpost/react'
  },
  {
    imageUrl: '/javascript.jpg',
    title: 'JavaScript Tutorial',
    description: 'JavaScript tutorial, concepts, syntax, techniques for dynamic web apps. For all skill levels.',
    link: '/blogpost/js-tutorial'
  },
  {
    imageUrl:'/tailwind.jpg',
    title: 'Tailwind CSS',
    description: 'A comprehensive guide to setting up and efficiently using Tailwind CSS in your projects.',
    link: '/blogpost/tailwind'
  }
];

const BlogSection = () => {
  return (
    <section className="py-12 bg-gray-100 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[hsl(var(--foreground))]">
            Top Blogs
          </h2>
          <p className="mt-4 text-lg text-[hsl(var(--muted-foreground))]">
            Discover the latest insights and trends from our expert writers.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 bg-[hsl(var(--card))] text-[hsl(var(--card-foreground))] border dark:border-2 border-[hsl(var(--border))]"
            >
              <Image
                className="w-full h-56 object-cover rounded-t-lg mb-6"
                src={blog.imageUrl}
                alt={`Blog ${index + 1}`}
                width={300}
                height={224}
              />
              <h3 className="text-xl font-semibold text-[hsl(var(--foreground))]">
                {blog.title}
              </h3>
              <p className="my-2 text-[hsl(var(--muted-foreground))]">
                {blog.description}
              </p>
              <Link href={blog.link} className={buttonVariants({ variant: "outline" })}>
                Click here
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
