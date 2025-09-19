import React from 'react';
import { ArrowRightIcon, CalendarIcon, UserIcon, TagIcon } from 'lucide-react';
export function BlogSection() {
  return <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest Insights on SEO & AI
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay ahead with our latest research and strategies for dominating
            both traditional and AI-powered search.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BlogCard title="How ChatGPT is Changing Hotel Search Behavior" excerpt="Discover how AI assistants are transforming the way travelers search for and book accommodations, and what it means for your hotel's digital strategy." category="AI Trends" author="Emma Roberts" date="May 15, 2023" image="https://images.unsplash.com/photo-1568084680786-a84f91d1153c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" />
          <BlogCard title="Structured Data: The Secret Weapon for Travel Businesses in AI Search" excerpt="Learn how properly implemented schema markup can dramatically improve your visibility in both traditional search engines and AI platforms." category="Technical SEO" author="Michael Chang" date="April 28, 2023" image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" />
          <BlogCard title="7 Content Strategies That Make AI Assistants Recommend Your Travel Business" excerpt="Explore proven content approaches that increase the likelihood of AI platforms recommending your travel services to potential customers." category="Content Strategy" author="Sarah Johnson" date="April 10, 2023" image="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" />
        </div>
        <div className="mt-12 text-center">
          <button className="inline-flex items-center text-emerald-700 font-medium hover:text-emerald-800 transition-colors">
            View all articles
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </button>
        </div>
        <div className="mt-20 bg-gray-50 rounded-xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get the latest insights on SEO strategies for the travel industry,
              AI search trends, and exclusive tips delivered straight to your
              inbox.
            </p>
          </div>
          <form className="max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input type="email" placeholder="Enter your email address" className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent" required />
              <button type="submit" className="bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-3 rounded-md font-medium transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-3 text-center">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </form>
        </div>
      </div>
    </section>;
}
function BlogCard({
  title,
  excerpt,
  category,
  author,
  date,
  image
}) {
  return <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-shadow">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="flex items-center mb-3">
          <TagIcon className="h-4 w-4 text-emerald-600 mr-1" />
          <span className="text-sm text-emerald-700 font-medium">
            {category}
          </span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <UserIcon className="h-4 w-4 text-gray-500 mr-1" />
            <span className="text-sm text-gray-600">{author}</span>
          </div>
          <div className="flex items-center">
            <CalendarIcon className="h-4 w-4 text-gray-500 mr-1" />
            <span className="text-sm text-gray-600">{date}</span>
          </div>
        </div>
      </div>
    </div>;
}