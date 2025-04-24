"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { motion } from "framer-motion"
import {
  Database,
  Cloud,
  Code,
  Layout,
  FileCode,
  Palette,
  Brain,
  MessageSquare,
  Cpu,
  type LucideIcon,
} from "lucide-react"

interface SkillCardProps {
  title: string
  description: string
  icon: string
  level: number
  category: string
}

export function SkillCard({ title, description, icon, level, category }: SkillCardProps) {
  const getIcon = (): LucideIcon => {
    switch (icon) {
      case "Database":
        return Database
      case "Cloud":
        return Cloud
      case "Code":
        return Code
      case "Layout":
        return Layout
      case "FileCode":
        return FileCode
      case "Palette":
        return Palette
      case "Brain":
        return Brain
      case "MessageSquare":
        return MessageSquare
      case "Cpu":
        return Cpu
      default:
        return Code
    }
  }

  const Icon = getIcon()

  const getColorClass = () => {
    switch (category) {
      case "aws":
        return {
          bg: "bg-primary/20",
          text: "text-primary",
          progress: "bg-primary",
        }
      case "web":
        return {
          bg: "bg-secondary/20",
          text: "text-secondary",
          progress: "bg-secondary",
        }
      case "ai":
        return {
          bg: "bg-accent/20",
          text: "text-accent",
          progress: "bg-accent",
        }
      default:
        return {
          bg: "bg-primary/20",
          text: "text-primary",
          progress: "bg-primary",
        }
    }
  }

  const colorClass = getColorClass()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="hover:shadow-md transition-shadow card-hover">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className={`rounded-full ${colorClass.bg} p-2`}>
              <Icon className={`h-6 w-6 ${colorClass.text}`} />
            </div>
            <div>
              <h3 className="font-bold">{title}</h3>
            </div>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">{description}</p>
          <div className="mt-4">
            <div className="flex items-center justify-between text-sm">
              <span>Proficiency</span>
              <span>{level}%</span>
            </div>
            <Progress value={level} className={`mt-2 bg-primary/20 [&>div]:${colorClass.progress}`} />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

