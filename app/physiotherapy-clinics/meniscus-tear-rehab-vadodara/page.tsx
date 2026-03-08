import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("physiotherapy-clinics")!;

export const metadata: Metadata = {
  title: "Meniscus tear rehab in Vadodara | Physiotherapy Clinics | VadodaraExperts",
  description: "Professional meniscus tear rehab services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/physiotherapy-clinics/meniscus-tear-rehab-vadodara" },
  openGraph: {
    title: "Meniscus tear rehab in Vadodara | VadodaraExperts",
    description: "Professional meniscus tear rehab services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/physiotherapy-clinics/meniscus-tear-rehab-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="meniscus-tear-rehab-vadodara" />;
}
