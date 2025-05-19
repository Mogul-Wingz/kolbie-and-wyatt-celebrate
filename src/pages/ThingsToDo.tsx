
import React from 'react';
import Layout from '../components/layout/Layout';
import SectionHeader from '../components/SectionHeader';
import { MapPin } from 'lucide-react';

const ThingsToDo = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4">
        <section className="wedding-section">
          <SectionHeader 
            title="Things To Do" 
            subtitle="Explore the area during your visit"
          />
          
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Logan Wind Caves */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src="/lovable-uploads/d8f82a71-cf0e-4e15-8445-ce853dac488a.png" 
                    alt="Logan Wind Caves" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="md:w-1/2 p-6">
                  <h3 className="font-playfair text-2xl mb-2">Logan Wind Caves</h3>
                  <p className="text-sm italic mb-4">Scenic moderate hike with a view</p>
                  
                  <div className="flex items-start mb-4">
                    <MapPin className="mr-2 text-wedding-blush shrink-0 mt-1" size={18} />
                    <p className="text-sm">Wind Cave Trailhead, Logan, UT</p>
                  </div>
                  
                  <p className="mb-4">
                    Explore the beautiful Wind Caves trail in Logan Canyon. This moderate 3.8-mile round-trip hike rewards you with spectacular views and unique limestone formations.
                  </p>
                  
                  <a 
                    href="https://maps.google.com/?q=Wind+Cave+Trailhead,+Logan,+UT" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-wedding-blush hover:underline text-sm"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
            
            {/* Crystal Hot Springs */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="md:flex flex-row-reverse">
                <div className="md:w-1/2">
                  <img 
                    src="/lovable-uploads/ac2f8bc5-3b5c-47a1-a1d5-7251b6420b62.png" 
                    alt="Crystal Hot Springs" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="md:w-1/2 p-6">
                  <h3 className="font-playfair text-2xl mb-2">Crystal Hot Springs</h3>
                  <p className="text-sm italic mb-4">Relaxing outdoor mineral springs</p>
                  
                  <div className="flex items-start mb-4">
                    <MapPin className="mr-2 text-wedding-blush shrink-0 mt-1" size={18} />
                    <p className="text-sm">8215 UT-38, Honeyville, UT</p>
                  </div>
                  
                  <p className="mb-4">
                    Unwind in the therapeutic waters of Crystal Hot Springs. These natural mineral pools are the perfect way to relax and rejuvenate during your visit.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
                    <a 
                      href="https://www.crystalhotsprings.net/home/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-wedding-blush hover:underline text-sm"
                    >
                      Visit Website
                    </a>
                    
                    <a 
                      href="https://maps.google.com/?q=8215+UT-38,+Honeyville,+UT" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-wedding-blush hover:underline text-sm"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Ogden Farmers Market */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src="/lovable-uploads/6f4a23e5-5c65-4707-9604-706c64c53936.png" 
                    alt="Ogden Farmers Market" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="md:w-1/2 p-6">
                  <h3 className="font-playfair text-2xl mb-2">Ogden Farmers Market</h3>
                  <p className="text-sm italic mb-4">Explore food and art on September 13</p>
                  
                  <div className="flex items-start mb-4">
                    <MapPin className="mr-2 text-wedding-blush shrink-0 mt-1" size={18} />
                    <p className="text-sm">25th Street, Ogden, UT</p>
                  </div>
                  
                  <p className="mb-4">
                    If you are looking for something to do, check out the vibrant Ogden Farmers Market. Browse local foods, crafts, and enjoy live music in historic downtown Ogden.
                  </p>
                  
                  <a 
                    href="https://maps.google.com/?q=25th+Street,+Ogden,+UT" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-wedding-blush hover:underline text-sm"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ThingsToDo;
