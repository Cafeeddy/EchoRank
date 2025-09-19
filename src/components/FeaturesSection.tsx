import React from 'react';
import { TrendingUpIcon, SearchIcon, MessageSquareIcon, BarChart2Icon, MonitorIcon, DatabaseIcon } from 'lucide-react';
export function FeaturesSection() {
  return <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Specialized SEO for the Travel Industry
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive approach ensures your travel business ranks
            prominently in both traditional search and new AI-powered platforms.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard icon={<SearchIcon className="h-8 w-8 text-emerald-600" />} title="AI-First Optimization" description="Strategic content and technical optimization designed specifically for large language models like ChatGPT and Google's AI search." />
          <FeatureCard icon={<TrendingUpIcon className="h-8 w-8 text-blue-600" />} title="Traditional SEO Excellence" description="Comprehensive keyword research, on-page optimization, and backlink strategies tailored to travel industry search patterns." />
          <FeatureCard icon={<MessageSquareIcon className="h-8 w-8 text-purple-600" />} title="Conversational Search Ready" description="Optimize your content for natural language queries that travelers use when interacting with AI assistants." />
          <FeatureCard icon={<BarChart2Icon className="h-8 w-8 text-amber-600" />} title="Performance Analytics" description="Track your visibility across traditional search and AI platforms with our comprehensive analytics dashboard." />
          <FeatureCard icon={<MonitorIcon className="h-8 w-8 text-red-600" />} title="Competitor Analysis" description="Gain insights into your competitors' strategies and find opportunities to outrank them in both traditional and AI search." />
          <FeatureCard icon={<DatabaseIcon className="h-8 w-8 text-indigo-600" />} title="Structured Data Mastery" description="Implementation of travel-specific schema markup that helps AI systems better understand your offerings." />
        </div>
        <div className="mt-16 bg-gradient-to-r from-emerald-50 to-blue-50 p-8 rounded-xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                See How Your Travel Brand Ranks in AI Responses
              </h3>
              <p className="text-gray-700 mb-4">
                Try our free AI ranking simulator to discover how your hotel,
                spa, or travel agency appears in AI-generated recommendations.
              </p>
              <button className="bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-3 rounded-md font-medium transition-colors">
                Try Free Ranking Simulator
              </button>
            </div>
            <div className="md:w-1/3">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-1"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-1"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="border-b border-gray-200 pb-2 mb-2">
                  <div className="bg-gray-100 rounded-md p-2 text-sm">
                    best luxury spa in thailand
                  </div>
                </div>
                <div className="text-sm text-gray-800">
                  <p className="font-medium">AI Results:</p>
                  <p className="mt-1">1. [Your Spa Name Here]</p>
                  <p>2. Competitor Spa</p>
                  <p>3. Another Spa</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}
function FeatureCard({
  icon,
  title,
  description
}) {
  return <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-emerald-200 hover:shadow-md transition-all">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>;
}