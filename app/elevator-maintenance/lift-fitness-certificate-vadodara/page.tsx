import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("elevator-maintenance")!;

export const metadata: Metadata = {
  title: "lift fitness certificate in Vadodara | Elevator Maintenance | VadodaraExperts",
  description: "Professional lift fitness certificate services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/elevator-maintenance/lift-fitness-certificate-vadodara" },
  openGraph: {
    title: "lift fitness certificate in Vadodara | VadodaraExperts",
    description: "Professional lift fitness certificate services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/elevator-maintenance/lift-fitness-certificate-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="lift-fitness-certificate-vadodara" />;
}
