import React from 'react';
import { SearchIcon, BrainIcon, BarChart3Icon, TargetIcon, ZapIcon, ShieldIcon } from 'lucide-react';

export function FeaturesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            AI-First SEO That Actually Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our specialized approach combines traditional SEO mastery with cutting-edge AI optimization 
            to ensure your travel business dominates every search platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<BrainIcon />}
            title="AI Search Optimization"
            description="Optimize for ChatGPT, Bard, and Claude to appear in AI-generated travel recommendations and answers."
          />
          <FeatureCard
            icon={<SearchIcon />}
            title="Traditional SEO Mastery"
            description="Google-first strategies that ensure you rank #1 for your target keywords and local searches."
          />
          <FeatureCard
            icon={<TargetIcon />}
            title="Travel Industry Focus"
            description="Specialized knowledge of hotels, resorts, tour operators, and travel booking platforms."
          />
          <FeatureCard
            icon={<BarChart3Icon />}
            title="Performance Analytics"
            description="Detailed reporting on rankings, traffic, and conversion metrics across all platforms."
          />
          <FeatureCard
            icon={<ZapIcon />}
            title="Rapid Implementation"
            description="Quick wins and long-term strategies that start delivering results within 30 days."
          />
          <FeatureCard
            icon={<ShieldIcon />}
            title="White-Hat Practices"
            description="Ethical, sustainable SEO that builds lasting authority without risking penalties."
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, description }: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="p-6 rounded-xl border border-gray-200 hover:border-emerald-300 hover:shadow-lg transition-all">
      <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 text-emerald-600 rounded-lg mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
