import React, { useState } from 'react';
import { ArrowRightIcon, TrendingUpIcon, UsersIcon, BarChart2Icon } from 'lucide-react';
export function CaseStudiesSection() {
  const [activeTab, setActiveTab] = useState('hotels');
  return <section id="case-studies" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Success Stories in Travel SEO
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how we've helped travel businesses dominate both traditional
            search and AI-powered recommendations.
          </p>
        </div>
        <div className="flex flex-wrap justify-center mb-10">
          <TabButton active={activeTab === 'hotels'} onClick={() => setActiveTab('hotels')}>
            Hotels
          </TabButton>
          <TabButton active={activeTab === 'spas'} onClick={() => setActiveTab('spas')}>
            Spas
          </TabButton>
          <TabButton active={activeTab === 'agencies'} onClick={() => setActiveTab('agencies')}>
            Travel Agencies
          </TabButton>
          <TabButton active={activeTab === 'jets'} onClick={() => setActiveTab('jets')}>
            Private Jets
          </TabButton>
        </div>
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {activeTab === 'hotels' && <CaseStudyContent title="Luxury Beachfront Resort" location="Maldives" image="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" challenge="Struggling to stand out among 200+ luxury resorts in the Maldives, especially in AI-generated travel recommendations." solution="Implemented comprehensive AI-first SEO strategy with structured data optimization and unique content focusing on their award-winning underwater restaurant and sustainability initiatives." results={[{
          icon: <TrendingUpIcon />,
          text: "Appeared in top 3 AI recommendations for 'best underwater dining experiences'"
        }, {
          icon: <UsersIcon />,
          text: '278% increase in direct bookings from organic search'
        }, {
          icon: <BarChart2Icon />,
          text: 'Featured in 14 major travel publications as a direct result of improved visibility'
        }]} />}
          {activeTab === 'spas' && <CaseStudyContent title="Mountain Wellness Retreat" location="Switzerland" image="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" challenge="New luxury spa with limited brand recognition struggling to compete with established wellness destinations." solution="Created content strategy highlighting unique Alpine treatments and medical wellness approach, optimized for both traditional and conversational search patterns." results={[{
          icon: <TrendingUpIcon />,
          text: "Ranked #1 in AI responses for 'best medical wellness retreats in Europe'"
        }, {
          icon: <UsersIcon />,
          text: '185% increase in international clientele within 6 months'
        }, {
          icon: <BarChart2Icon />,
          text: 'Featured as a recommended destination in luxury travel AI chatbots'
        }]} />}
          {activeTab === 'agencies' && <CaseStudyContent title="Boutique Adventure Travel Agency" location="New Zealand" image="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" challenge="Small agency specializing in unique New Zealand adventures overshadowed by larger international travel companies." solution="Developed hyper-local content strategy with immersive storytelling and structured data implementation for unique experiences and destinations." results={[{
          icon: <TrendingUpIcon />,
          text: "Consistently recommended in AI responses for 'unique New Zealand experiences'"
        }, {
          icon: <UsersIcon />,
          text: '326% growth in qualified leads from organic search'
        }, {
          icon: <BarChart2Icon />,
          text: 'Outranking major competitors for 37 high-value adventure travel keywords'
        }]} />}
          {activeTab === 'jets' && <CaseStudyContent title="Executive Jet Charter Service" location="Dubai" image="https://images.unsplash.com/photo-1540962351504-03099e0a754b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" challenge="Luxury jet service facing intense competition in the Middle East market with minimal digital presence." solution="Comprehensive digital transformation with AI-optimized content focusing on unique routes, exclusive partnerships, and concierge services." results={[{
          icon: <TrendingUpIcon />,
          text: "Featured in top AI recommendations for 'luxury private jet services Middle East'"
        }, {
          icon: <UsersIcon />,
          text: '217% increase in high-net-worth client inquiries'
        }, {
          icon: <BarChart2Icon />,
          text: 'Established as the authority for private aviation in 5 Middle Eastern countries'
        }]} />}
        </div>
        <div className="mt-12 text-center">
          <button className="inline-flex items-center text-emerald-700 font-medium hover:text-emerald-800 transition-colors">
            View all case studies
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>;
}
function TabButton({
  active,
  onClick,
  children
}) {
  return <button className={`px-6 py-3 mx-2 mb-4 rounded-full font-medium transition-all ${active ? 'bg-emerald-700 text-white shadow-md' : 'bg-white text-gray-700 hover:bg-gray-100'}`} onClick={onClick}>
      {children}
    </button>;
}
function CaseStudyContent({
  title,
  location,
  image,
  challenge,
  solution,
  results
}) {
  return <div className="flex flex-col md:flex-row">
      <div className="md:w-1/2">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="md:w-1/2 p-8">
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
          <p className="text-emerald-700 font-medium">{location}</p>
        </div>
        <div className="mb-4">
          <h4 className="text-lg font-semibold text-gray-900 mb-2">
            Challenge
          </h4>
          <p className="text-gray-700">{challenge}</p>
        </div>
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-2">Solution</h4>
          <p className="text-gray-700">{solution}</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-3">Results</h4>
          <div className="space-y-4">
            {results.map((result, index) => <div key={index} className="flex items-start">
                <div className="bg-emerald-100 p-2 rounded-full mr-3">
                  <div className="text-emerald-700">{result.icon}</div>
                </div>
                <p className="text-gray-700">{result.text}</p>
              </div>)}
          </div>
        </div>
      </div>
    </div>;
}