"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Download, Award, Code, Database } from "lucide-react"
import { Timeline } from "@/components/timeline"
import { motion } from "framer-motion"

export default function AboutPage() {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <motion.div className="grid gap-8 md:grid-cols-2 md:gap-12" initial="hidden" animate="visible" variants={fadeIn}>
        <div>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
            About Me
          </h1>
          <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
            I'm a passionate professional with expertise in{" "}
            <span className="text-primary font-bold">AWS Data Engineering</span>, Web Development, and Generative AI.
            With a strong background in <span className="text-primary font-bold">building scalable solutions</span>, I
            strive to create impactful technology that solves real-world problems.
          </p>
          <div className="mt-6 flex flex-col gap-2 min-[400px]:flex-row">
            <Button asChild>
              <Link href="/contact">
                Contact Me
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            {/* Download Resume Button */}
            <Button variant="outline" asChild>
              <a href="/file/Adil_Resume.pdf" download>
                <Download className="mr-2 h-4 w-4" />
              Download Resume
              </a>
          </Button>
          </div>
        </div>

        <motion.div
          className="relative flex justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute w-[320px] h-[320px] rounded-full bg-gradient-to-r from-primary/10 to-blue-500/10 blur-2xl" />
          <div className="relative h-[300px] w-[300px] sm:h-[320px] sm:w-[320px] lg:h-[360px] lg:w-[360px] overflow-hidden rounded-full">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/60 to-blue-600/60" />
            <div className="absolute inset-[4px] rounded-full overflow-hidden">
              <Image
                src="/Images/aws2.jpg"
                alt="Profile"
                className="object-cover hover:scale-105 transition-transform duration-700"
                fill
                priority
              />
            </div>
            <div className="absolute inset-0 rounded-full border-4 border-white/10 pointer-events-none" />
          </div>
        </motion.div>
      </motion.div>

      <motion.section
        className="mt-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="text-3xl font-bold tracking-tighter bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
          My Journey
        </h2>
        <Timeline />
      </motion.section>

      <motion.section
        className="mt-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h2 className="text-3xl font-bold tracking-tighter bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
          My Expertise
        </h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border bg-card p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/30 group">
            <Database className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-bold">AWS Data Engineering</h3>
            <p className="mt-2 text-muted-foreground">
              Designing and implementing scalable data pipelines, ETL processes, and data lakes on AWS.
            </p>
          </div>
          <div className="rounded-xl border bg-card p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/30 group">
            <Code className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-bold">Web Development</h3>
            <p className="mt-2 text-muted-foreground">
              Building modern, responsive web applications using Next.js, React, and TypeScript.
            </p>
          </div>
          <div className="rounded-xl border bg-card p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/30 group">
            <Award className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-bold">AI</h3>
            <p className="mt-2 text-muted-foreground">
              Developing and integrating AI solutions to solve complex business problems.
            </p>
          </div>
        </div>
      </motion.section>
    </div>
  )
}

