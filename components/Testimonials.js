import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'John Doe',
      title: 'CEO of Company A',
      feedback: 'This sentiment analysis tool has transformed our understanding of customer feedback. Highly recommended!',
      image: 'https://via.placeholder.com/50',
    },
    {
      name: 'Jane Smith',
      title: 'Marketing Manager at Company B',
      feedback: 'The insights provided by this tool are invaluable for our marketing strategies. A game-changer!',
      image: 'https://via.placeholder.com/50',
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Users Say</h2>
        <div className="flex flex-col md:flex-row gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <img src={testimonial.image} alt={testimonial.name} className="rounded-full w-16 h-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{testimonial.name}</h3>
              <p className="text-gray-500 mb-2">{testimonial.title}</p>
              <p className="text-gray-400 italic">"{testimonial.feedback}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
