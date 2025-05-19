
import React from 'react';
import Layout from '../components/layout/Layout';
import SectionHeader from '../components/SectionHeader';
import { Card, CardContent } from '@/components/ui/card';

const QA = () => {
  const questions = [
    {
      question: "Can I bring a plus one?",
      answer: "Yes you may bring a plus one, just make sure to RSVP for them!"
    },
    {
      question: "Will the ceremony and reception be indoors or outdoors?",
      answer: "Both! The venue has a barn that will have indoor seating to eat for the reception, there will also be seating outside. The ceremony will be outside if weather permits."
    },
    {
      question: "What time should I arrive?",
      answer: "You should arrive around 3:30-4:00 pm. You will need to be seated before the ceremony starts at 4:30."
    },
    {
      question: "What if I don't RSVP?",
      answer: "Due to limited capacity and having to let out vendor know ahead of time how much food to bring, we can not guarantee there will be food and a spot for you! So please RSVP, we want you there!"
    },
    {
      question: "Where should I park? Is it free? Can I leave my car overnight?",
      answer: "There are designated guests parking spots at the venue, there are signs posted on where to park. The invitation also has a map for parking as well as the travel section on here. Parking is free. You can not leave your car overnight, so if you plan to drink make sure you have a designated driver."
    },
    {
      question: "What if I can't attend the wedding?",
      answer: "We ask that you let us know if you can't make it to the wedding before the RSVP deadline. Please fill out the RSVP in the how to RSVP section. We will miss you, but understand!"
    },
    {
      question: "What date should I RSVP by?",
      answer: "Please RSVP by July 13, 2025."
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4">
        <section className="wedding-section">
          <SectionHeader 
            title="Questions & Answers" 
            subtitle="Frequently Asked Questions"
          />
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {questions.map((item, index) => (
                <Card key={index} className="border-wedding-sage/20">
                  <CardContent className="p-6">
                    <h3 className="font-playfair text-xl mb-2 text-wedding-evergreen">{item.question}</h3>
                    <p className="text-wedding-evergreen/90">{item.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default QA;
