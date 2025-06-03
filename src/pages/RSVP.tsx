
import React, { useEffect, useState } from 'react';
import Layout from '../components/layout/Layout';
import SectionHeader from '../components/SectionHeader';

const RSVP = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSd4W6FFrouC9pC6nOovAjxhFJHcB3RZWpWbbCWjInaGe-uVHA/viewform?embedded=true";

  useEffect(() => {
    // Add a small delay to ensure iframe loads properly
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout>
      <div className="container mx-auto px-4">
        <section className="wedding-section">
          <SectionHeader title="RSVP" subtitle="Please let us know if you can join us" />
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
              <div className="mb-8 text-center">
                <p className="mb-4">
                  Please fill out one section per guest and plus one (if applicable).
                  We kindly ask you to RSVP even if you are unable to attend.
                </p>
                <p className="text-wedding-blush font-bold mb-4">
                  Please RSVP by July 31, 2025
                </p>
                <p className="mb-4 text-sm">
                  If you have any issues with the form, please contact:
                </p>
                <div className="flex flex-col md:flex-row md:space-x-8 justify-center text-sm">
                  <p>Kolbie Tate: (618) 974-3993</p>
                  <p>Wyatt Perry: (801) 564-1623</p>
                </div>
              </div>

              <div className="relative">
                {!isLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-wedding-cream/50">
                    <div className="text-center">
                      <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-wedding-blush border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
                      <p className="mt-2">Loading form...</p>
                    </div>
                  </div>
                )}

                <iframe
                  src={googleFormUrl}
                  width="100%"
                  height="1200px"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  title="RSVP Form"
                  className="rounded-md"
                >
                  Loading form...
                </iframe>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default RSVP;
