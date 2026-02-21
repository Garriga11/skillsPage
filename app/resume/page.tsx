'use client';



import { useState } from 'react';
import ModalComponent from '@/app/resume/modalComponent';
import { motion } from 'framer-motion';
import Link from 'next/link';

export type Resume = {
  id: string;
  title: string;
  employer: string;
  dates: string;
  description: string;
};

export type Education = {
  id: string;
  Degree: string;
  School: string;
  description: string;
};

export const Education: Education[] = [
  {
    id: 'MUW',
    Degree: 'B.S.',
    School: 'Mississippi University for Women',
    description:
      'Bachelor of Science in  Biology  with a focus on Chemistry and Molecular Biology,  Internship experience in research, contributing to projects on molecular biology . Developed strong analytical and problem-solving skills through coursework and research.',
  },];
  


export const resume: Resume[] = [
  {
    id: 'SSI',
    title: 'Technician',
    employer: 'Sudden Services Inc.',
    dates: 'Feb 2022 - Present',
    description:
      'Maintained Pedestrian Detection Systems, handled diagnostics, and programmed control and displays, system installs, verification testing, final checks.',
  },
  {
    id: 'Gator Computers',
    title: 'Technician',
    employer: 'Gator Computers',
    dates: 'Feb 2022 - Aug 2022',
    description:
      'Phone and computer Hardware repairs, rebuilds, software installations, and system maintenance.',
  },

 
];

export default function Page() {
  const [selectedJob, setSelectedJob] = useState<Resume | null>(null);
  const [selectedEducation, setSelectedEducation] = useState<Education | null>(null);

  return (
    <main className="bg-white dark:bg-slate-950 min-h-screen p-6 md:p-12 text-slate-900 dark:text-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
         <div className= " flex justify-content-start p-8 m-8  text-center mb-12">
        <Link href="/
        " className="text-blue-600 dark:text-blue-400 hover:underline text-lg font-semibold mr-6">
            Home 
        </Link>
        <Link href="/projects" className="text-blue-600 dark:text-blue-400 hover:underline text-lg font-semibold">
          Projects
        </Link>
      </div>
        <section>
          <motion.h2
            className="text-4xl font-bold mb-12 pb-4 border-b-2 border-blue-500"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Experience
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {resume.map((job) => (
              <motion.div
                key={job.id}
                className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg shadow-sm hover:shadow-lg transition-all border border-slate-200 dark:border-slate-800 flex flex-col justify-between"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -4 }}
              >
                <div>
                  <h3 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-2">
                    {job.title}
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300">
                    {job.employer}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {job.dates}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedJob(job)}
                  className="mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition"
                >
                  View Job Description
                </button>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* ONE modal only */}
      <ModalComponent
        isOpen={!!selectedJob}
        onClose={() => setSelectedJob(null)}
        title={selectedJob?.title}
      >
        <p>{selectedJob?.description}</p>
      </ModalComponent>


      <div className="bg-white dark:bg-slate-950 min-h-screen p-6 md:p-12 text-slate-900 dark:text-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
        <section>
          <motion.h2
            className="text-4xl font-bold mb-12 pb-4 border-b-2 border-blue-500"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Education
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {Education.map((education) => (
              <motion.div
                key={education.id}
                className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg shadow-sm hover:shadow-lg transition-all border border-slate-200 dark:border-slate-800 flex flex-col justify-between"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -4 }}
              >
                <div>
                  <h3 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-2">
                    {education.Degree}
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300">
                    {education.School}
                    </p>
                
                </div>

                <button
                   
                  onClick={() => setSelectedEducation(education)}
                  className="mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition"
                
                >
                  View Education Description
                </button>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

    <div className="bg-white dark:bg-slate-950 min-h-screen p-6 md:p-12 text-slate-900 dark:text-white">
      <ModalComponent
        isOpen={!!selectedEducation}
        onClose={() => setSelectedEducation(null)}
        title={selectedEducation?.Degree}
      >
        <p>{selectedEducation?.description}</p>
      </ModalComponent>
      </div>
      </div>
    </main>
    
    
  );
}
