import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t py-6 bg-gradient-blue-yellow">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-center text-sm text-muted-foreground md:text-left">
          &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link href="https://github.com/AiWithAadil" target="_blank" rel="noopener noreferrer">
            <Github className="h-5 w-5 text-primary hover:text-primary/80 transition-colors" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://www.linkedin.com/in/syed-muhammad-adil-ahmed-3b96b2333/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-5 w-5 text-accent hover:text-accent/80 transition-colors" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="mailto:smaadil688@gmail.com">
            <Mail className="h-5 w-5 text-secondary hover:text-secondary/80 transition-colors" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}

