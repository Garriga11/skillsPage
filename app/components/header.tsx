'use client'
import { motion } from 'framer-motion'
import { TextEffect } from '@/app/components/ui/text-effect'


export function Header() {
  return (
    <header className="mb-8 text-center text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-900 py-4 flex flex-col items-center">
      <div className="text-slate-900 dark:text-white max-w-4xl mx-auto px-4 w-full">
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
            Ashley Garriga | Systems Technician

            </motion.h1>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="mt-2 text-lg text-slate-600 dark:text-slate-400 text-center mb-6"
          delay={0.5}
        >
          Contact: garriga11@outlook.com
        </TextEffect>
        <motion.p
          className="text-sm text-slate-900 dark:text-slate-300 text-center max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Technician with four years of hands-on experience working with complex technical systems and three years supporting vision equipment in industrial environments. Network+ certification with practical, lab skills in network configuration, routing, firewall management, VLANs, subnetting, and troubleshooting. Brings a strong foundation in customer service, analytical problem solving, and system diagnostics. Adept at applying structured troubleshooting methodologies, monitoring network behavior, and securing applications in both simulated and real world environments.
        </motion.p>
      </div>
    </header>
  )
}
