"use client"
import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaRegCalendarAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

// import Ayushi from '../assets/membersImage/Ayushi.png';

// import Ayushi from '../../public/images/Ayushi.png';

// import Ayushi from '../assets/membersImage/Ayushi.png';
// import Aryan from '../assets/membersImage/Aryan.jpeg';
// import Ayush from '../assets/membersImage/Ayush.jpeg';
// import Aditi from '../assets/membersImage/Aditi.jpeg';
// import Chetan from '../assets/membersImage/Chetan.jpeg';
// import Anurag from '../assets/membersImage/Anurag.jpg';
// import Anushka from '../assets/membersImage/Anushka.jpeg';
// import NiketaMam from '../assets/membersImage/NiketaMam.png';
// import manishsir from '../assets/membersImage/manishsir.jpg';
// Uncomment these if available



// Updated image imports
import Ayushi from '../../public/images/Ayushi.png';
import Aryan from '../../public/images/Aryan.jpeg';
import Ayush from '../../public/images/Ayush.jpeg';
import Aditi from '../../public/images/Aditi.jpeg';
import Chetan from '../../public/images/Chetan.jpeg';
import Anurag from '../../public/images/Anurag.jpg';
import Anushka from '../../public/images/Anushka.jpeg';
import NiketaMam from '../../public/images/NiketaMam.png';
import manishsir from '../../public/images/manishsir.jpg';

import JourneyImage from '../../public/images/journeyImage.jpeg';
import MissionImage from '../../public/images/mission-image.jpeg';
import Image from 'next/image';


// import MissionImage from '../assets/membersImage/mission-image.jpeg';
// import JourneyImage from '../assets/membersImage/journeyImage.jpeg';
// import JourneyImage from '../assets/membersImage/journeyImage.jpeg';

// import JourneyImage from '/journeyImage.jpeg';

// cc 

function page() {
  const founders = [
    {
      name: 'Aryan',
      role: 'CEO & Co-Founder',
      bio: '“Mental health should be as accessible as the internet—everywhere, for everyone.”',
      linkedin: 'https://www.linkedin.com/in/placeholder/',
      github: '#',
      image: Aryan,
    },
    {
      name: 'Ayushi',
      role: 'CTO & Co-Founder',
      bio: '“Technology isn’t just about writing code—it’s about solving real human problems.”',
      linkedin: 'https://www.linkedin.com/in/ayushi-khandal/',
      github: '#',
      image: Ayushi,
    },
    {
      name: 'Ayush',
      role: 'CFO & Co-Founder',
      bio: '“A vision without sustainability is just a dream. We’re here to make it last.”',
      linkedin: 'https://www.linkedin.com/in/placeholder/',
      github: '#',
      image: Ayush,
    },
];

// R&D Team with fun and engaging introductions
const teamMembers = [
  {
    name: 'Anurag Lohar',
    role: 'Full Stack Developer',
    bio: '“Turning lines of code into impactful user experiences.”',
    image: Anurag,
  },
    {
      name: 'Aditi Tiwari',
      role: 'AI/ML Specialist',
      bio: '“Machines should be smart, but more importantly, they should understand and support human emotions.”',
      image: Aditi,
    },
    {
      name: 'Chetan Sharma',
      role: 'Frontend Developer',
      bio: '“Crafting intuitive interfaces that blend aesthetics with seamless functionality.”',
      image: Chetan,
    },
    {
      name: 'Anushka Tiwari',
      role: 'Backend Developer',
      bio: '“Engineering robust systems so you don’t have to worry about them.”',
      image: Anushka,
    },
   
];

// Mentors providing expert guidance and insights
const mentors = [
    {
      name: 'Dr. Nikieta Sharma',
      role: 'Associate Professor',
      bio: '“Bridging the gap between academic research and real-world technological solutions.”',
      image: NiketaMam,
    },
    {
      name: 'Prof. Manish Bharadwaj',
      role: 'Assistant Professor',
      bio: '“Building with ethics, empathy, and real-world impact.”',
      image: manishsir,
    },
];


  const journeyTimeline = [
    {
      year: '2023',
      milestone: 'Concept Development',
      description: 'The idea for Wellmind Junction was born from personal experiences with mental health challenges.',
    },
    {
      year: '2024',
      milestone: 'Research & Partnerships',
      description: 'Conducted extensive research and formed partnerships with mental health professionals.',
    },
    {
      year: '2025',
      milestone: 'Platform Launch',
      description: 'Launched our digital platform with AI-powered assessment tools and personalized resources.',
    },
    {
      year: '2025',
      milestone: 'Growing Community',
      description: 'Expanding our reach and impact with new features and community-driven initiatives.',
    },
  ];

  // Animation variants for fade-in effects
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Hero Section with animated overlay */}
      <section className="py-24 bg-gradient-to-r from-blue-800 via-blue-700 to-indigo-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10 animate-pulse"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-lg">
              Shaping the Future of<br />Mental Wellness
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              At Wellmind Junction, we&apos;re building bridges between technology and mental healthcare,
              creating a world where support is just a click away.
            </p>
            <div className="mt-10">
              <a
                href="#our-story"
                className="px-8 py-3 bg-white text-blue-800 rounded-full font-medium 
                           hover:bg-blue-50 transition-colors duration-300 inline-block shadow-lg"
              >
                Our Story
              </a>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Our Story Section */}
      <section id="our-story" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              className="md:w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-800 leading-tight">
                Our Story – From Personal Struggles to Collective Solutions
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Wellmind Junction began with a simple revelation: technology could bridge the gap in
                mental healthcare that we experienced firsthand. Our founders&apos; personal struggles with
                accessing quality mental health resources inspired a mission to create tools that we
                wished had existed during our own journeys.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we&apos;re a team of engineers, designers, and mental health advocates united by the
                belief that everyone deserves access to evidence-based mental wellness tools—
                regardless of location, background, or resources.
              </p>
            </motion.div>
            <motion.div
              className="md:w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-100 rounded-full z-0"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-100 rounded-full z-0"></div>
                {/* Uncomment JourneyImage if available */}
                <Image
                  src={JourneyImage}
                  height={400}
                  width={500}
                  alt="Our journey"
                  className="rounded-xl shadow-2xl relative z-10 w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-gray-800">
              Our Vision – Empowering Minds, Building the Future
            </h2>
            <p
              className="text-xl text-gray-700 leading-relaxed italic mb-12 border-l-4 border-blue-500 
                         pl-6 py-2 bg-white shadow-md rounded-r-lg"
            >
              &quot;We envision a world where mental health support is as normal and accessible as physical
              healthcare—where technology becomes the bridge between awareness and action, and where
              every person has the tools they need to thrive.&quot;
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-blue-600 
                         hover:scale-105 transition-transform duration-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Accessibility</h3>
              <p className="text-gray-600">
                Breaking down barriers to mental healthcare through technology that meets people where
                they are, regardless of geographic or economic constraints.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-indigo-600 
                         hover:scale-105 transition-transform duration-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.2 }}
            >
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 
                       1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 
                       1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 
                       7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 
                       1 1 0 01-.285-1.05l1.738-5.42-1.233-.616a1 1 0 01.894-1.79l1.599.8L9 4.323V3a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Evidence-Based</h3>
              <p className="text-gray-600">
                Combining cutting-edge technology with established psychological principles to create
                solutions that are both innovative and scientifically sound.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-purple-600 
                         hover:scale-105 transition-transform duration-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.4 }}
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Community-Focused</h3>
              <p className="text-gray-600">
                Building platforms that not only provide individual support but also foster connection
                and understanding, because mental wellness thrives in community.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Journey Timeline Section with icons */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-800">Our Journey</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The path to creating meaningful mental health technology has been filled with learning,
              growth, and unwavering commitment to our mission.
            </p>
          </motion.div>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
            <div className="space-y-16 relative">
              {journeyTimeline.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col md:flex-row items-center gap-8 relative z-10"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  transition={{ delay: index * 0.1 }}
                >
                  {index % 2 === 0 ? (
                    <>
                      <div className="md:w-1/2 md:text-right">
                        <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
                          <h3 className="text-xl font-bold text-blue-700 mb-2">
                            {item.milestone}
                          </h3>
                          <p className="text-gray-600">{item.description}</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mb-2">
                          <FaRegCalendarAlt />
                        </div>
                        <span className="text-sm text-gray-700">{item.year}</span>
                      </div>
                      <div className="md:w-1/2"></div>
                    </>
                  ) : (
                    <>
                      <div className="md:w-1/2"></div>
                      <div className="flex flex-col items-center">
                        <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mb-2">
                          <FaRegCalendarAlt />
                        </div>
                        <span className="text-sm text-gray-700">{item.year}</span>
                      </div>
                      <div className="md:w-1/2">
                        <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
                          <h3 className="text-xl font-bold text-blue-700 mb-2">
                            {item.milestone}
                          </h3>
                          <p className="text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    </>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

         {/* Founders Section */}
         <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Meet Our Founders
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {founders.map((founder, index) => (
              <motion.div
                key={founder.name}
                className="bg-white p-8 rounded-lg shadow border border-gray-200 hover:shadow-md transition-shadow duration-300"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
              >
                <Image
                  src={founder.image}
                  alt={founder.name}
                  height={400}
                  width={500}
                  className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-gray-300 object-cover"
                />
                <h3 className="text-xl font-semibold text-center mb-2 text-gray-900">
                  {founder.name}
                </h3>
                <p className="text-center text-blue-700 font-medium mb-4">
                  {founder.role}
                </p>
                <p className="text-center text-gray-600 mb-4">
                  {founder.bio}
                </p>
                <div className="flex justify-center space-x-4">
                  {founder.linkedin && (
                    <a
                      href={founder.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-700 transition-colors"
                    >
                      <FaLinkedin size={24} />
                    </a>
                  )}
                  {founder.github && (
                    <a
                      href={founder.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-700 transition-colors"
                    >
                      <FaGithub size={24} />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
          {/* R&D Team Section */}
          <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <span className="text-blue-600 uppercase tracking-wider font-medium">Innovation</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-4 text-gray-800">
              Our R&amp;D Team
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The brilliant minds behind our technology, combining expertise in AI, design, and
              development.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md 
                           hover:shadow-2xl transform hover:-translate-y-2 
                           transition-all duration-300 border border-gray-100"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: index * 0.1 }}
              >
                <div className="h-48 bg-gradient-to-r from-blue-100 to-indigo-100 flex items-center justify-center">
                  <Image
                    src={member.image}
                    alt={member.name}
                    height={400}
                    width={500}
                    className="w-32 h-32 rounded-full border-4 border-white shadow-md"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <FaLinkedin size={16} className="mr-2" />
                      <span className="text-sm">Connect</span>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentors Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <span className="text-blue-600 uppercase tracking-wider font-medium">Guidance</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-4 text-gray-800">Our Mentors</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Industry experts providing wisdom and direction to ensure we create impactful solutions.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {mentors.map((mentor, index) => (
              <motion.div
                key={index}
                className="flex bg-white rounded-xl overflow-hidden shadow-md 
                           hover:shadow-2xl transition-shadow duration-300"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-1/3 bg-gradient-to-b from-blue-100 to-indigo-100 p-6 flex items-center justify-center">
                  <Image
                    src={mentor.image}
                    alt={mentor.name}
                    height={400}
                    width={500}
                    className="w-24 h-24 rounded-full border-4 border-white shadow-md"
                  />
                </div>
                <div className="w-2/3 p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{mentor.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{mentor.role}</p>
                  <p className="text-gray-600 text-sm mb-4">{mentor.bio}</p>
                  {mentor.linkedin && (
                    <a
                      href={mentor.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <FaLinkedin size={16} className="mr-2" />
                      <span className="text-sm">Connect</span>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section with animated overlay */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-indigo-900 text-white relative">
        <div className="absolute inset-0 bg-pattern opacity-10 animate-pulse"></div>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              className="md:w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <span className="text-blue-300 uppercase tracking-wider font-medium">Our Mission</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-6 text-white leading-tight">
                Empowering Minds, One Step at a Time
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              &quot;Mental health is a journey, not a destination. Let&apos;s walk together.&quot;
              </p>
              <p className="text-lg text-blue-100 mb-8">
                We&apos;re committed to creating a world where:
              </p>
              <ul className="space-y-4 text-blue-100">
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-blue-300 mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Technology bridges gaps in mental healthcare access</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-blue-300 mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Mental wellness tools are destigmatized and normalized</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-blue-300 mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Everyone has the resources they need to thrive mentally</span>
                </li>
              </ul>
              <div className="mt-10">
                <a
                  href="#contact-us"
                  className="px-8 py-3 bg-white text-blue-800 rounded-full font-medium 
                             hover:bg-blue-50 transition-colors duration-300 inline-block shadow-lg"
                >
                  Join Our Mission
                </a>
              </div>
            </motion.div>
            <motion.div
              className="md:w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-500 bg-opacity-30 rounded-full z-0"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-500 bg-opacity-30 rounded-full z-0"></div>
                {/* Uncomment MissionImage if available */}
                <Image
                  src={MissionImage}
                  alt="Our mission"
                  height={400}
                  width={500}
                  className="rounded-xl shadow-2xl relative z-10 w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <span className="text-blue-600 uppercase tracking-wider font-medium">Our Impact</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-4 text-gray-800">Making a Difference</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We measure our success not by metrics alone, but by the lives we&apos;ve positively impacted.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              className="bg-blue-50 rounded-xl p-8 text-center hover:scale-105 transition-transform duration-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">10,000+</div>
              <div className="text-lg font-medium text-gray-700">Active Users</div>
              <p className="text-gray-600 mt-3">
                Individuals actively using our platform to manage their mental wellness
              </p>
            </motion.div>
            <motion.div
              className="bg-indigo-50 rounded-xl p-8 text-center hover:scale-105 transition-transform duration-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.1 }}
            >
              <div className="text-4xl font-bold text-indigo-600 mb-2">85%</div>
              <div className="text-lg font-medium text-gray-700">Improved Wellbeing</div>
              <p className="text-gray-600 mt-3">
                Users reporting improved mental wellbeing after 3 months
              </p>
            </motion.div>
            <motion.div
              className="bg-purple-50 rounded-xl p-8 text-center hover:scale-105 transition-transform duration-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.2 }}
            >
              <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-lg font-medium text-gray-700">Mental Health Programs</div>
              <p className="text-gray-600 mt-3">
                Evidence-based programs addressing diverse mental health needs
              </p>
            </motion.div>
            <motion.div
              className="bg-blue-50 rounded-xl p-8 text-center hover:scale-105 transition-transform duration-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.3 }}
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-lg font-medium text-gray-700">Support Access</div>
              <p className="text-gray-600 mt-3">
                Round-the-clock access to resources and AI-assisted support
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;