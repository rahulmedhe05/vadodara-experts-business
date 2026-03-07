import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("eye-hospitals")!;

export const metadata: Metadata = {
  title: "Comprehensive eye exam in Vadodara | Eye Hospitals | VadodaraExperts",
  description: "Professional comprehensive eye exam services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/eye-hospitals/comprehensive-eye-exam-vadodara" },
  openGraph: {
    title: "Comprehensive eye exam in Vadodara | VadodaraExperts",
    description: "Professional comprehensive eye exam services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/eye-hospitals/comprehensive-eye-exam-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="comprehensive-eye-exam-vadodara" />;
}
