import React from 'react';
import { ArrowRightIcon } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-700 to-blue-700 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full mix-blend-overlay opacity-10"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-white rounded-full mix-blend-overlay opacity-10"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Dominate Travel Search Results in the AI Era?
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Join the travel businesses already leveraging our expertise to stand
            out in both traditional search and AI-powered recommendations.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <StatCard number="340%" text="Average Increase in Organic Traffic" />
              <StatCard number="78%" text="of Clients Appear in Top AI Recommendations" />
              <StatCard number="215%" text="Average Growth in Direct Bookings" />
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="bg-white text-emerald-700 hover:bg-gray-100 px-8 py-4 rounded-md font-medium text-lg transition-colors flex items-center justify-center">
              Start Your SEO Journey
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </button>
            <button className="border border-white text-white hover:bg-white/10 px-8 py-4 rounded-md font-medium text-lg transition-colors">
              Schedule a Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ number, text }: { number: string; text: string }) {
  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-bold text-white mb-2">
        {number}
      </div>
      <div className="text-white/80">{text}</div>
    </div>
  );
}
