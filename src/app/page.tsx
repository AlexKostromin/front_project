import { Reveal } from "@/shared/ui";
import { Footer } from "@/widgets/footer/ui/Footer";
import { Header } from "@/widgets/header/ui/Header";
import { About } from "@/widgets/landing/about/ui/About";
import { Benefits } from "@/widgets/landing/benefits/ui/Benefits";
import { BlogTeaser } from "@/widgets/landing/blog/ui/BlogTeaser";
import { Cases } from "@/widgets/landing/cases/ui/Cases";
import { Comparison } from "@/widgets/landing/comparison/ui/Comparison";
import { Compliance } from "@/widgets/landing/compliance/ui/Compliance";
import { FinalCta } from "@/widgets/landing/cta/ui/FinalCta";
import { Faq } from "@/widgets/landing/faq/ui/Faq";
import { Hero } from "@/widgets/landing/hero/ui/Hero";
import { HowItWorks } from "@/widgets/landing/how-it-works/ui/HowItWorks";
import { Newsletter } from "@/widgets/landing/newsletter/ui/Newsletter";
import { Press } from "@/widgets/landing/press/ui/Press";
import { Solutions } from "@/widgets/landing/solutions/ui/Solutions";
import { StickyCta } from "@/widgets/sticky-cta/ui/StickyCta";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Reveal>
          <Solutions />
        </Reveal>
        <Reveal>
          <HowItWorks />
        </Reveal>
        <Reveal>
          <Benefits />
        </Reveal>
        <Reveal>
          <Compliance />
        </Reveal>
        <Reveal>
          <Cases />
        </Reveal>
        <Reveal>
          <Press />
        </Reveal>
        <Reveal>
          <About />
        </Reveal>
        <Reveal>
          <Comparison />
        </Reveal>
        <Reveal>
          <Faq />
        </Reveal>
        <Reveal>
          <FinalCta />
        </Reveal>
        <Reveal>
          <BlogTeaser />
        </Reveal>
        <Reveal>
          <Newsletter />
        </Reveal>
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
