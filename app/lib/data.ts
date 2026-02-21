import { Languages } from "lucide-react"

type contact = {
  email: string, 
}

type Tech_Stck = {
  name: string,
  language: string,
  strorage: string,
  security: string, 
  styling: string, 
  deployment: string,
  id: string
}

type skills =  {
  skill_1: string,
  skill_2: string, 
  skill_3: string,
  skill_4: string,
  skill_5: string
  id: string
}

type SocialLink = {
  label: string,
  link: string,
}

type Certification = {
  name: string,
  status: 'In Progress' | 'Planned' | 'Completed',
  date: string,
  description: string,
  id: string
}

type CyberSkill = {
  category: string,
  items: string[],
  id: string
}




export const certifications: Certification[] = [
  {
    name: 'Network+ Certification',
    status: 'In Progress',
    date: 'March 2026',
    description: 'Network infrastructure, operations, security, and troubleshooting',
    id: 'net-plus'
  },
  {
    name: 'PenTest+ Certification',
    status: 'In Progress',
    date: 'April 2026',
    description: 'Penetration testing, vulnerability assessment, and security analysis',
    id: 'pentest-plus'
  }
]

export const cyberSkills: CyberSkill[] = [
  {
    category: 'Network Security',
    items: [
      'Network Configuration & Troubleshooting',
      'TCP/IP Protocol Analysis',
      'Firewall Configuration',
      'VPN Setup & Management',
      'Network Monitoring Tools'
    ],
    id: 'network-security'
  },
  {
    category: 'Penetration Testing',
    items: [
      'Vulnerability Assessment',
      'Security Testing Methodologies',
      'Exploitation Techniques',
      'Security Report Writing',
      'Risk Assessment'
    ],
    id: 'pentest'
  },
  {
    category: 'Security Tools',
    items: [
      'Wireshark',
      'Nmap',
      'Metasploit',
      'Burp Suite',
      'Nessus',
      'Kali Linux'
    ],
    id: 'security-tools'
  }
]

export const Tech_Stck: Tech_Stck[]=[
 {
  name: 'NextJS',
  language: 'TypeScript',
  strorage: 'Prisma',
  security: 'Clerk',
  styling: 'Tailwind',
  deployment: 'Vercel',
  id: 'stack'


}
]

export const contact: contact[] = [
  {
    email: 'garriga11@outlook.com'
  }
]
export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/Garriga11/',
    
  },
 
  {
    label: 'LinkedIn',
    link: 'https://linkedin.com/in/Garriga19'

,
  },
 
]

export const EMAIL = 'garriga11@outlook.com'
