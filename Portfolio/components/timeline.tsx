"use client"

import { motion } from "framer-motion"

export function Timeline() {
  const experiences = [
    {
      title: "Data Engineer Internship",
      company: "Samba Bank.",
      period: "2024",
      description:
        "Leading data engineering initiatives, designing and implementing scalable data pipelines, and optimizing data workflows.",
    },
    {
      title: "Full Stack Developer",
      company: "Personal",
      period: "2023 - 2025",
      description:
        "Developed modern web applications using React, Next.js, and Node.js. Implemented responsive designs and integrated third-party APIs.",
    },
    {
      title: "Data Analyst",
      company: "Self Employee.",
      period: "2024 present",
      description:
        "Analyzed large datasets to extract insights and created visualizations to communicate findings to stakeholders.",
    },
    {
      title: "Commerce",
      company: "Karachi Commerce Collage",
      period: "2023 - 2025",
      description:
        "Intermediat student in Commerce field.",
    },
  ]

  return (
    <div className="relative mt-8 ml-4">
      {experiences.map((experience, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="mb-10 ml-6"
        >
          <div className="absolute -left-10 mt-1.5 h-4 w-4 rounded-full border border-primary bg-background"></div>
          <div className="absolute -left-8 h-full w-0.5 bg-border"></div>
          <div>
            <h3 className="text-xl font-bold">{experience.title}</h3>
            <div className="mb-2 text-sm text-muted-foreground">
              {experience.company} | {experience.period}
            </div>
            <p className="text-muted-foreground">{experience.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

