"use client"

import { ProjectCard } from "@/components/project-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProjectsPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">My Projects</h1>
      <p className="mt-4 max-w-[700px] text-muted-foreground md:text-xl/relaxed">
        A <span className="text-primary font-bold">showcase</span> of my <span className="text-primary font-bold">work</span> in AWS Data Engineering, Web Development, and AI Tools.
      </p>

      <Tabs defaultValue="all" className="mt-8">
        <TabsList className="mb-8">
          <TabsTrigger value="all">All Projects</TabsTrigger>
          <TabsTrigger value="aws">AWS Data Engineering</TabsTrigger>
          <TabsTrigger value="web">Web Development</TabsTrigger>
          <TabsTrigger value="ai">AI Tools</TabsTrigger>
        </TabsList>

        {/* All Projects Tab */}
        <TabsContent value="all" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ProjectCard
            title="HyperStream Engine Pipeline"
            description="Cloud-native data orchestration platform integrating workflows across distributed systems."
            image="/Images/DE1.png?height=400&width=600"
            tags={["AWS", "ETL", "Snowflake", "Kafka", "Airflow"]}
            githubUrl="https://github.com/AiWithAadil/HyperStream_Engine_Pipeline"
            category="aws"
          />
          <ProjectCard
            title="Data Engineering Ecosystem"
            description="Scalable ecosystem integrating multiple technologies for efficient data management."
            image="/Images/DE2.PNG?height=400&width=600"
            tags={["AWS", "React", "Real-time"]}
            githubUrl="https://github.com/AiWithAadil/Cloud-Data-Engineering-Projects/tree/main/Ecosystem"
            category="aws"
          />
          <ProjectCard
            title="SCD in Snowflake Using Streams"
            description="Implements Slowly Changing Dimensions in Snowflake with automated data ingestion."
            image="/Images/DE3.PNG?height=400&width=600"
            tags={["Snowflake", "Streams", "Tasks"]}
            githubUrl="https://github.com/AiWithAadil/scd-in-snowflake-using-streams-tasks"
            category="aws"
          />
          <ProjectCard
            title="Next.js Currency Converter"
            description="React component for real-time currency conversion with API integration."
            image="/Images/web1.jpg?height=400&width=600"
            tags={["Next.js", "React", "API"]}
            githubUrl="https://github.com/AiWithAadil/Next.js-currency-converter"
            category="web"
          />
          <ProjectCard
            title="Amazon Home Page Recreation"
            description="Replica of Amazon's homepage using HTML and CSS for frontend practice."
            image="/Images/web2.jpg?height=400&width=600"
            tags={["HTML", "CSS", "Frontend"]}
            githubUrl="https://github.com/AiWithAadil/amazon_project"
            category="web"
          />
          <ProjectCard
            title="Student Management System"
            description="A TypeScript-based student management system with CRUD operations."
            image="/Images/web3.jpg?height=400&width=600"
            tags={["TypeScript", "React", "CRUD"]}
            githubUrl="https://github.com/AiWithAadil/Typescript_Projects/tree/main/Student%20Management"
            category="web"
          />
          <ProjectCard
            title="YouTube Data Automation with Zapier"
            description="Automates collection and processing of YouTube data using Zapier and AWS."
            image="/Images/AI1.PNG?height=400&width=600"
            tags={["Zapier", "AWS", "Automation"]}
            githubUrl="https://github.com/AiWithAadil/AI-Powered-DataWorks/tree/main/Zapier-Project"
            category="ai"
          />
          <ProjectCard
            title="Client Data Processing with Make.com"
            description="Automates data collection, processing, and email routing using Make.com and Zapier."
            image="/Images/AI2.PNG?height=400&width=600"
            tags={["Make.com", "Zapier", "Automation"]}
            githubUrl="https://github.com/AiWithAadil/AI-Powered-DataWorks/tree/main/Make.com-Project"
            category="ai"
          />
          <ProjectCard
            title="Integrated Workflow Automation"
            description="Automates project data extraction using Apify and Airtable for workflow management."
            image="/Images/AI3.PNG?height=400&width=600"
            tags={["Apify", "Airtable", "Automation"]}
            githubUrl="https://github.com/AiWithAadil/AI-Powered-DataWorks/tree/main/Airtable-Project"
            category="ai"
          />
        </TabsContent>

        {/* AWS Data Engineering Tab */}
        <TabsContent value="aws" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ProjectCard
            title="HyperStream Engine Pipeline"
            description="Cloud-native data orchestration platform integrating workflows across distributed systems."
            image="/Images/DE1.png?height=400&width=600"
            tags={["AWS", "Python", "ETL"]}
            githubUrl="https://github.com/AiWithAadil/HyperStream_Engine_Pipeline"
            category="aws"
          />
          <ProjectCard
            title="Data Engineering Ecosystem"
            description="Scalable ecosystem integrating multiple technologies for efficient data management."
            image="/Images/DE2.PNG?height=400&width=600"
            tags={["AWS", "React", "Real-time"]}
            githubUrl="https://github.com/AiWithAadil/Cloud-Data-Engineering-Projects/tree/main/Ecosystem"
            category="aws"
          />
          <ProjectCard
            title="SCD in Snowflake Using Streams & Tasks"
            description="Implements Slowly Changing Dimensions in Snowflake with automated data ingestion."
            image="/Images/DE3.PNG?height=400&width=600"
            tags={["Snowflake", "Streams", "Tasks"]}
            githubUrl="https://github.com/AiWithAadil/scd-in-snowflake-using-streams-tasks"
            category="aws"
          />
        </TabsContent>

        {/* Web Development Tab */}
        <TabsContent value="web" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ProjectCard
            title="Next.js Currency Converter"
            description="React component for real-time currency conversion with API integration."
            image="/Images/web1.jpg?height=400&width=600"
            tags={["Next.js", "React", "API"]}
            githubUrl="https://github.com/AiWithAadil/Next.js-currency-converter"
            category="web"
          />
          <ProjectCard
            title="Amazon Home Page Recreation"
            description="Replica of Amazon's homepage using HTML and CSS for frontend practice."
            image="/Images/web2.jpg?height=400&width=600"
            tags={["HTML", "CSS", "Frontend"]}
            githubUrl="https://github.com/AiWithAadil/amazon_project"
            category="web"
          />
          <ProjectCard
            title="Student Management System"
            description="A TypeScript-based student management system with CRUD operations."
            image="/Images/web3.jpg?height=400&width=600"
            tags={["TypeScript", "React", "CRUD"]}
            githubUrl="https://github.com/AiWithAadil/Typescript_Projects/tree/main/Student%20Management"
            category="web"
          />
        </TabsContent>

        {/* AI Tools Tab */}
        <TabsContent value="ai" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ProjectCard
            title="YouTube Data Automation with Zapier"
            description="Automates collection and processing of YouTube data using Zapier and AWS."
            image="/Images/AI1.PNG?height=400&width=600"
            tags={["Zapier", "AWS", "Automation"]}
            githubUrl="https://github.com/AiWithAadil/AI-Powered-DataWorks/tree/main/Zapier-Project"
            category="ai"
          />
          <ProjectCard
            title="Client Data Processing with Make.com"
            description="Automates data collection, processing, and email routing using Make.com and Zapier."
            image="/Images/AI2.PNG?height=400&width=600"
            tags={["Make.com", "Zapier", "Automation"]}
            githubUrl="https://github.com/AiWithAadil/AI-Powered-DataWorks/tree/main/Make.com-Project"
            category="ai"
          />
          <ProjectCard
            title="Integrated Workflow Automation"
            description="Automates project data extraction using Apify and Airtable for workflow management."
            image="/Images/AI3.PNG?height=400&width=600"
            tags={["Apify", "Airtable", "Automation"]}
            githubUrl="https://github.com/AiWithAadil/AI-Powered-DataWorks/tree/main/Airtable-Project"
            category="ai"
          />
        </TabsContent>
      </Tabs>
    </div>
  )
}

