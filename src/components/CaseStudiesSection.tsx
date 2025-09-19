import React from 'react';
import { ArrowRightIcon, TrendingUpIcon, UsersIcon, MapPinIcon } from 'lucide-react';

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Real Results from Real Travel Businesses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how we've transformed the online presence of travel businesses across the globe.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <CaseStudyCard
            title="Luxury Safari Lodge - Tanzania"
            industry="Luxury Accommodation"
            location="Serengeti, Tanzania"
            image="🏞️"
            results={[
              "340% increase in organic traffic",
              "Featured in 15+ AI travel recommendations",
              "85% increase in direct bookings",
              "Ranked #1 for 'luxury safari Tanzania'"
            ]}
            timeframe="6 months"
          />
          <CaseStudyCard
            title="Boutique Hotel Chain - Costa Rica"
            industry="Boutique Hotels"
            location="San José, Costa Rica"
            image="🏨"
            results={[
              "280% growth in Google visibility",
              "Appears in ChatGPT for Costa Rica hotels",
              "120% increase in international bookings",
              "Top 3 rankings for 25+ keywords"
            ]}
            timeframe="4 months"
          />
          <CaseStudyCard
            title="Adventure Tour Company - Nepal"
            industry="Adventure Tourism"
            location="Kathmandu, Nepal"
            image="🏔️"
            results={[
              "450% increase in qualified leads",
              "Featured in AI travel planning tools",
              "95% increase in tour bookings",
              "Ranked #1 for 'Everest base camp trek'"
            ]}
            timeframe="8 months"
          />
          <CaseStudyCard
            title="Beach Resort - Maldives"
            industry="Resort & Spa"
            location="Malé, Maldives"
            image="🏝️"
            results={[
              "220% increase in organic traffic",
              "Top recommendation in AI travel queries",
              "70% increase in direct reservations",
              "Ranked #1 for 'Maldives luxury resort'"
            ]}
            timeframe="5 months"
          />
        </div>

        <div className="text-center mt-12">
          <button className="bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-800 transition-colors flex items-center mx-auto">
            View All Case Studies
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

function CaseStudyCard({ title, industry, location, image, results, timeframe }: {
  title: string;
  industry: string;
  location: string;
  image: string;
  results: string[];
  timeframe: string;
}) {
  return (
    <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="flex items-start mb-6">
        <div className="text-4xl mr-4">{image}</div>
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
          <div className="flex items-center text-gray-600 mb-1">
            <UsersIcon className="h-4 w-4 mr-2" />
            {industry}
          </div>
          <div className="flex items-center text-gray-600">
            <MapPinIcon className="h-4 w-4 mr-2" />
            {location}
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="font-semibold text-gray-900 mb-3">Results achieved in {timeframe}:</h4>
        <ul className="space-y-2">
          {results.map((result, index) => (
            <li key={index} className="flex items-start">
              <TrendingUpIcon className="h-4 w-4 text-emerald-500 mr-2 mt-1 flex-shrink-0" />
              <span className="text-gray-700">{result}</span>
            </li>
          ))}
        </ul>
      </div>

      <button className="text-emerald-700 font-semibold hover:text-emerald-800 transition-colors">
        Read Full Case Study →
      </button>
    </div>
  );
}
