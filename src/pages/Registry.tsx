
import React from 'react';
import Layout from '../components/layout/Layout';
import SectionHeader from '../components/SectionHeader';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from 'lucide-react';

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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 max-w-6xl mx-auto">
            {registryItems.map((item) => (
              <Card key={item.id} className="transition-all duration-300 hover:shadow-lg border border-wedding-sage/20 overflow-hidden bg-white rounded-lg">
                <div className="aspect-square overflow-hidden bg-gray-50">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <CardContent className="p-5">
                  <h3 className="font-playfair text-xl mb-1 text-wedding-evergreen truncate">{item.name}</h3>
                  {item.description && (
                    <p className="text-sm text-wedding-dark/80 font-josefin mb-2">{item.description}</p>
                  )}
                  <p className="font-bold text-wedding-moss">{item.price}</p>
                  <div className="mt-4">
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="w-full border-wedding-sage hover:bg-wedding-sage hover:text-white transition-all">
                        View & Buy <ExternalLink className="ml-1 h-4 w-4" />
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <a href={amazonRegistryUrl} target="_blank" rel="noopener noreferrer">
              <Button className="bg-wedding-sage hover:bg-wedding-moss text-white font-josefin text-base px-8 py-6 tracking-wide">
                View Full Registry on Amazon <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Registry;
