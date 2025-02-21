import Image from 'next/image';
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'John Doe',
      title: 'CEO of Company A',
      feedback: 'This sentiment analysis tool has transformed our understanding of customer feedback. Highly recommended!',
      image: 'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=2285&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Jane Smith',
      title: 'Marketing Manager at Company B',
      feedback: 'The insights provided by this tool are invaluable for our marketing strategies. A game-changer!',
      image: 'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=2285&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Users Say</h2>
        <div className="flex flex-col md:flex-row gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <Image
                src={testimonial.image} 
                alt={testimonial.name} 
                width={64} height={64} 
                className="rounded-full w-16 h-16 mx-auto mb-4" 
              />
              <h3 className="text-xl font-semibold mb-2">{testimonial.name}</h3>
              <p className="text-gray-500 mb-2">{testimonial.title}</p>
              <p className="text-gray-400 italic">&quot;{testimonial.feedback}&quot;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
