import React from 'react';
import { StarIcon, QuoteIcon } from 'lucide-react';

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what travel industry leaders say about working with EchoRank.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard
            name="Sarah Mitchell"
            role="Marketing Director"
            company="Serengeti Luxury Lodges"
            image="👩‍💼"
            rating={5}
            text="EchoRank transformed our online presence completely. We went from struggling to get bookings to being the top recommendation in AI travel tools. Our revenue increased by 180% in just 6 months."
          />
          <TestimonialCard
            name="Carlos Rodriguez"
            role="Owner"
            company="Costa Rica Eco Adventures"
            image="👨‍💼"
            rating={5}
            text="The AI optimization was a game-changer. We now appear in ChatGPT responses when people ask about Costa Rica adventures. Our organic traffic tripled and bookings are up 250%."
          />
          <TestimonialCard
            name="Priya Sharma"
            role="CEO"
            company="Himalayan Trekking Co."
            image="👩‍💼"
            rating={5}
            text="EchoRank understood our niche market perfectly. They got us ranking for competitive keywords and now we're the go-to recommendation for Everest treks. Incredible results!"
          />
          <TestimonialCard
            name="Ahmed Hassan"
            role="General Manager"
            company="Maldives Paradise Resort"
            image="👨‍💼"
            rating={5}
            text="Working with EchoRank was the best investment we made. Our resort now dominates search results and appears in AI travel recommendations. Bookings are through the roof!"
          />
          <TestimonialCard
            name="Emma Thompson"
            role="Marketing Manager"
            company="Alpine Ski Lodge"
            image="👩‍💼"
            rating={5}
            text="The combination of traditional SEO and AI optimization is brilliant. We're ranking #1 for ski lodge searches and featured prominently in travel AI tools. Outstanding results!"
          />
          <TestimonialCard
            name="James Wilson"
            role="Owner"
            company="Caribbean Dive Center"
            image="👨‍💼"
            rating={5}
            text="EchoRank delivered exactly what they promised. Our dive center went from unknown to being the top recommendation for Caribbean diving. Revenue increased by 300%."
          />
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-emerald-100 text-emerald-800 px-6 py-3 rounded-full">
            <StarIcon className="h-5 w-5 mr-2" />
            <span className="font-semibold">4.9/5 average rating from 150+ travel businesses</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ name, role, company, image, rating, text }: {
  name: string;
  role: string;
  company: string;
  image: string;
  rating: number;
  text: string;
}) {
  return (
    <div className="bg-gray-50 rounded-xl p-8 relative">
      <div className="absolute top-6 right-6">
        <QuoteIcon className="h-8 w-8 text-emerald-200" />
      </div>
      
      <div className="flex items-center mb-4">
        <div className="text-3xl mr-3">{image}</div>
        <div>
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <p className="text-gray-600 text-sm">{role}</p>
          <p className="text-emerald-600 text-sm font-medium">{company}</p>
        </div>
      </div>

      <div className="flex mb-4">
        {[...Array(rating)].map((_, i) => (
          <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-current" />
        ))}
      </div>

      <p className="text-gray-700 italic">"{text}"</p>
    </div>
  );
}
