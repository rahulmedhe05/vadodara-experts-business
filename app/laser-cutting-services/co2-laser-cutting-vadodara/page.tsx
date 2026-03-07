import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("laser-cutting-services")!;

export const metadata: Metadata = {
  title: "CO2 laser cutting in Vadodara | Laser Cutting Services | VadodaraExperts",
  description: "Professional co2 laser cutting services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/laser-cutting-services/co2-laser-cutting-vadodara" },
  openGraph: {
    title: "CO2 laser cutting in Vadodara | VadodaraExperts",
    description: "Professional co2 laser cutting services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/laser-cutting-services/co2-laser-cutting-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="co2-laser-cutting-vadodara" />;
}
