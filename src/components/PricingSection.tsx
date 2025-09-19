import React, { useState } from 'react';
import { CheckIcon, XIcon, HelpCircleIcon } from 'lucide-react';
export function PricingSection() {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [businessSize, setBusinessSize] = useState('medium');
  const [additionalServices, setAdditionalServices] = useState({
    contentCreation: false,
    technicalSEO: false,
    weeklyReporting: false
  });
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const apiBase = (import.meta as any).env?.VITE_API_BASE || '';
  const getBasePrice = plan => {
    const prices = {
      basic: billingCycle === 'monthly' ? 999 : 899 * 12,
      pro: billingCycle === 'monthly' ? 1999 : 1799 * 12,
      enterprise: billingCycle === 'monthly' ? 3999 : 3599 * 12
    };
    const sizeMultiplier = {
      small: 0.8,
      medium: 1,
      large: 1.3
    };
    return Math.round(prices[plan] * sizeMultiplier[businessSize]);
  };
  const getAdditionalCost = () => {
    let additionalCost = 0;
    if (additionalServices.contentCreation) additionalCost += 500;
    if (additionalServices.technicalSEO) additionalCost += 400;
    if (additionalServices.weeklyReporting) additionalCost += 300;
    return billingCycle === 'monthly' ? additionalCost : additionalCost * 12;
  };
  const toggleAdditionalService = service => {
    setAdditionalServices(prev => ({
      ...prev,
      [service]: !prev[service]
    }));
  };
  const total = (getBasePrice('pro') + getAdditionalCost());
  const submitQuote = async () => {
    try {
      setStatus('submitting');
      setStatusMessage('');
      const res = await fetch(`${apiBase}/api/quote`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          businessSize,
          billingCycle,
          services: additionalServices,
          totalEstimate: total
        })
      });
      if (!res.ok) throw new Error('Failed to submit');
      setStatus('success');
      setStatusMessage('Quote request sent! We will contact you soon.');
    } catch (e) {
      setStatus('error');
      setStatusMessage('Could not send your quote. Please try again.');
    }
  };
  return <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Transparent Pricing for Travel Industry SEO
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your business needs and scale as your
            online presence grows.
          </p>
        </div>
        <div className="flex justify-center mb-10">
          <div className="bg-gray-100 p-1 rounded-full">
            <button className={`px-6 py-2 rounded-full font-medium transition-all ${billingCycle === 'monthly' ? 'bg-emerald-700 text-white' : 'text-gray-700'}`} onClick={() => setBillingCycle('monthly')}>
              Monthly
            </button>
            <button className={`px-6 py-2 rounded-full font-medium transition-all ${billingCycle === 'annual' ? 'bg-emerald-700 text-white' : 'text-gray-700'}`} onClick={() => setBillingCycle('annual')}>
              Annual (10% off)
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <PricingCard title="Basic" price={getBasePrice('basic')} description="Essential SEO services for smaller travel businesses looking to establish an online presence." features={['AI Search Optimization', 'Keyword Research', 'Monthly Reporting', 'Basic Content Recommendations', 'Google Business Profile Optimization']} notIncluded={['Competitor Analysis', 'Technical SEO Audit', 'Content Creation', 'Link Building']} cta="Get Started" highlighted={false} billingCycle={billingCycle} />
          <PricingCard title="Pro" price={getBasePrice('pro')} description="Comprehensive SEO strategy for established travel businesses aiming to grow their digital presence." features={['Everything in Basic', 'Advanced AI Ranking Optimization', 'Competitor Analysis', 'Technical SEO Implementation', 'Content Strategy', 'Link Building (10 per month)', 'Bi-weekly Reporting']} notIncluded={['Custom Content Creation', 'Dedicated Account Manager']} cta="Get Started" highlighted={true} billingCycle={billingCycle} badge="Most Popular" />
          <PricingCard title="Enterprise" price={getBasePrice('enterprise')} description="Full-service solution for luxury travel brands requiring premium SEO services and dedicated support." features={['Everything in Pro', 'Custom Content Creation', 'Advanced Technical SEO', 'Premium Link Building (25+ per month)', 'Weekly Reporting', 'Dedicated Account Manager', '24/7 Priority Support', 'Custom AI Ranking Strategy']} notIncluded={[]} cta="Contact Us" highlighted={false} billingCycle={billingCycle} />
        </div>
        <div className="bg-gray-50 rounded-xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Custom Pricing Calculator
          </h3>
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <label className="block text-gray-700 font-medium mb-2">
                Business Size
              </label>
              <div className="flex flex-wrap gap-4">
                <SizeButton active={businessSize === 'small'} onClick={() => setBusinessSize('small')}>
                  Small
                  <span className="text-xs block mt-1">
                    (1-10 rooms/locations)
                  </span>
                </SizeButton>
                <SizeButton active={businessSize === 'medium'} onClick={() => setBusinessSize('medium')}>
                  Medium
                  <span className="text-xs block mt-1">
                    (11-50 rooms/locations)
                  </span>
                </SizeButton>
                <SizeButton active={businessSize === 'large'} onClick={() => setBusinessSize('large')}>
                  Large
                  <span className="text-xs block mt-1">
                    (51+ rooms/locations)
                  </span>
                </SizeButton>
              </div>
            </div>
            <div className="mb-8">
              <label className="block text-gray-700 font-medium mb-2">
                Additional Services
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <AdditionalServiceCheckbox checked={additionalServices.contentCreation} onChange={() => toggleAdditionalService('contentCreation')} label="Custom Content Creation" price={500} />
                <AdditionalServiceCheckbox checked={additionalServices.technicalSEO} onChange={() => toggleAdditionalService('technicalSEO')} label="Advanced Technical SEO" price={400} />
                <AdditionalServiceCheckbox checked={additionalServices.weeklyReporting} onChange={() => toggleAdditionalService('weeklyReporting')} label="Weekly Reporting" price={300} />
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-xl font-bold text-gray-900">
                  Your Custom Quote
                </h4>
                <span className="text-sm text-gray-600">
                  {billingCycle === 'annual' ? 'Billed annually' : 'Billed monthly'}
                </span>
              </div>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-700">Base Pro Plan</span>
                  <span className="font-medium">
                    ${getBasePrice('pro').toLocaleString()}
                  </span>
                </div>
                {additionalServices.contentCreation && <div className="flex justify-between">
                    <span className="text-gray-700">
                      Custom Content Creation
                    </span>
                    <span className="font-medium">
                      ${billingCycle === 'monthly' ? '500' : '6,000'}
                    </span>
                  </div>}
                {additionalServices.technicalSEO && <div className="flex justify-between">
                    <span className="text-gray-700">
                      Advanced Technical SEO
                    </span>
                    <span className="font-medium">
                      ${billingCycle === 'monthly' ? '400' : '4,800'}
                    </span>
                  </div>}
                {additionalServices.weeklyReporting && <div className="flex justify-between">
                    <span className="text-gray-700">Weekly Reporting</span>
                    <span className="font-medium">
                      ${billingCycle === 'monthly' ? '300' : '3,600'}
                    </span>
                  </div>}
              </div>
              <div className="border-t border-gray-200 pt-4 flex justify-between items-center">
                <span className="text-lg font-bold text-gray-900">Total</span>
                <span className="text-2xl font-bold text-emerald-700">
                  $
                  {(total).toLocaleString()}
                </span>
              </div>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-3">
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Your email to receive the quote" className="w-full border border-gray-300 rounded-md px-3 py-2" />
                <button onClick={submitQuote} disabled={!email || status === 'submitting'} className="w-full md:w-auto bg-emerald-700 hover:bg-emerald-800 disabled:opacity-60 text-white py-3 rounded-md font-medium transition-colors">
                  {status === 'submitting' ? 'Sending...' : 'Get Custom Quote'}
                </button>
              </div>
              {status !== 'idle' && statusMessage && <div className={`mt-3 text-sm ${status === 'error' ? 'text-red-600' : 'text-emerald-700'}`}>
                  {statusMessage}
                </div>}
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-emerald-600 to-blue-700 rounded-xl overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Need a tailored solution for your travel business?
              </h3>
              <p className="text-lg text-white/90 mb-8">
                Our team of SEO experts specializing in the travel industry can
                create a custom strategy that perfectly fits your unique needs
                and goals.
              </p>
              <button className="bg-white text-emerald-700 hover:bg-gray-100 px-8 py-3 rounded-md font-medium transition-colors">
                Schedule a Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>;
}
function PricingCard({
  title,
  price,
  description,
  features,
  notIncluded,
  cta,
  highlighted,
  billingCycle,
  badge
}) {
  return <div className={`rounded-xl overflow-hidden ${highlighted ? 'border-2 border-emerald-500 shadow-xl transform scale-105' : 'border border-gray-200'}`}>
      {badge && <div className="bg-emerald-700 text-white text-center py-2 font-medium">
          {badge}
        </div>}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
        <div className="flex items-baseline mb-4">
          <span className="text-4xl font-bold text-emerald-700">
            ${price.toLocaleString()}
          </span>
          <span className="text-gray-600 ml-1">
            /{billingCycle === 'monthly' ? 'month' : 'year'}
          </span>
        </div>
        <p className="text-gray-600 mb-6">{description}</p>
        <div className="space-y-3 mb-8">
          {features.map((feature, index) => <div key={index} className="flex items-start">
              <CheckIcon className="h-5 w-5 text-emerald-500 mr-2 shrink-0" />
              <span className="text-gray-700">{feature}</span>
            </div>)}
          {notIncluded.map((feature, index) => <div key={index} className="flex items-start opacity-60">
              <XIcon className="h-5 w-5 text-gray-400 mr-2 shrink-0" />
              <span className="text-gray-500">{feature}</span>
            </div>)}
        </div>
        <button className={`w-full py-3 rounded-md font-medium transition-colors ${highlighted ? 'bg-emerald-700 hover:bg-emerald-800 text-white' : 'bg-white border border-emerald-700 text-emerald-700 hover:bg-emerald-50'}`}>
          {cta}
        </button>
      </div>
    </div>;
}
function SizeButton({
  active,
  onClick,
  children
}) {
  return <button className={`px-6 py-3 rounded-md font-medium transition-all ${active ? 'bg-emerald-700 text-white' : 'bg-white border border-gray-300 text-gray-700 hover:border-emerald-300'}`} onClick={onClick}>
      {children}
    </button>;
}
function AdditionalServiceCheckbox({
  checked,
  onChange,
  label,
  price
}) {
  return <label className={`flex items-center p-4 rounded-md border cursor-pointer transition-all ${checked ? 'border-emerald-500 bg-emerald-50' : 'border-gray-300 bg-white hover:border-emerald-300'}`}>
      <input type="checkbox" checked={checked} onChange={onChange} className="h-5 w-5 text-emerald-600 rounded" />
      <div className="ml-3">
        <div className="font-medium text-gray-900">{label}</div>
        <div className="text-sm text-emerald-700">+${price}/month</div>
      </div>
    </label>;
}