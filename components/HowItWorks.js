import React from 'react';
import {
  UserPlusIcon,
  PresentationChartLineIcon,
  ArrowPathIcon // Corrected import
} from '@heroicons/react/24/outline';

const HowItWorks = () => {
  const steps = [
    {
      number: '1',
      title: 'Sign Up & Connect',
      description: 'Sign in and connect your LinkedIn profile or manually paste text.',
      icon: UserPlusIcon,
    },
    {
      number: '2',
      title: 'Analyze Sentiments',
      description: 'AI detects emotions in your posts.',
      icon: ArrowPathIcon, // Corrected usage
    },
    {
      number: '3',
      title: 'Get Insights',
      description: 'View trends, recommendations, and emotional patterns.',
      icon: PresentationChartLineIcon,
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">How Our Sentiment Analysis Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.title} className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="text-5xl font-bold text-teal-500 mb-2">{step.number}</div>
              <div className="h-12 w-12 mx-auto mb-4 text-teal-500">
                <step.icon className="h-full w-full" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
