import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import { HeroSection } from "@/components/hero-section"
import { FeaturedProjects } from "@/components/featured-projects"
import { SkillsShowcase } from "@/components/skills-showcase"

export default function Home() {
  return (
    <div>
      <HeroSection />

      <section className="py-12 md:py-24 bg-dot-pattern">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gradient">About Me</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I'm a passionate professional specializing in <span className="text-blue-500 font-bold">AWS Data Engineering</span>, Web Development, and Generative AI.
                With a strong background in <span className="text-blue-500 font-bold">building scalable solutions</span>, I strive to create impactful technology that
                solves <span className="text-blue-500 font-bold">real-world problems</span>.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/about">
                <Button className="bg-primary hover:bg-primary/90 glow">
                  Learn more about me
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FeaturedProjects />

      <SkillsShowcase />

      <section className="py-12 md:py-24 bg-gradient-blue-purple">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gradient-purple">Get In Touch</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Interested in working together? Feel free to reach out through any of the channels below.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="https://github.com/AiWithAadil" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="icon"
                  className="border-secondary bg-secondary/10 text-secondary hover:bg-secondary/20"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/syed-muhammad-adil-ahmed-3b96b2333/" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="icon"
                  className="border-secondary bg-secondary/10 text-secondary hover:bg-secondary/20"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="mailto:smaadil688@gmail.com">
                <Button
                  variant="outline"
                  size="icon"
                  className="border-secondary bg-secondary/10 text-secondary hover:bg-secondary/20"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
              <Link href="/contact">
                <Button className="bg-accent hover:bg-accent/90 glow">
                  Contact me
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

