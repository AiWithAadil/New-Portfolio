import { PostCard } from "@/components/post-card"

export default function PostsPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">My Posts</h1>
      <p className="mt-4 max-w-[700px] text-muted-foreground md:text-xl/relaxed">
        Thoughts and <span className="text-primary font-bold">insights</span> on AWS Data Engineering, Web Development, and Generative AI.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <PostCard
          title="Introducing HyperStream Engine"
          excerpt="Learn how to design and implement scalable data pipelines using AWS services like Step Functions, Lambda, and Glue."
          date=""
          image="/Images/DE1.png"
          url="https://www.linkedin.com/posts/syed-muhammad-adil-ahmed-3b96b2333_dataengineering-cloudarchitecture-bigdata-activity-7302350299518656513-lM3s?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFPuQr0BjVaIUxYmbY5iBwVj2YnGO5ariAI"
          platform="LinkedIn"
        />
        <PostCard
          title="Amazing Experience at AWS Community Day Karachi 2025!"
          excerpt="AWS Community Day Karachi 2025. Where we get opportunity to network with industry professionals."
          date=""
          image="/Images/aws.jpg?height=400&width=600"
          url="https://www.linkedin.com/posts/syed-muhammad-adil-ahmed-3b96b2333_awscommunitydaykarachi-awsugkarachi-networking-activity-7299317085304766466-2D5R?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFPuQr0BjVaIUxYmbY5iBwVj2YnGO5ariAI"
          platform="LinkedIn"
        />
        <PostCard
          title="Alhamdulillah! Successful Completion of Cloud Data Engineering Exam"
          excerpt="marks an important milestone in my learning journey as I successfully completed my Cloud Data Engineering Exam"
          date=""
          image="/Images/exam1.jpg?height=400&width=600"
          url="https://www.linkedin.com/posts/syed-muhammad-adil-ahmed-3b96b2333_saylaniwelfare-clouddataengineering-dataengineering-activity-7281914990440165376-SdoT?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFPuQr0BjVaIUxYmbY5iBwVj2YnGO5ariAI"
          platform="LinkedIn"
        />
        <PostCard
          title="Excited to Attend AWS Community Day 2025! "
          excerpt="Thrilled to be a part of AWS Community Pakistan Day Karachi 2025 as an attendee!"
          date=""
          image="/Images/aws3.png?height=400&width=600"
          url="https://www.linkedin.com/posts/syed-muhammad-adil-ahmed-3b96b2333_amazonwebservices-awsugkarachi-awscommunitypakistan-activity-7296514204939743232-vbWQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFPuQr0BjVaIUxYmbY5iBwVj2YnGO5ariAI"
          platform="LinkedIn"
        />
        <PostCard
          title="Had an amazing experience attending the Generative AI for Data Engineers"
          excerpt="I had the opportunity to attend a transformative workshop on Generative AI for Data Engineers."
          date=""
          image="/Images/group.jpg?height=400&width=600"
          url="https://linkedin.com"
          platform="LinkedIn"
        />
        <PostCard
          title="No-Code & Low-Code YouTube Data Automation with AI & AWS"
          excerpt="A step-by-step guide to integrating Zapie and aws services"
          date=""
          image="/Images/post.PNG?height=400&width=600"
          url="https://www.linkedin.com/posts/syed-muhammad-adil-ahmed-3b96b2333_no-code-low-code-youtube-data-automation-activity-7287831975732649988-xRzV?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFPuQr0BjVaIUxYmbY5iBwVj2YnGO5ariAI"
          platform="LinkedIn"
        />
      </div>
    </div>
  )
}

