"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from 'lucide-react'
import { motion } from "framer-motion"
import { projectsData } from "@/data/projectsFeature" // Import the projects data

export function FeaturedProjects() {
  // Get the first 4 projects for featured display
  const featuredProjects = [
    projectsData[0], // First project (Data Pipeline)
    projectsData[3], // Fourth project (Currency Converter)
    projectsData[6], // Seventh project (YouTube Data Automation)
    projectsData[1], // Second project (Data Engineering Ecosystem)
  ]

  return (
    <section className="py-12 md:py-24 bg-gradient-blue-yellow">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gradient-purple">Featured Projects</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Check out some of my recent work in AWS Data Engineering, Web Development, and Generative AI.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 py-8 md:py-12 lg:grid-cols-2">
          {/* First Project */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-lg border shadow-md card-hover"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-accent/80 z-10" />
            <div className="relative h-60 w-full">
              <Image
                src={featuredProjects[0].image || "/Images/DE1.png"}
                alt={featuredProjects[0].title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform group-hover:scale-105"
                priority
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
              <h3 className="text-xl font-bold text-white">{featuredProjects[0].title}</h3>
              <p className="text-sm text-white/90">{featuredProjects[0].tags.join(", ")}</p>
            </div>
          </motion.div>

          {/* Second Project */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-lg border shadow-md card-hover"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/80 z-10" />
            <div className="relative h-60 w-full">
              <Image
                src={featuredProjects[1].image || "/Images/web1.jpg"}
                alt={featuredProjects[1].title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform group-hover:scale-105"
                priority
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
              <h3 className="text-xl font-bold text-white">{featuredProjects[1].title}</h3>
              <p className="text-sm text-white/90">{featuredProjects[1].tags.join(", ")}</p>
            </div>
          </motion.div>

          {/* Third Project */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-lg border shadow-md card-hover"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/80 z-10" />
            <div className="relative h-60 w-full">
              <Image
                src={featuredProjects[2].image || "/Images/AI1.PNG"}
                alt={featuredProjects[2].title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
              <h3 className="text-xl font-bold text-white">{featuredProjects[2].title}</h3>
              <p className="text-sm text-white/90">{featuredProjects[2].tags.join(", ")}</p>
            </div>
          </motion.div>

          {/* Fourth Project */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-lg border shadow-md card-hover"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-accent/80 z-10" />
            <div className="relative h-60 w-full">
              <Image
                src={featuredProjects[3].image || "/Images/DE2.PNG"}
                alt={featuredProjects[3].title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
              <h3 className="text-xl font-bold text-white">{featuredProjects[3].title}</h3>
              <p className="text-sm text-white/90">{featuredProjects[3].tags.join(", ")}</p>
            </div>
          </motion.div>
        </div>
        <div className="flex justify-center">
          <Link href="/projects">
            <Button className="bg-accent hover:bg-accent/90 glow">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

