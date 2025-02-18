"use client";

import Image from 'next/image'
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="bg-dark-blue text-white font-sans">
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

// export default function Home() {

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
//       <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
     
      
//       </div>
//     </div>
//   );
// }


/**



IMPORTANT: content to analysis

As the meeting ended, Mark sat back in his chair, his mind racing with frustration. He had just presented his idea, but instead of support, he was met with resistance from his colleagues. The feeling of anger surged through him, with a score of 0.45, as he thought about how dismissive they were. He had worked so hard on the project, only to have it brushed aside. His fists clenched as he replayed the conversation in his mind, frustrated by their lack of understanding. At the same time, a sense of fear lingered in his thoughts, scoring 0.4. He feared that this rejection would affect his career prospects. What if this project was the one chance he had to prove himself? The uncertainty about his future made his stomach tighten. Despite these intense emotions, there was also a small part of him that felt a little sadness and disgust, but these emotions barely registered compared to the dominant anger and fear..
 */