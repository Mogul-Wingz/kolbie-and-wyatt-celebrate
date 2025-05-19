
import React, { useEffect } from 'react';
import { useLocation, Link } from "react-router-dom";
import Layout from '../components/layout/Layout';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-playfair text-4xl mb-4">404</h1>
          <p className="text-xl text-wedding-dark/80 mb-6">Oops! Page not found</p>
          <Link 
            to="/" 
            className="inline-block bg-wedding-blush hover:bg-opacity-80 transition-colors text-wedding-dark font-josefin tracking-wide py-2 px-6 rounded-md"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
