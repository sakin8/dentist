"use client";
import AppointmentForm from "@/src/components/AppointmentForm";
import BeforeAfter from "@/src/components/BeforeAfter";
import DoctorSection from "@/src/components/DoctorSection";
import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";
import HeroSection from "@/src/components/HeroSection";
import ServicesSection from "@/src/components/OurServices";
import TestimonialSlider from "@/src/components/Testimonial";
import dynamic from "next/dynamic";


// Dynamic import for Vapi widget (client-only)
const VapiDentalWidget = dynamic(
  () => import("@/src/components/VapiDentalWidget"),
  { ssr: false }
);

export default function Home() {
  return (
    <>
      <Header/>
      <HeroSection/>
      <ServicesSection/>
      <BeforeAfter/>
      <TestimonialSlider/>
      <DoctorSection/>
      <AppointmentForm/>
      <Footer/>
      <VapiDentalWidget/>
    </>
  );
}
