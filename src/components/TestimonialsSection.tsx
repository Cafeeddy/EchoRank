import React from 'react';
import { StarIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
export function TestimonialsSection() {
  return <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Travel Industry Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how EchoRank has helped travel businesses transform their online
            presence and boost their rankings.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard quote="EchoRank transformed our online visibility. We're now consistently appearing in AI travel recommendations, and our direct bookings have increased by 215% in just 6 months." author="Alexandra Chen" position="Marketing Director" company="Azure Bay Resort & Spa" rating={5} image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" />
          <TestimonialCard quote="Their understanding of how AI platforms rank travel businesses is unmatched. Our boutique hotel chain is now outranking major competitors in both traditional search and AI recommendations." author="Marcus Johnson" position="CEO" company="Boutique Escapes Collection" rating={5} image="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" />
          <TestimonialCard quote="The ROI we've seen from EchoRank's services has been incredible. Their specialized approach to travel industry SEO has helped us capture a market segment we previously couldn't reach." author="Sophia Patel" position="Digital Marketing Manager" company="Skyway Private Jets" rating={5} image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" />
        </div>
        <div className="mt-16 bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-8 md:mb-0 md:pr-8">
                <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Luxury Hotel" className="rounded-lg shadow-md w-full" />
              </div>
              <div className="md:w-2/3">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => <StarIcon key={i} className="h-6 w-6 text-amber-400" fill="currentColor" />)}
                </div>
                <blockquote className="text-xl italic text-gray-800 mb-6">
                  "Working with EchoRank has been transformative for our hotel
                  chain. Their deep understanding of both traditional SEO and
                  AI-powered search has given us a competitive edge we didn't
                  have before. Within 3 months, our properties started appearing
                  in top AI recommendations for luxury stays, and our organic
                  traffic increased by 340%. The most impressive part is how
                  they tailored their strategy specifically for the luxury hotel
                  market."
                </blockquote>
                <div>
                  <p className="font-bold text-gray-900">Jonathan Reynolds</p>
                  <p className="text-emerald-700">
                    Chief Marketing Officer, Elegance Hotels International
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 flex justify-center">
          <button className="p-2 rounded-full border border-gray-300 hover:border-emerald-500 hover:bg-emerald-50 transition-colors mr-4">
            <ChevronLeftIcon className="h-6 w-6 text-gray-700" />
          </button>
          <button className="p-2 rounded-full border border-gray-300 hover:border-emerald-500 hover:bg-emerald-50 transition-colors">
            <ChevronRightIcon className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </div>
    </section>;
}
function TestimonialCard({
  quote,
  author,
  position,
  company,
  rating,
  image
}) {
  return <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex mb-4">
        {[...Array(rating)].map((_, i) => <StarIcon key={i} className="h-5 w-5 text-amber-400" fill="currentColor" />)}
      </div>
      <blockquote className="text-gray-800 mb-6">"{quote}"</blockquote>
      <div className="flex items-center">
        <img src={image} alt={author} className="w-12 h-12 rounded-full object-cover mr-4" />
        <div>
          <p className="font-medium text-gray-900">{author}</p>
          <p className="text-sm text-emerald-700">
            {position}, {company}
          </p>
        </div>
      </div>
    </div>;
}