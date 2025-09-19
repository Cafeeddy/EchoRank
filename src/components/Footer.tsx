import React from 'react';
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon, PhoneIcon, MailIcon, MapPinIcon } from 'lucide-react';
export function Footer() {
  return <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="mb-4">
              <div className="text-2xl font-bold text-emerald-400 mb-1">
                EchoRank
              </div>
              <div className="text-sm text-gray-400 italic">
                Your Brand Echoing In AI Answers
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Specialized SEO services for the travel industry, focused on
              boosting visibility in both traditional and AI-powered search.
            </p>
            <div className="flex space-x-4">
              <SocialIcon href="#" icon={<FacebookIcon />} />
              <SocialIcon href="https://x.com/rank_echo" icon={<TwitterIcon />} />
              <SocialIcon href="#" icon={<InstagramIcon />} />
              <SocialIcon href="#" icon={<LinkedinIcon />} />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <FooterLink href="#ai-seo">AI-First SEO</FooterLink>
              <FooterLink href="#technical-seo">Technical SEO</FooterLink>
              <FooterLink href="#content-strategy">Content Strategy</FooterLink>
              <FooterLink href="#analytics">Performance Analytics</FooterLink>
              <FooterLink href="#consulting">SEO Consulting</FooterLink>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              <FooterLink href="#blog">Blog</FooterLink>
              <FooterLink href="#guides">Guides</FooterLink>
              <FooterLink href="#case-studies">Case Studies</FooterLink>
              <FooterLink href="#webinars">Webinars</FooterLink>
              <FooterLink href="#tools">Free SEO Tools</FooterLink>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <PhoneIcon className="h-5 w-5 text-emerald-400 mr-3 shrink-0" />
                <span className="text-gray-300">+254798755127</span>
              </li>
              <li className="flex items-start">
                <MailIcon className="h-5 w-5 text-emerald-400 mr-3 shrink-0" />
                <span className="text-gray-300">echorankinc@gmail.com</span>
              </li>
              <li className="flex items-start">
                <MapPinIcon className="h-5 w-5 text-emerald-400 mr-3 shrink-0" />
                <span className="text-gray-300">
                  Nairobi, Kenya
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2023 EchoRank. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <FooterSmallLink href="#privacy">Privacy Policy</FooterSmallLink>
              <FooterSmallLink href="#terms">Terms of Service</FooterSmallLink>
              <FooterSmallLink href="#sitemap">Sitemap</FooterSmallLink>
            </div>
          </div>
        </div>
      </div>
    </footer>;
}
function SocialIcon({
  href,
  icon
}) {
  return <a href={href} className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-emerald-700 transition-colors" target="_blank" rel="noopener noreferrer">
      <div className="text-white">{icon}</div>
    </a>;
}
function FooterLink({
  href,
  children
}) {
  return <li>
      <a href={href} className="text-gray-400 hover:text-emerald-400 transition-colors">
        {children}
      </a>
    </li>;
}
function FooterSmallLink({
  href,
  children
}) {
  return <a href={href} className="text-gray-500 hover:text-emerald-400 text-sm transition-colors">
      {children}
    </a>;
}