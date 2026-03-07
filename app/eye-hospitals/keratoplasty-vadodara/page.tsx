import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("eye-hospitals")!;

export const metadata: Metadata = {
  title: "Keratoplasty in Vadodara | Eye Hospitals | VadodaraExperts",
  description: "Professional keratoplasty services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/eye-hospitals/keratoplasty-vadodara" },
  openGraph: {
    title: "Keratoplasty in Vadodara | VadodaraExperts",
    description: "Professional keratoplasty services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/eye-hospitals/keratoplasty-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="keratoplasty-vadodara" />;
}
