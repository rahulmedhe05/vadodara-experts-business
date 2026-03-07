import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("dermatology-clinics")!;

export const metadata: Metadata = {
  title: "Body contouring in Vadodara | Dermatology Clinics | VadodaraExperts",
  description: "Professional body contouring services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/dermatology-clinics/body-contouring-vadodara" },
  openGraph: {
    title: "Body contouring in Vadodara | VadodaraExperts",
    description: "Professional body contouring services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/dermatology-clinics/body-contouring-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="body-contouring-vadodara" />;
}
