"use client"

import { motion } from "framer-motion"
import { Database, Cloud, Code, Layout, FileCode, Palette, Brain, MessageSquare, Cpu } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function SkillsShowcase() {
  const skills = [
    { name: "AWS Services", icon: Cloud, category: "aws" },
    { name: "Data Engineering", icon: Database, category: "aws" },
    { name: "Python", icon: Code, category: "aws" },
    { name: "React & Next.js", icon: Layout, category: "web" },
    { name: "TypeScript", icon: FileCode, category: "web" },
    { name: "CSS & Tailwind", icon: Palette, category: "web" },
    { name: "Ai Tools", icon: Brain, category: "ai" },
    { name: "Data Analyst", icon: MessageSquare, category: "ai" },
    { name: "LLM Integration", icon: Cpu, category: "ai" },
  ]

  return (
    <section className="py-12 md:py-24 bg-gradient-yellow-purple">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gradient">My Skills</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A comprehensive overview of my technical expertise and capabilities.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 py-8 md:py-12 sm:grid-cols-2 md:grid-cols-3">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center space-y-2 rounded-lg border bg-card p-4 shadow-md hover:shadow-lg transition-shadow card-hover"
            >
              <div
                className={`rounded-full p-3 ${
                  index % 3 === 0 ? "bg-primary/20" : index % 3 === 1 ? "bg-secondary/20" : "bg-accent/20"
                }`}
              >
                <skill.icon
                  className={`h-6 w-6 ${
                    index % 3 === 0 ? "text-primary" : index % 3 === 1 ? "text-secondary" : "text-accent"
                  }`}
                />
              </div>
              <h3 className="text-lg font-bold">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center">
          <Link href="/skills">
            <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 glow">
              View All Skills
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

