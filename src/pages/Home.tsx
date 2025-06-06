
import React from 'react';
import CountdownTimer from '../components/CountdownTimer';
import SectionHeader from '../components/SectionHeader';
import Layout from '../components/layout/Layout';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Layout>
      {/* Hero Section - Image Only */}
      <section className="w-full">
        <div className="w-full">
          <img 
            src="/lovable-uploads/df2fad99-0fc8-49b0-864b-470e07764582.png" 
            alt="Kolbie and Wyatt with their child" 
            className="w-full h-[80vh] object-cover"
          />
        </div>
      </section>

      {/* Introduction Section - Completely Separate from Hero Image */}
      <section className="wedding-section bg-white mt-8">
        <div className="container mx-auto px-4">
          <SectionHeader title="We're Getting Married!" />
          
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg mb-8 text-wedding-evergreen">
              Join us in celebrating our special day. We're excited to share this moment with our friends and family.
            </p>
            
            <CountdownTimer />
            
            <div className="mt-12">
              <Link 
                to="/rsvp" 
                className="inline-block bg-wedding-sage hover:bg-wedding-moss transition-colors text-white font-josefin tracking-wide py-3 px-8 rounded-md"
              >
                RSVP Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="wedding-section bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Wedding Information" 
            subtitle="Everything you need to know about our celebration"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h3 className="font-playfair text-xl mb-4 text-wedding-evergreen">Wedding Day</h3>
              <p className="mb-4 text-wedding-dark">See all the details about our ceremony and reception.</p>
              <Link 
                to="/wedding-day" 
                className="inline-block text-wedding-evergreen hover:text-wedding-moss hover:underline"
              >
                View Details
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h3 className="font-playfair text-xl mb-4 text-wedding-evergreen">RSVP</h3>
              <p className="mb-4 text-wedding-dark">Let us know if you can join us on our special day.</p>
              <Link 
                to="/rsvp" 
                className="inline-block text-wedding-evergreen hover:text-wedding-moss hover:underline"
              >
                RSVP Now
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h3 className="font-playfair text-xl mb-4 text-wedding-evergreen">Registry</h3>
              <p className="mb-4 text-wedding-dark">Browse our wishlist for our new home together.</p>
              <Link 
                to="/registry" 
                className="inline-block text-wedding-evergreen hover:text-wedding-moss hover:underline"
              >
                View Registry
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
