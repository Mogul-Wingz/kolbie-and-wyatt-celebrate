
import React from 'react';
import Layout from '../components/layout/Layout';
import SectionHeader from '../components/SectionHeader';
import { MapPin } from 'lucide-react';

const QA = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4">
        <section className="wedding-section">
          <SectionHeader 
            title="Q+A" 
            subtitle="Travel & Logistics Information"
          />
          
          <div className="max-w-3xl mx-auto">
            {/* Venue Information */}
            <div className="mb-12 bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-playfair text-2xl mb-6 text-center">Venue Information</h3>
              
              <div className="flex items-start mb-4">
                <MapPin className="mr-3 text-wedding-blush mt-1" size={20} />
                <div>
                  <h4 className="font-josefin font-medium">Mt. Naomi Vineyards</h4>
                  <p className="text-sm">1000 East Mt. Naomi Farms Lane, Hyde Park, Utah 84318</p>
                </div>
              </div>
              
              <div className="aspect-w-16 aspect-h-9 mt-4">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.371358732843!2d-111.8183123!3d41.8123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDQ4JzQ0LjQiTiAxMTHCsDQ5JzA1LjkiVw!5e0!3m2!1sen!2sus!4v1558816521027!5m2!1sen!2sus" 
                  width="600" 
                  height="450" 
                  style={{ border: 0 }} 
                  allowFullScreen
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Venue Map"
                  className="w-full h-64 rounded-md"
                ></iframe>
              </div>
            </div>
            
            {/* Hotels */}
            <div className="mb-12 bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-playfair text-2xl mb-6 text-center">Nearby Hotels</h3>
              
              <div className="space-y-8">
                <div>
                  <h4 className="font-playfair text-xl mb-2">Hampton Inn and Suites Logan</h4>
                  <p className="text-sm mb-2">207 North Main Street, Logan, UT 84321</p>
                  <a 
                    href="https://www.hilton.com/en/hotels/lgudahx-hampton-suites-logan/?SEO_id=GMB-AMER-HX-LGUDAHX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-wedding-blush hover:underline text-sm"
                  >
                    Visit Website
                  </a>
                </div>
                
                <div>
                  <h4 className="font-playfair text-xl mb-2">Holiday Inn Express & Suites Logan</h4>
                  <p className="text-sm mb-2">2235 N Main St, Logan, UT 84341</p>
                  <a 
                    href="https://ihg.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-wedding-blush hover:underline text-sm"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            </div>
            
            {/* Airport */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-playfair text-2xl mb-6 text-center">Airport Information</h3>
              
              <div>
                <h4 className="font-playfair text-xl mb-2">Salt Lake City International Airport</h4>
                <p className="mb-4">The nearest major airport is Salt Lake City International Airport, which is approximately 1 hour and 18 minutes south of Logan.</p>
                
                <div className="p-4 bg-wedding-sage/20 rounded-md text-sm">
                  <p className="mb-2"><strong>Travel Tips:</strong></p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Consider renting a car at the airport for the drive to Logan/Hyde Park.</li>
                    <li>There are limited rideshare options between SLC and Logan.</li>
                    <li>The drive is approximately 85 miles and takes about 1 hour 20 minutes.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default QA;
