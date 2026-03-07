import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("laser-cutting-services")!;

export const metadata: Metadata = {
  title: "laser hardening in Vadodara | Laser Cutting Services | VadodaraExperts",
  description: "Professional laser hardening services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/laser-cutting-services/laser-hardening-vadodara" },
  openGraph: {
    title: "laser hardening in Vadodara | VadodaraExperts",
    description: "Professional laser hardening services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/laser-cutting-services/laser-hardening-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="laser-hardening-vadodara" />;
}
