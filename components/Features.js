import React from 'react';
import {
  ChartBarIcon,
  HeartIcon,
  LockClosedIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline';

const Features = () => {
  const features = [
    {
      name: 'Real-time Sentiment Analysis',
      description: 'Instantly analyze emotions in social media posts.',
      icon: ChartBarIcon,
    },
    {
      name: 'Personalized Dashboard',
      description: 'View in-depth insights, trends, and emotional breakdowns.',
      icon: HeartIcon,
    },
    {
      name: 'AI-Powered Recommendations',
      description: 'Improve your online presence with actionable suggestions.',
      icon: LightBulbIcon,
    },
    {
      name: 'Secure & Private',
      description: 'Your data is protected with industry-leading security.',
      icon: LockClosedIcon,
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Unlock the Power of Sentiment Analysis</h2>
        <p className="text-gray-400 mb-8">Gain AI-driven insights into emotions, trends, and personal branding.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.name} className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="h-12 w-12 mx-auto mb-4 text-teal-500">
                <feature.icon className="h-full w-full" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.name}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
