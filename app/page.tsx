
'use client';

import React from 'react';
import { motion } from 'motion/react';
import {  Tech_Stck, certifications, cyberSkills } from '@/app/lib/data';
import { SOCIAL_LINKS } from '@/app/lib/data';
import Logo from './components/logo';

const WebProjects = [
  {
    name: 'Ask AI',
    description: 'An AI-powered tool that helps you find the right answers.',
    link: 'https://academic-chatbot-eta.vercel.app/',
    id: 'project1',
  },
  {
    name: 'Bio Quiz',
    description: 'Interactive bio 101 quiz.',
    link: 'https://biq-quiz.vercel.app/',
    id: 'project2',
  },
  {
    name: 'Human Detection Interface',
    description: 'Real Time People Detection From Your WebCam',
    link: 'https://detection-wheat.vercel.app/',
    id: 'project3',
  },


  {
    name: 'Savvy, A Social Media Template',
    description: 'Create an account, login, create posts and share ideas',
    link: "https://talk-ochre-eight.vercel.app/",
    id: 'project4',
  },
];

export default function Portfolio() {
  return (
    <main className="bg-white dark:bg-slate-950 min-h-screen p-6 md:p-12 text-slate-900 dark:text-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
        
             

          {/* Certifications Section */}
          <section className="mb-20">
            <motion.h2
              className="text-4xl font-bold mb-8 text-slate-900 dark:text-white pb-4 border-b-2 border-blue-500"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
               Certifications
            </motion.h2>
            <div className="grid gap-6">
              {certifications.map((cert) => (
                <motion.div
                  key={cert.id}
                  className="bg-slate-50 dark:bg-slate-900 p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 border-l-4 border-blue-500 border border-slate-200 dark:border-slate-800"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ x: 2 }}
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{cert.name}</h3>
                    <span className={`px-4 py-1 rounded-full text-sm font-semibold whitespace-nowrap ml-4 ${
                      cert.status === 'In Progress' ? 'bg-amber-100 dark:bg-amber-900/40 text-amber-900 dark:text-amber-200' : 
                      cert.status === 'Completed' ? 'bg-green-100 dark:bg-green-900/40 text-green-900 dark:text-green-200' : 
                      'bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-slate-100'
                    }`}>
                      {cert.status}
                    </span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 mb-3 leading-relaxed">{cert.description}</p>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm">Expected: {cert.date}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Cybersecurity Skills Section */}
          <section className="mb-20">
            <motion.h2
              className="text-4xl font-bold mb-8 text-slate-900 dark:text-white pb-4 border-b-2 border-blue-500"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Cybersecurity Skills
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              {cyberSkills.map((skill) => (
                <motion.div
                  key={skill.id}
                  className="bg-slate-50 dark:bg-slate-900 p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-400"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ y: -2 }}
                >
                  <h3 className="text-xl font-bold mb-5 text-blue-600 dark:text-blue-400">{skill.category}</h3>
                  <ul className="space-y-3">
                    {skill.items.map((item, index) => (
                      <li key={index} className="text-slate-700 dark:text-slate-300 flex items-start text-sm">
                        <span className="text-blue-500 dark:text-blue-400 mr-3 font-bold">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </section>

          {/* G19 Logo Section */}
          <section className="flex justify-center my-16">
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
            </motion.div>
          </section>

        
        {/* Social Links */}
          <section className="mt-20 pt-12 border-t border-slate-200 dark:border-slate-800">
            <motion.h2
              className="text-4xl font-bold mb-8 text-slate-900 dark:text-white"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Connect
            </motion.h2>
            <div className="flex flex-wrap gap-4">
              {SOCIAL_LINKS.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 font-semibold"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.03, y: -1 }}
                >
                  {social.label}
                </motion.a>
              ))}
            </div>
          </section>
        </div>
    </main>
  );
}
