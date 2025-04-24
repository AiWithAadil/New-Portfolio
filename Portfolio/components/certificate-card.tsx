"use client"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { motion } from "framer-motion"

interface CertificateCardProps {
  title: string
  issuer: string
  date: string
  image: string
  verificationUrl: string
}

export function CertificateCard({ title, issuer, date, image, verificationUrl }: CertificateCardProps) {
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
            <span>{issuer}</span>
          </div>
          <h3 className="mt-2 text-xl font-bold">{title}</h3>
        </CardContent>
        <CardFooter className="p-6 pt-0">
          <Button size="sm" asChild className="bg-accent hover:bg-accent/90">
            <Link href={verificationUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Verify
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

