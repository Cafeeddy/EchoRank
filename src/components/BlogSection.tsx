import React from 'react';
import { CalendarIcon, ArrowRightIcon, ClockIcon } from 'lucide-react';

export function BlogSection() {
  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest Insights & SEO Tips
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay ahead with our expert insights on AI-powered SEO, travel industry trends, and digital marketing strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BlogCard
            title="How AI Search is Revolutionizing Travel Booking"
            excerpt="Discover how ChatGPT, Bard, and Claude are changing how travelers plan their trips and what it means for your SEO strategy."
            date="January 15, 2024"
            readTime="5 min read"
            category="AI SEO"
            image="🤖"
          />
          <BlogCard
            title="The Complete Guide to Local SEO for Hotels"
            excerpt="Master local search optimization with our comprehensive guide to dominating Google My Business and local search results."
            date="January 12, 2024"
            readTime="8 min read"
            category="Local SEO"
            image="🏨"
          />
          <BlogCard
            title="2024 Travel Industry SEO Trends to Watch"
            excerpt="Stay ahead of the curve with the latest SEO trends that will shape the travel industry in 2024 and beyond."
            date="January 10, 2024"
            readTime="6 min read"
            category="Industry Trends"
            image="📈"
          />
          <BlogCard
            title="Why Traditional SEO Alone Isn't Enough Anymore"
            excerpt="Learn why combining traditional SEO with AI optimization is crucial for travel businesses in the modern search landscape."
            date="January 8, 2024"
            readTime="4 min read"
            category="Strategy"
            image="🎯"
          />
          <BlogCard
            title="Case Study: 340% Traffic Increase in 6 Months"
            excerpt="Deep dive into how we helped a luxury safari lodge dominate both Google and AI search results."
            date="January 5, 2024"
            readTime="7 min read"
            category="Case Study"
            image="📊"
          />
          <BlogCard
            title="Content Strategy for AI-Powered Search"
            excerpt="Optimize your content for AI search engines with our proven framework for creating AI-friendly travel content."
            date="January 3, 2024"
            readTime="9 min read"
            category="Content Strategy"
            image="📝"
          />
        </div>

        <div className="text-center mt-12">
          <button className="bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-800 transition-colors flex items-center mx-auto">
            View All Articles
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

function BlogCard({ title, excerpt, date, readTime, category, image }: {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}) {
  return (
    <article className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="p-8">
        <div className="flex items-center mb-4">
          <div className="text-2xl mr-3">{image}</div>
          <div className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">
            {category}
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {excerpt}
        </p>
        
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center">
            <CalendarIcon className="h-4 w-4 mr-1" />
            {date}
          </div>
          <div className="flex items-center">
            <ClockIcon className="h-4 w-4 mr-1" />
            {readTime}
          </div>
        </div>
        
        <button className="mt-4 text-emerald-700 font-semibold hover:text-emerald-800 transition-colors">
          Read More →
        </button>
      </div>
    </article>
  );
}
