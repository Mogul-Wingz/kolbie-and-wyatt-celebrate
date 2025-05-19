
import React from 'react';
import CountdownTimer from '../components/CountdownTimer';
import SectionHeader from '../components/SectionHeader';
import Layout from '../components/layout/Layout';
import { Link } from 'react-router-dom';
import { Calendar, MapPin } from 'lucide-react';

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/lovable-uploads/3947a4b4-cc8a-4483-acd6-e2ef1120bddb.png" 
            alt="Kolbie and Wyatt with their child" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-playfair text-4xl md:text-6xl mb-4">Kolbie & Wyatt</h1>
          <p className="font-josefin text-xl mb-8">September 13, 2025</p>
          <div className="flex justify-center space-x-4 mb-8">
            <div className="flex items-center">
              <Calendar size={18} className="mr-2 text-wedding-blush" />
              <span className="font-josefin">09.13.2025</span>
            </div>
            <div className="flex items-center">
              <MapPin size={18} className="mr-2 text-wedding-blush" />
              <span className="font-josefin">Hyde Park, UT</span>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="wedding-section bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader title="We're Getting Married!" />
          
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg mb-8">
              Join us in celebrating our special day. We're excited to share this moment with our friends and family.
            </p>
            
            <CountdownTimer />
            
            <div className="mt-12">
              <Link 
                to="/rsvp" 
                className="inline-block bg-wedding-blush hover:bg-opacity-80 transition-colors text-wedding-dark font-josefin tracking-wide py-3 px-8 rounded-md"
              >
                RSVP Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="wedding-section bg-wedding-lavender/10">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Wedding Information" 
            subtitle="Everything you need to know about our celebration"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h3 className="font-playfair text-xl mb-4">Wedding Day</h3>
              <p className="mb-4">See all the details about our ceremony and reception.</p>
              <Link 
                to="/wedding-day" 
                className="inline-block text-wedding-blush hover:underline"
              >
                View Details
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h3 className="font-playfair text-xl mb-4">RSVP</h3>
              <p className="mb-4">Let us know if you can join us on our special day.</p>
              <Link 
                to="/rsvp" 
                className="inline-block text-wedding-blush hover:underline"
              >
                RSVP Now
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h3 className="font-playfair text-xl mb-4">Travel & Stay</h3>
              <p className="mb-4">Find accommodation information and travel tips.</p>
              <Link 
                to="/qa" 
                className="inline-block text-wedding-blush hover:underline"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
