import React from 'react'
import { Users, Target, Heart, Award, MapPin, Mail, Phone } from "lucide-react";
function page() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#121212]">
      {/* Navigation */}



      {/* Hero Section */}
      <section className="relative pt-[80px] pb-[60px]">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center h-7 px-[14px] mb-8 rounded-full text-xs font-poppins tracking-[1.3px] uppercase bg-gradient-to-r from-[#FF7A18] to-[#FFB56B] dark:from-[#FF8A28] dark:to-[#FFC57B] text-white">
            ABOUT US
          </div>

          <h1 className="text-4xl md:text-5xl font-instrument-sans font-medium text-black dark:text-white mb-6">
            Connecting talent with
            <br />
            <span className="bg-gradient-to-r from-[#FF7A18] to-[#FFB56B] dark:from-[#FF8A28] dark:to-[#FFC57B] bg-clip-text text-transparent">
              opportunity
            </span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12">
            We're on a mission to revolutionize how people find jobs and how companies
            discover exceptional talent. Our platform bridges the gap between ambition and opportunity.
          </p>
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-6 pb-16">
        {/* Our Story */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-instrument-sans font-medium text-black dark:text-white mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
                <p>
                  Welcome to Remoteworknaija, where we bridge the gap between Nigeria's exceptional talent and the world's most dynamic remote opportunities.



                </p>
                <p>

                  The future of remote work in Nigeria is here but accessing it requires more than just an internet connection. For too long, finding legitimate, high-quality remote opportunities meant endless scrolling through generic sites, unsure which companies truly hire from Africa.                </p>
                <p>
                  Remote Work Naija was founded to change that. We are the premier gateway, dedicated to bridging the gap between Nigeria's exceptional talent and the world's most dynamic remote opportunities.
                </p>

                <p>
                  We cut through the noise by vetting global roles so you don’t have to, empowering you to build a meaningful, borderless career on your terms. Stop searching. Start connecting. Your ambition meets its opportunity here.
                </p>

                <p>
                  We're not just a job board; we're a movement, empowering professionals to build meaningful, borderless careers without leaving home.


                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#FF7A18]/10 to-[#FFB56B]/10 dark:from-[#FF8A28]/10 dark:to-[#FFC57B]/10 rounded-2xl p-8 lg:p-12">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#FF7A18] dark:text-[#FF8A28] mb-2">50K+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Job Seekers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#FF7A18] dark:text-[#FF8A28] mb-2">1.2K+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Jobs Posted</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#FF7A18] dark:text-[#FF8A28] mb-2">350+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Companies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#FF7A18] dark:text-[#FF8A28] mb-2">89%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission & Values */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-instrument-sans font-medium text-black dark:text-white mb-4">
              Our Mission & Values
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We're driven by core values that shape everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-[#1E1E1E] rounded-2xl p-8 border border-[#E5E5E5] dark:border-[#333333] shadow-sm text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-[#FF7A18] to-[#FFB56B] dark:from-[#FF8A28] dark:to-[#FFC57B] rounded-xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-black dark:text-white mb-3">Purpose</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                We connect the right people with the right opportunities to create meaningful career paths.
              </p>
            </div>

            <div className="bg-white dark:bg-[#1E1E1E] rounded-2xl p-8 border border-[#E5E5E5] dark:border-[#333333] shadow-sm text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-[#FF7A18] to-[#FFB56B] dark:from-[#FF8A28] dark:to-[#FFC57B] rounded-xl flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-black dark:text-white mb-3">Passion</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                We're passionate about empowering individuals and helping businesses thrive through talent.
              </p>
            </div>

            <div className="bg-white dark:bg-[#1E1E1E] rounded-2xl p-8 border border-[#E5E5E5] dark:border-[#333333] shadow-sm text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-[#FF7A18] to-[#FFB56B] dark:from-[#FF8A28] dark:to-[#FFC57B] rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-black dark:text-white mb-3">People</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Every interaction matters. We put people first in everything we do.
              </p>
            </div>

            <div className="bg-white dark:bg-[#1E1E1E] rounded-2xl p-8 border border-[#E5E5E5] dark:border-[#333333] shadow-sm text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-[#FF7A18] to-[#FFB56B] dark:from-[#FF8A28] dark:to-[#FFC57B] rounded-xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-black dark:text-white mb-3">Excellence</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                We continuously strive for excellence in our platform, service, and user experience.
              </p>
            </div>
          </div>
        </section>

        {/* How We Help */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-instrument-sans font-medium text-black dark:text-white mb-4">
              How We Help
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Whether you're looking for your dream job or the perfect candidate, we've got you covered
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* For Job Seekers */}
            <div className="bg-white dark:bg-[#1E1E1E] rounded-2xl p-8 border border-[#E5E5E5] dark:border-[#333333] shadow-sm">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#FF7A18] to-[#FFB56B] dark:from-[#FF8A28] dark:to-[#FFC57B] rounded-xl flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-black dark:text-white">For Job Seekers</h3>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#FF7A18] dark:bg-[#FF8A28] rounded-full mt-2 mr-3"></div>
                  <div>
                    <strong className="text-black dark:text-white">Curated Opportunities:</strong>
                    <span className="text-gray-600 dark:text-gray-400"> Access to quality jobs from verified companies</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#FF7A18] dark:bg-[#FF8A28] rounded-full mt-2 mr-3"></div>
                  <div>
                    <strong className="text-black dark:text-white">Easy Application:</strong>
                    <span className="text-gray-600 dark:text-gray-400"> Simple, streamlined application process</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#FF7A18] dark:bg-[#FF8A28] rounded-full mt-2 mr-3"></div>
                  <div>
                    <strong className="text-black dark:text-white">Career Growth:</strong>
                    <span className="text-gray-600 dark:text-gray-400"> Opportunities across all experience levels</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#FF7A18] dark:bg-[#FF8A28] rounded-full mt-2 mr-3"></div>
                  <div>
                    <strong className="text-black dark:text-white">Remote Focus:</strong>
                    <span className="text-gray-600 dark:text-gray-400"> Emphasis on flexible, remote-friendly positions</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* For Employers */}
            <div className="bg-white dark:bg-[#1E1E1E] rounded-2xl p-8 border border-[#E5E5E5] dark:border-[#333333] shadow-sm">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#FF7A18] to-[#FFB56B] dark:from-[#FF8A28] dark:to-[#FFC57B] rounded-xl flex items-center justify-center mr-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-black dark:text-white">For Employers</h3>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#FF7A18] dark:bg-[#FF8A28] rounded-full mt-2 mr-3"></div>
                  <div>
                    <strong className="text-black dark:text-white">Quality Candidates:</strong>
                    <span className="text-gray-600 dark:text-gray-400"> Access to pre-screened, motivated professionals</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#FF7A18] dark:bg-[#FF8A28] rounded-full mt-2 mr-3"></div>
                  <div>
                    <strong className="text-black dark:text-white">Easy Posting:</strong>
                    <span className="text-gray-600 dark:text-gray-400"> Quick and simple job posting process</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#FF7A18] dark:bg-[#FF8A28] rounded-full mt-2 mr-3"></div>
                  <div>
                    <strong className="text-black dark:text-white">Global Reach:</strong>
                    <span className="text-gray-600 dark:text-gray-400"> Connect with talent across Africa and beyond</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#FF7A18] dark:bg-[#FF8A28] rounded-full mt-2 mr-3"></div>
                  <div>
                    <strong className="text-black dark:text-white">Affordable Pricing:</strong>
                    <span className="text-gray-600 dark:text-gray-400"> Competitive rates for all business sizes</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-instrument-sans font-medium text-black dark:text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              The passionate individuals behind Remoteworknaija
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-[#1E1E1E] rounded-2xl p-6 border border-[#E5E5E5] dark:border-[#333333] shadow-sm text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#FF7A18] to-[#FFB56B] dark:from-[#FF8A28] dark:to-[#FFC57B] rounded-full flex items-center justify-center mx-auto mb-4 text-2xl text-white">
                AB
              </div>
              <h3 className="text-xl font-semibold text-black dark:text-white mb-1">Abbey Bakare</h3>
              <p className="text-[#FF7A18] dark:text-[#FF8A28] font-medium mb-3">Founder & CEO</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Passionate about connecting African talent with global opportunities
              </p>
            </div>

            <div className="bg-white dark:bg-[#1E1E1E] rounded-2xl p-6 border border-[#E5E5E5] dark:border-[#333333] shadow-sm text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#FF7A18] to-[#FFB56B] dark:from-[#FF8A28] dark:to-[#FFC57B] rounded-full flex items-center justify-center mx-auto mb-4 text-2xl text-white">
                SM
              </div>
              <h3 className="text-xl font-semibold text-black dark:text-white mb-1">Shina Martins </h3>
              <p className="text-[#FF7A18] dark:text-[#FF8A28] font-medium mb-3">Head of Operations</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Ensures smooth operations and exceptional user experience
              </p>
            </div>

            <div className="bg-white dark:bg-[#1E1E1E] rounded-2xl p-6 border border-[#E5E5E5] dark:border-[#333333] shadow-sm text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#FF7A18] to-[#FFB56B] dark:from-[#FF8A28] dark:to-[#FFC57B] rounded-full flex items-center justify-center mx-auto mb-4 text-2xl text-white">
                IB
              </div>
              <h3 className="text-xl font-semibold text-black dark:text-white mb-1">Ibiyemi Isiaka</h3>
              <p className="text-[#FF7A18] dark:text-[#FF8A28] font-medium mb-3">Lead Developer</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Builds and maintains our cutting-edge technology platform
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gradient-to-r from-[#FF7A18] to-[#FFB56B] dark:from-[#FF8A28] dark:to-[#FFC57B] rounded-2xl p-8 md:p-12">
          <div className="text-center text-white mb-8">
            <h2 className="text-3xl md:text-4xl font-instrument-sans font-medium mb-4">
              Get In Touch
            </h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Have questions or want to learn more? We'd love to hear from you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center text-white">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-white/90 text-sm">Lagos, Nigeria</p>
            </div>

            <div className="text-center text-white">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-white/90 text-sm">abbeybakare10@gmail.com</p>
            </div>

            <div className="text-center text-white">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-white/90 text-sm">+234 703 064 9992</p>
            </div>
          </div>

          <div className="text-center">
            <a href="/post_job" className="inline-flex items-center justify-center h-12 px-8 bg-white text-[#FF7A18] rounded-xl font-inter font-semibold hover:bg-gray-100 transition-colors duration-200">
              Start Hiring Today
            </a>
          </div>
        </section>
      </div>

      {/* Custom Styles */}
      <link
        href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@500&family=Space+Grotesk:wght@500&family=Roboto:wght@500&family=Poppins:wght@400&family=Inter:wght@400;600&display=swap"
        rel="stylesheet"
      />

      <style
        dangerouslySetInnerHTML={{
          __html: `
          .font-instrument-sans {
            font-family: 'Instrument Sans', sans-serif;
          }
          
          .font-space-grotesk {
            font-family: 'Space Grotesk', sans-serif;
          }
          
          .font-roboto {
            font-family: 'Roboto', sans-serif;
          }
          
          .font-poppins {
            font-family: 'Poppins', sans-serif;
          }
          
          .font-inter {
            font-family: 'Inter', sans-serif;
          }
        `,
        }}
      />
    </div>
  )
}

export default page