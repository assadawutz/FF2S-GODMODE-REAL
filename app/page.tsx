"use client";

import UpActivity from "@/components/Activity";
import LogoBar from "@/components/Bar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/Hero";
import HighlightSection from "@/components/Highlight";
import NewsSection from "@/components/News";
import RecommendedSection from "@/components/Recommend";
import SearchSection from "@/components/Search";
import KnowledgeSection from "@/components/Knowledge";


export default function HomePage() {
  return (
    <main className="w-full min-h-screen bg-white">

      <Header />
      <HeroSection />

      <SearchSection />

      <HighlightSection />

      <RecommendedSection />


      <UpActivity />
      <KnowledgeSection />

      <NewsSection />

      <LogoBar />

      <Footer />

    </main>
  );
}
