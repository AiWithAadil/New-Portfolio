"use client"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Linkedin } from "lucide-react"
import { motion } from "framer-motion"

interface PostCardProps {
  title: string
  excerpt: string
  date: string
  image: string
  url: string
  platform: string
}

export function PostCard({ title, excerpt, date, image, url, platform }: PostCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="overflow-hidden hover:shadow-lg transition-shadow">
        <CardHeader className="p-0">
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover transition-transform hover:scale-105"
            />
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>{date}</span>
            <span>•</span>
            <span className="flex items-center">
              {platform === "LinkedIn" && <Linkedin className="mr-1 h-3 w-3" />}
              {platform}
            </span>
          </div>
          <h3 className="mt-2 text-xl font-bold">{title}</h3>
          <p className="mt-2 text-muted-foreground">{excerpt}</p>
        </CardContent>
        <CardFooter className="p-6 pt-0">
          <Button size="sm" asChild className="bg-primary hover:bg-primary/90">
            <Link href={url} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Read Post
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

