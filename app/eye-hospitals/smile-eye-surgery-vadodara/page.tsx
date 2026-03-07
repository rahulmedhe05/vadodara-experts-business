import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("eye-hospitals")!;

export const metadata: Metadata = {
  title: "SMILE eye surgery in Vadodara | Eye Hospitals | VadodaraExperts",
  description: "Professional smile eye surgery services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/eye-hospitals/smile-eye-surgery-vadodara" },
  openGraph: {
    title: "SMILE eye surgery in Vadodara | VadodaraExperts",
    description: "Professional smile eye surgery services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/eye-hospitals/smile-eye-surgery-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="smile-eye-surgery-vadodara" />;
}
