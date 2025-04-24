import type { Metadata } from "next"
import Link from "next/link"
import { Mail, Linkedin, Github, MapPin, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Contact | Portfolio",
  description: "Get in touch with me for collaborations, job opportunities, or just to say hello.",
}

export default function ContactPage() {
  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-gradient">Get in Touch</h1>
          <p className="text-muted-foreground md:text-xl max-w-[800px] mx-auto">
            I&apos;m always open to new opportunities, collaborations, or just a friendly chat. Feel free to reach out
            through any of the channels below.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="bg-gradient-blue-purple border-none overflow-hidden card-hover">
            <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
              <div className="rounded-full bg-primary/20 p-4 mt-2">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-xl font-bold">Email</h2>
              <p className="text-muted-foreground">The fastest way to reach me directly</p>
              <Button asChild className="mt-2 w-full bg-primary hover:bg-primary/90 glow">
                <Link href="mailto:smaadil688@gmail.com">smaadil688@gmail.com</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-yellow-purple border-none overflow-hidden card-hover">
            <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
              <div className="rounded-full bg-secondary/20 p-4 mt-2">
                <Linkedin className="h-8 w-8 text-secondary" />
              </div>
              <h2 className="text-xl font-bold">LinkedIn</h2>
              <p className="text-muted-foreground">Connect with me professionally</p>
              <Button asChild className="mt-2 w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 glow">
                <Link href="https://www.linkedin.com/in/syed-muhammad-adil-ahmed-3b96b2333/" target="_blank" rel="noopener noreferrer">
                  View Profile <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-blue-yellow border-none overflow-hidden card-hover">
            <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
              <div className="rounded-full bg-accent/20 p-4 mt-2">
                <Github className="h-8 w-8 text-accent" />
              </div>
              <h2 className="text-xl font-bold">GitHub</h2>
              <p className="text-muted-foreground">Check out my code and projects</p>
              <Button asChild className="mt-2 w-full bg-accent hover:bg-accent/90 glow">
                <Link href="https://github.com/AiWithAadil" target="_blank" rel="noopener noreferrer">
                  View GitHub <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 bg-card rounded-lg border p-6 shadow-sm w-full max-w-sm mx-auto">
          <div className="flex flex-col items-center gap-4">
            <div className="rounded-full bg-primary/20 p-3">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold">Location</h3>
              <p className="text-muted-foreground">Pakistan, Karachi</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            I typically respond within 24-48 hours. Looking forward to connecting with you!
          </p>
        </div>
      </div>
    </div>
  )
}
