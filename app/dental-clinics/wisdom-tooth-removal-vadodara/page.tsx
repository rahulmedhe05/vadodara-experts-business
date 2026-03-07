import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("dental-clinics")!;

export const metadata: Metadata = {
  title: "Wisdom tooth removal in Vadodara | Dental Clinics | VadodaraExperts",
  description: "Professional wisdom tooth removal services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/dental-clinics/wisdom-tooth-removal-vadodara" },
  openGraph: {
    title: "Wisdom tooth removal in Vadodara | VadodaraExperts",
    description: "Professional wisdom tooth removal services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/dental-clinics/wisdom-tooth-removal-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="wisdom-tooth-removal-vadodara" />;
}
