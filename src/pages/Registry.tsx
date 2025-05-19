
import React from 'react';
import Layout from '../components/layout/Layout';
import SectionHeader from '../components/SectionHeader';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Package, Gift } from 'lucide-react';

interface RegistryItem {
  id: string;
  name: string;
  price: string;
  image: string;
  description?: string;
  link: string;
}

const registryItems: RegistryItem[] = [
  {
    id: "1",
    name: "KitchenAid Stand Mixer",
    price: "$349.99",
    image: "/lovable-uploads/73767a4e-f0f7-4e23-9b6a-b6ada2ea826b.png",
    description: "Professional 5 Quart Bowl-Lift in Empire Red",
    link: "https://www.amazon.com/wedding/registry/3ET6HALGFAZNV?tag=wedch-995-20"
  },
  {
    id: "2",
    name: "Cuisinart Coffee Maker",
    price: "$129.95",
    image: "/lovable-uploads/7d42f99f-4d7a-4479-b09e-59c142a2ccb2.png",
    description: "14-Cup Programmable with Glass Carafe",
    link: "https://www.amazon.com/wedding/registry/3ET6HALGFAZNV?tag=wedch-995-20"
  },
  {
    id: "3",
    name: "Le Creuset Dutch Oven",
    price: "$399.95",
    image: "/lovable-uploads/ac2f8bc5-3b5c-47a1-a1d5-7251b6420b62.png",
    description: "5.5 Quart Round in Sage Green",
    link: "https://www.amazon.com/wedding/registry/3ET6HALGFAZNV?tag=wedch-995-20"
  },
  {
    id: "4",
    name: "Dyson V11 Vacuum",
    price: "$599.99",
    image: "/lovable-uploads/97f42788-8715-4e47-8909-0c46ca83d484.png",
    description: "Cordless Stick Vacuum Cleaner",
    link: "https://www.amazon.com/wedding/registry/3ET6HALGFAZNV?tag=wedch-995-20"
  },
  {
    id: "5",
    name: "Calphalon Cookware Set",
    price: "$249.99",
    image: "/lovable-uploads/d8f82a71-cf0e-4e15-8445-ce853dac488a.png",
    description: "10-Piece Stainless Steel Set",
    link: "https://www.amazon.com/wedding/registry/3ET6HALGFAZNV?tag=wedch-995-20"
  },
  {
    id: "6",
    name: "Ninja Blender System",
    price: "$159.99",
    image: "/lovable-uploads/6f4a23e5-5c65-4707-9604-706c64c53936.png",
    description: "Professional Plus Kitchen System",
    link: "https://www.amazon.com/wedding/registry/3ET6HALGFAZNV?tag=wedch-995-20"
  }
];

const Registry = () => {
  const amazonRegistryUrl = "https://www.amazon.com/wedding/registry/3ET6HALGFAZNV?tag=wedch-995-20";

  return (
    <Layout>
      <div className="wedding-section">
        <div className="container mx-auto px-4">
          <SectionHeader title="Our Registry" />
          
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-lg text-wedding-evergreen font-josefin">
              Your love, laughter, and presence on our wedding day is the greatest gift of all. 
              However, if you'd like to help us start our next chapter, we've put together a wishlist 
              of things we'd love and use in our future home.
            </p>
          </div>
          
          <div className="flex flex-col items-center justify-center mb-16">
            <div className="p-6 md:p-8 max-w-lg w-full bg-white rounded-xl shadow-sm border border-wedding-sage/30">
              <div className="flex justify-center mb-6">
                <Gift className="h-16 w-16 text-wedding-sage" />
              </div>
              <h3 className="font-playfair text-2xl mb-3 text-center text-wedding-evergreen">Our Amazon Registry</h3>
              <p className="text-center text-wedding-dark/70 font-josefin mb-6">
                We've created a registry on Amazon with items we would love for our new home together.
              </p>
              <div className="flex justify-center">
                <a href={amazonRegistryUrl} target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button className="w-full bg-wedding-sage hover:bg-wedding-moss text-white font-josefin text-base py-6 tracking-wide">
                    Visit Our Wedding Registry <ExternalLink className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center max-w-xl mx-auto">
            <p className="text-sm font-josefin text-wedding-dark/80 italic">
              Thank you for supporting us as we begin this new chapter of our lives!
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Registry;
