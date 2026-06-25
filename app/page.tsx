import Image from "next/image";
import Header from "@/layout/Header";
import HeroSection from "@/main/HeroSection";
import AboutSection from "@/main/AboutSection";
import ServicesSection from "@/main/OurServices";
import CompanyOverview from "@/main/CompanyOverview";
import NewSection from "@/main/NewSection";
import JobAndIndustriesSections from "@/main/JobAndIndustriesSections";
import MSpireSection from "@/main/MSpireSection";

export default function Home() {
  return (
  <>
  <Header/>
  <HeroSection/>
  <AboutSection/>
  <ServicesSection/>
  <CompanyOverview/>
  <NewSection/>
  <JobAndIndustriesSections/>
  <MSpireSection />
  </>
  );
}
