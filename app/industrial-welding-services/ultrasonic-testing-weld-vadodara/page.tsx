import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-welding-services")!;

export const metadata: Metadata = {
  title: "ultrasonic testing weld in Vadodara | Industrial Welding Services | VadodaraExperts",
  description: "Professional ultrasonic testing weld services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-welding-services/ultrasonic-testing-weld-vadodara" },
  openGraph: {
    title: "ultrasonic testing weld in Vadodara | VadodaraExperts",
    description: "Professional ultrasonic testing weld services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-welding-services/ultrasonic-testing-weld-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ultrasonic-testing-weld-vadodara" />;
}
