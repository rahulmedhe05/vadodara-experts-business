import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("dental-clinics")!;

export const metadata: Metadata = {
  title: "Dental Clinics in Vadodara | VadodaraExperts",
  description: "Find the best dental clinics in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/dental-clinics" },
  openGraph: {
    title: "Dental Clinics in Vadodara | VadodaraExperts",
    description: "Find the best dental clinics in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/dental-clinics",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
