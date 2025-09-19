import React from 'react';
import { TrendingUpIcon, SearchIcon, BarChartIcon } from 'lucide-react';
export function HeroSection() {
  return <section className="pt-28 pb-20 md:pt-36 md:pb-32 bg-gradient-to-br from-blue-50 to-emerald-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Elevate Your Travel Brand in
              <span className="text-emerald-700"> AI-Powered Search</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Specialized SEO solutions designed to make your travel business
              stand out in AI answers and traditional search. Boost visibility
              where it matters most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-3 rounded-md font-medium text-lg transition-colors">
                Start Your SEO Journey
              </button>
              <button className="border border-emerald-700 text-emerald-700 hover:bg-emerald-50 px-8 py-3 rounded-md font-medium text-lg transition-colors">
                View Case Studies
              </button>
            </div>
            <div className="mt-8 flex items-center text-gray-600">
              <span className="mr-2">Trusted by leading travel brands</span>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="bg-white p-6 rounded-xl shadow-xl">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="border-b border-gray-200 pb-4 mb-4">
                <div className="bg-gray-100 rounded-md p-3 flex items-center">
                  <SearchIcon className="h-5 w-5 text-gray-500 mr-2" />
                  <span className="text-gray-700">
                    best luxury hotels in bali
                  </span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-3 border border-blue-100 bg-blue-50 rounded-lg">
                  <p className="text-gray-800 font-medium">
                    Top AI Recommended Luxury Hotels in Bali:
                  </p>
                  <p className="text-emerald-700 font-bold mt-2">
                    1. The Serene Resort & Spa Bali
                  </p>
                  <p className="text-gray-600 text-sm mt-1">
                    Offering unmatched luxury experience with private villas...
                  </p>
                </div>
                <div className="flex items-center justify-between px-3">
                  <div className="flex items-center">
                    <TrendingUpIcon className="h-5 w-5 text-emerald-600 mr-2" />
                    <span className="text-sm text-gray-700">
                      Ranking improvement: +7 positions
                    </span>
                  </div>
                  <div className="flex items-center">
                    <BarChartIcon className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-sm text-gray-700">
                      +145% visibility
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -right-4 -bottom-4 bg-emerald-700 text-white p-4 rounded-lg shadow-lg transform rotate-3">
              <p className="text-sm font-medium">
                Your Brand Echoing In AI Answers
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
}