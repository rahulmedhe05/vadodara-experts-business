import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("eye-hospitals")!;

export const metadata: Metadata = {
  title: "Eye pressure treatment in Vadodara | Eye Hospitals | VadodaraExperts",
  description: "Professional eye pressure treatment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/eye-hospitals/eye-pressure-treatment-vadodara" },
  openGraph: {
    title: "Eye pressure treatment in Vadodara | VadodaraExperts",
    description: "Professional eye pressure treatment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/eye-hospitals/eye-pressure-treatment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="eye-pressure-treatment-vadodara" />;
}
