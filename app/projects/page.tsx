       "use client";
       
       import { motion } from 'motion/react'
        import Link from 'next/link'

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
export default function Projects() {
          return (
    <main className="min-h-screen text-blue-900">
      <div className="max-w-6xl mx-auto px-6 py-12">
        

          {/* Projects Section */}
          <section className="mb-16 text-center">
            <motion.h2
              className="text-3xl font-bold mb-6"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Software Development Projects

            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {WebProjects.map((project) => (
                <motion.h2
                  key={project.id}
                  className="bg-white-smoke p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <Link
                    href={project.link}
                    className="text-blue-400 hover:text-blue-300 hover:underline inline-flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project →
                  </Link>
                </motion.h2>
              ))}
            </div>
          </section>
          </div>
    </main>
  )
}


