import React from 'react';
import { ArrowRightIcon, StarIcon, CheckCircleIcon } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-emerald-50 via-white to-blue-50 py-20 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <StarIcon className="h-4 w-4 mr-2" />
            #1 AI-Powered SEO for Travel Industry
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Make Your Travel Brand 
            <span className="text-emerald-600"> Echo</span> in 
            <span className="text-blue-600"> AI Answers</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
            Dominate search results in both Google and AI-powered platforms like ChatGPT. 
            We specialize in getting travel businesses to the top of every search, 
            every recommendation, every conversation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-800 transition-colors flex items-center justify-center">
              Start Your SEO Journey
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </button>
            <button className="border border-emerald-700 text-emerald-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-50 transition-colors">
              View Our Results
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <StatCard 
              icon={<CheckCircleIcon />}
              number="340%"
              label="Average Increase in Organic Traffic"
              description="Our clients see dramatic improvements in search visibility"
            />
            <StatCard 
              icon={<CheckCircleIcon />}
              number="78%"
              label="Appear in Top AI Recommendations"
              description="Featured prominently in ChatGPT and Bard responses"
            />
            <StatCard 
              icon={<CheckCircleIcon />}
              number="215%"
              label="Growth in Direct Bookings"
              description="More qualified leads converting to actual bookings"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ icon, number, label, description }: {
  icon: React.ReactNode;
  number: string;
  label: string;
  description: string;
}) {
  return (
    <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 text-emerald-600 rounded-lg mb-4">
        {icon}
      </div>
      <div className="text-3xl font-bold text-gray-900 mb-2">{number}</div>
      <div className="text-lg font-semibold text-gray-800 mb-2">{label}</div>
      <div className="text-gray-600 text-sm">{description}</div>
    </div>
  );
}
