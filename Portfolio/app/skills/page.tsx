import { SkillCard } from "@/components/skill-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SkillsPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">My Skills</h1>
      <p className="mt-4 max-w-[700px] text-muted-foreground md:text-xl/relaxed">
        A comprehensive overview of my technical skills and expertise.
      </p>

      <Tabs defaultValue="all" className="mt-8">
        <TabsList className="mb-8">
          <TabsTrigger value="all">All Skills</TabsTrigger>
          <TabsTrigger value="aws">AWS & Data</TabsTrigger>
          <TabsTrigger value="web">Web Development</TabsTrigger>
          <TabsTrigger value="ai">AI & ML</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <SkillCard
            title="AWS Services"
            description="Expertise in AWS services including Lambda, S3, EC2, RDS, DynamoDB, Step Functions, and more."
            icon="Cloud"
            level={90}
            category="aws"
          />
          <SkillCard
            title="Data Engineering"
            description="Experience with ETL processes, data pipelines, data lakes, and data warehousing solutions."
            icon="Database"
            level={85}
            category="aws"
          />
          <SkillCard
            title="Python"
            description="Proficient in Python for data processing, API development, and automation."
            icon="Code"
            level={90}
            category="aws"
          />
          <SkillCard
            title="React & Next.js"
            description="Advanced knowledge of React and Next.js for building modern web applications."
            icon="Layout"
            level={95}
            category="web"
          />
          <SkillCard
            title="TypeScript"
            description="Strong TypeScript skills for type-safe and maintainable code."
            icon="FileCode"
            level={90}
            category="web"
          />
          <SkillCard
            title="CSS & Tailwind"
            description="Expertise in CSS and Tailwind CSS for responsive and beautiful UIs."
            icon="Palette"
            level={85}
            category="web"
          />
          <SkillCard
            title="Machine Learning"
            description="Knowledge of machine learning concepts and frameworks like TensorFlow and PyTorch."
            icon="Brain"
            level={75}
            category="ai"
          />
          <SkillCard
            title="NLP"
            description="Experience with Natural Language Processing using libraries like spaCy and Hugging Face Transformers."
            icon="MessageSquare"
            level={80}
            category="ai"
          />
          <SkillCard
            title="LLM Integration"
            description="Expertise in integrating and fine-tuning large language models for various applications."
            icon="Cpu"
            level={85}
            category="ai"
          />
        </TabsContent>
        <TabsContent value="aws" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <SkillCard
            title="AWS Services"
            description="Expertise in AWS services including Lambda, S3, EC2, RDS, DynamoDB, Step Functions, and more."
            icon="Cloud"
            level={90}
            category="aws"
          />
          <SkillCard
            title="Data Engineering"
            description="Experience with ETL processes, data pipelines, data lakes, and data warehousing solutions."
            icon="Database"
            level={85}
            category="aws"
          />
          <SkillCard
            title="Python"
            description="Proficient in Python for data processing, API development, and automation."
            icon="Code"
            level={90}
            category="aws"
          />
        </TabsContent>
        <TabsContent value="web" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <SkillCard
            title="React & Next.js"
            description="Advanced knowledge of React and Next.js for building modern web applications."
            icon="Layout"
            level={95}
            category="web"
          />
          <SkillCard
            title="TypeScript"
            description="Strong TypeScript skills for type-safe and maintainable code."
            icon="FileCode"
            level={90}
            category="web"
          />
          <SkillCard
            title="CSS & Tailwind"
            description="Expertise in CSS and Tailwind CSS for responsive and beautiful UIs."
            icon="Palette"
            level={85}
            category="web"
          />
        </TabsContent>
        <TabsContent value="ai" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <SkillCard
            title="Machine Learning"
            description="Knowledge of machine learning concepts and frameworks like TensorFlow and PyTorch."
            icon="Brain"
            level={75}
            category="ai"
          />
          <SkillCard
            title="NLP"
            description="Experience with Natural Language Processing using libraries like spaCy and Hugging Face Transformers."
            icon="MessageSquare"
            level={80}
            category="ai"
          />
          <SkillCard
            title="LLM Integration"
            description="Expertise in integrating and fine-tuning large language models for various applications."
            icon="Cpu"
            level={85}
            category="ai"
          />
        </TabsContent>
      </Tabs>
    </div>
  )
}

