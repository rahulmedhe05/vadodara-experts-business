import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("structural-engineering-services")!;

export const metadata: Metadata = {
  title: "Ultrasonic pulse velocity test in Vadodara | Structural Engineering Services | VadodaraExperts",
  description: "Professional ultrasonic pulse velocity test services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/structural-engineering-services/ultrasonic-pulse-velocity-test-vadodara" },
  openGraph: {
    title: "Ultrasonic pulse velocity test in Vadodara | VadodaraExperts",
    description: "Professional ultrasonic pulse velocity test services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/structural-engineering-services/ultrasonic-pulse-velocity-test-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ultrasonic-pulse-velocity-test-vadodara" />;
}
