
import React from 'react';
import Layout from '../components/layout/Layout';
import SectionHeader from '../components/SectionHeader';
import { MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const Travel = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4">
        <section className="wedding-section">
          <SectionHeader 
            title="Travel Information" 
            subtitle="Venue, Hotels & Getting There"
          />
          
          <div className="max-w-3xl mx-auto">
            {/* Venue Information */}
            <div className="mb-12 bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-playfair text-2xl mb-6 text-center">Venue Information</h3>
              
              <div className="flex items-start mb-4">
                <MapPin className="mr-3 text-wedding-sage mt-1" size={20} />
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
                <Card className="overflow-hidden border-wedding-sage border-opacity-20">
                  <div className="p-6">
                    <h4 className="font-playfair text-xl mb-2">Hampton Inn and Suites Logan</h4>
                    <p className="text-sm mb-3">207 North Main Street, Logan, UT 84321</p>
                    
                    <AspectRatio ratio={16/9} className="bg-muted mb-4 rounded-md overflow-hidden">
                      <img 
                        src="/lovable-uploads/022877da-7846-4968-8b5c-a10dfbe89e99.png" 
                        alt="Hampton Inn and Suites Logan" 
                        className="object-cover w-full h-full"
                      />
                    </AspectRatio>
                    
                    <a 
                      href="https://www.hilton.com/en/hotels/lgudahx-hampton-suites-logan/?SEO_id=GMB-AMER-HX-LGUDAHX"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-wedding-sage hover:text-wedding-evergreen hover:underline text-sm inline-flex items-center"
                    >
                      Visit Website
                    </a>
                  </div>
                </Card>
                
                <Card className="overflow-hidden border-wedding-sage border-opacity-20">
                  <div className="p-6">
                    <h4 className="font-playfair text-xl mb-2">Holiday Inn Express & Suites Logan</h4>
                    <p className="text-sm mb-3">2235 N Main St, Logan, UT 84341</p>
                    
                    <AspectRatio ratio={16/9} className="bg-muted mb-4 rounded-md overflow-hidden">
                      <img 
                        src="/lovable-uploads/d8e738c4-090e-48be-8451-d052896dda5f.png" 
                        alt="Holiday Inn Express & Suites Logan" 
                        className="object-cover w-full h-full"
                      />
                    </AspectRatio>
                    
                    <a 
                      href="https://www.ihg.com/holidayinnexpress/hotels/us/en/logan/lgnnm/hoteldetail"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-wedding-sage hover:text-wedding-evergreen hover:underline text-sm inline-flex items-center"
                    >
                      Visit Website
                    </a>
                  </div>
                </Card>
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

export default Travel;
