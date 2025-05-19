
import React from 'react';
import Layout from '../components/layout/Layout';
import SectionHeader from '../components/SectionHeader';

const Vendors = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4">
        <section className="wedding-section">
          <SectionHeader 
            title="Vendors & Entertainment" 
            subtitle="What to expect at our celebration"
          />
          
          <div className="max-w-4xl mx-auto">
            {/* Food Section */}
            <div className="mb-16">
              <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="md:w-1/3 p-6 flex justify-center">
                  <div className="w-48 h-48 rounded-full overflow-hidden">
                    <img 
                      src="/lovable-uploads/97f42788-8715-4e47-8909-0c46ca83d484.png" 
                      alt="El Salvador Los Primos Taco Truck" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="md:w-2/3 p-6">
                  <h3 className="font-playfair text-2xl mb-3">Dinner</h3>
                  <h4 className="font-josefin text-lg text-wedding-blush mb-4">El Salvador Los Primos Taco Truck</h4>
                  <p className="mb-3">Choose 4 tacos from the following options:</p>
                  <ul className="list-disc pl-5 mb-4">
                    <li>Chicken</li>
                    <li>Grilled Steak</li>
                    <li>Al Pastor</li>
                  </ul>
                  <p>Rice and beans available as an optional side.</p>
                </div>
              </div>
            </div>
            
            {/* Entertainment Section */}
            <div className="mb-16">
              <h3 className="font-playfair text-2xl text-center mb-8">Entertainment</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="p-6 text-center">
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
                      <img 
                        src="/lovable-uploads/577b4246-b597-4bc4-848c-7794e386ab5a.png" 
                        alt="Social Axe Throwing Truck" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="font-playfair text-xl mb-2">Social Axe Throwing Truck</h4>
                    <p className="text-sm mb-3">Where Kolbie and Wyatt first met!</p>
                    <p>Test your aim and have fun with axe throwing. Friendly competition for all wedding guests!</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="p-6 text-center">
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
                      <img 
                        src="/lovable-uploads/d9396a23-f592-467a-836a-73ecb0e3abf3.png" 
                        alt="Photobooth" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="font-playfair text-xl mb-2">Photobooth</h4>
                    <p>Capture memories with our photobooth. Take home printed keepsakes and access digital copies.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Drinks Section */}
            <div>
              <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="md:w-1/3 p-6 flex justify-center">
                  <div className="w-48 h-48 rounded-full overflow-hidden">
                    <img 
                      src="/lovable-uploads/fcf0a9f0-98df-4ad6-8c9a-9f05a6c39ab9.png" 
                      alt="Lemon Twist Events" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="md:w-2/3 p-6">
                  <h3 className="font-playfair text-2xl mb-3">Drinks</h3>
                  <h4 className="font-josefin text-lg text-wedding-blush mb-4">Lemon Twist Events</h4>
                  <p className="mb-3">Serving a variety of beverages including:</p>
                  <ul className="list-disc pl-5 mb-4">
                    <li>Cocktails</li>
                    <li>Beer</li>
                    <li>Wine</li>
                    <li>Seltzers</li>
                    <li>Utah-style dirty sodas</li>
                  </ul>
                  <p className="text-sm italic">Please remember to arrange for a designated driver.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Vendors;
