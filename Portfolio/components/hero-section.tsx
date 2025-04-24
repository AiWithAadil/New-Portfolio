"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="py-12 md:py-24 bg-gradient-blue-purple">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center space-y-4"
          >
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Hello, I'm <span className="text-gradient">S.M Adil</span>
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                AWS Data Engineer | Web Developer | AI Enthusiast
              </p>
            </div>
            <div className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            <p>Welcome to my <span className="text-blue-500 font-bold">Portfolio</span>! 🚀 I'm S.M. Aadil Ahmed, skilled in <span className="text-blue-500 font-bold">Python</span>, <span className="text-blue-500 font-semibold">SEO</span>, and <span className="text-blue-500 font-semibold">AWS Data Engineering</span>. I transitioned into IT, driven by curiosity and a passion for learning. I specialize in <span className="text-blue-500 font-bold">ETL</span>, <span className="text-blue-500 font-bold">SQL</span>, and <span className="text-blue-500 font-bold">data pipelines</span>, eager to build innovative solutions.</p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
              <Link href="/projects">
                <Button className="bg-primary hover:bg-primary/90 glow">
                  View My Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="border-secondary bg-secondary/10 text-secondary hover:bg-secondary/20"
                >
                  Contact Me
                </Button>
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <div className="relative h-[450px] w-[300px] sm:h-[350px] sm:w-[350px] lg:h-[400px] lg:w-[400px] overflow-hidden rounded-full border-4 border-secondary shadow-xl glow">
              <Image src="/Images/dp3.jpg" alt="Profile" fill className="object-cover" priority />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

