import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("eye-hospitals")!;

export const metadata: Metadata = {
  title: "Eye clinic in Vadodara | Eye Hospitals | VadodaraExperts",
  description: "Professional eye clinic services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/eye-hospitals/eye-clinic-vadodara" },
  openGraph: {
    title: "Eye clinic in Vadodara | VadodaraExperts",
    description: "Professional eye clinic services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/eye-hospitals/eye-clinic-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="eye-clinic-vadodara" />;
}
