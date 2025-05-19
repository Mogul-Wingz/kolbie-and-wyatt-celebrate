
import React from 'react';
import Layout from '../components/layout/Layout';
import SectionHeader from '../components/SectionHeader';
import { Calendar, Clock, MapPin } from 'lucide-react';

const WeddingDay = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4">
        <section className="wedding-section">
          <SectionHeader 
            title="Wedding Day" 
            subtitle="Join us in celebrating our love"
          />
          
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-6 md:p-8 border-b border-wedding-blush/10">
              <div className="flex items-center mb-4">
                <Calendar className="mr-3 text-wedding-blush" size={24} />
                <h3 className="font-playfair text-xl">Date</h3>
              </div>
              <p className="font-josefin text-lg ml-9">September 13, 2025</p>
            </div>
            
            <div className="p-6 md:p-8 border-b border-wedding-blush/10">
              <div className="flex items-center mb-4">
                <MapPin className="mr-3 text-wedding-blush" size={24} />
                <h3 className="font-playfair text-xl">Location</h3>
              </div>
              <div className="ml-9">
                <p className="font-josefin text-lg">Mt. Naomi Vineyards</p>
                <p className="text-wedding-dark/70">1000 E. Mt Naomi Farms Lane, Hyde Park, UT 84318</p>
                <a 
                  href="https://maps.google.com/?q=1000+E.+Mt+Naomi+Farms+Lane,+Hyde+Park,+UT+84318" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-sm text-wedding-blush hover:underline"
                >
                  View on Map
                </a>
              </div>
            </div>
            
            <div className="p-6 md:p-8">
              <div className="flex items-start mb-4">
                <Clock className="mr-3 text-wedding-blush mt-1" size={24} />
                <h3 className="font-playfair text-xl">Timeline</h3>
              </div>
              
              <div className="ml-9 space-y-8">
                <div className="relative pl-6 border-l-2 border-wedding-blush/30">
                  <div className="absolute w-4 h-4 bg-wedding-blush rounded-full -left-[9px] top-0"></div>
                  <h4 className="font-playfair text-lg">4:30 PM – 5:00 PM</h4>
                  <p className="font-josefin">Ceremony</p>
                </div>
                
                <div className="relative pl-6 border-l-2 border-wedding-blush/30">
                  <div className="absolute w-4 h-4 bg-wedding-blush rounded-full -left-[9px] top-0"></div>
                  <h4 className="font-playfair text-lg">5:00 PM – 6:00 PM</h4>
                  <p className="font-josefin">Cocktail Hour</p>
                </div>
                
                <div className="relative pl-6">
                  <div className="absolute w-4 h-4 bg-wedding-blush rounded-full -left-[9px] top-0"></div>
                  <h4 className="font-playfair text-lg">6:00 PM – 10:00 PM</h4>
                  <p className="font-josefin">Reception and Dinner</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto mt-12">
            <div className="bg-wedding-sage/20 p-6 rounded-lg">
              <h4 className="font-playfair text-xl text-center mb-4">Parking Information</h4>
              <img 
                src="/lovable-uploads/7d42f99f-4d7a-4479-b09e-59c142a2ccb2.png" 
                alt="Parking map for Mt. Naomi Vineyards" 
                className="w-full rounded-lg mb-4"
              />
              <div className="text-sm">
                <p className="mb-2"><strong>Address:</strong> 1000 E. Mt Naomi Farms Lane, Hyde Park, UT 84318</p>
                <p className="mb-1"><strong>Directions:</strong></p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>From Highway 91, turn onto 4400 North in Hyde Park</li>
                  <li>Head east until you reach 1000 East, then turn left</li>
                  <li>Take the next right on Mt Naomi Farms Lane</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default WeddingDay;
