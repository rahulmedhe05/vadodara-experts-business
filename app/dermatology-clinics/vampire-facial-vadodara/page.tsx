import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("dermatology-clinics")!;

export const metadata: Metadata = {
  title: "Vampire facial in Vadodara | Dermatology Clinics | VadodaraExperts",
  description: "Professional vampire facial services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/dermatology-clinics/vampire-facial-vadodara" },
  openGraph: {
    title: "Vampire facial in Vadodara | VadodaraExperts",
    description: "Professional vampire facial services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/dermatology-clinics/vampire-facial-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="vampire-facial-vadodara" />;
}
