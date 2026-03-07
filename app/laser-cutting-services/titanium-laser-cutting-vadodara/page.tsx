import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("laser-cutting-services")!;

export const metadata: Metadata = {
  title: "titanium laser cutting in Vadodara | Laser Cutting Services | VadodaraExperts",
  description: "Professional titanium laser cutting services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/laser-cutting-services/titanium-laser-cutting-vadodara" },
  openGraph: {
    title: "titanium laser cutting in Vadodara | VadodaraExperts",
    description: "Professional titanium laser cutting services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/laser-cutting-services/titanium-laser-cutting-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="titanium-laser-cutting-vadodara" />;
}
