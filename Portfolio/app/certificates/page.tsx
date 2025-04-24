import { CertificateCard } from "@/components/certificate-card"

export default function CertificatesPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">My Certificates</h1>
      <p className="mt-4 max-w-[700px] text-muted-foreground md:text-xl/relaxed">
        Professional certifications and achievements in AWS, Web Development, and AI.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <CertificateCard
          title="Introduction to Data Engineering"
          issuer="DataCamp"
          date="Sep 2024"
          image="/Images/IDE.png?height=400&width=600"
          verificationUrl="https://www.datacamp.com/completed/statement-of-accomplishment/course/aad315b1eeda61433ca29fa12094b7bc0f3ce90f"
        />
        <CertificateCard
          title="Database Design"
          issuer="DataCamp"
          date="Sep 2024"
          image="/Images/DB_CERTIFICATE.PNG?height=400&width=600"
          verificationUrl="https://www.datacamp.com/completed/statement-of-accomplishment/course/f0e440adc2d8700ecddd4b9aaf6e8031efe1e652"
        />
        <CertificateCard
          title="Web Development Course"
          issuer="Info Channel"
          date="Jan 2023"
          image="/Images/WEBDEV.jpeg?height=400&width=600"
          verificationUrl="https://infochannel.com.pk/"
        />
        <CertificateCard
          title="Data Engineering Workshop"
          issuer="Snowflake"
          date="Aug 2024"
          image="/Images/BADGE5.png?height=400&width=600"
          verificationUrl="https://achieve.snowflake.com/eb34425c-6552-4365-9d6c-d29c07b6b4bd#acc.hEomT4Or"
        />
        <CertificateCard
          title="Data Lake Workshop"
          issuer="Snowflake"
          date="Aug 2024"
          image="/Images/BADGE4.png?height=400&width=600"
          verificationUrl="https://achieve.snowflake.com/acc61c07-b11e-48cb-9675-6b386646c663#acc.3qxfkyis"
        />
        <CertificateCard
          title="Data Application Builders Workshop"
          issuer="Snowflake"
          date="Aug 2024"
          image="/Images/BADGE3.png?height=400&width=600"
          verificationUrl="https://achieve.snowflake.com/64d4d0a1-a61e-45d9-91e5-614b4b073455#acc.QAn3R04j"
        />
      </div>
    </div>
  )
}

