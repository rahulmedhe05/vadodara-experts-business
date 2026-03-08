import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("eye-hospitals")!;

export const metadata: Metadata = {
  title: "Best eye hospital in Vadodara | Eye Hospitals | VadodaraExperts",
  description: "Professional best eye hospital services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/eye-hospitals/best-eye-hospital-vadodara" },
  openGraph: {
    title: "Best eye hospital in Vadodara | VadodaraExperts",
    description: "Professional best eye hospital services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/eye-hospitals/best-eye-hospital-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="best-eye-hospital-vadodara" />;
}
