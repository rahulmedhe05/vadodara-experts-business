import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-renovation-services")!;

export const metadata: Metadata = {
  title: "Foundation in Vadodara | Home Renovation Services | VadodaraExperts",
  description: "Professional foundation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-renovation-services/foundation" },
  openGraph: {
    title: "Foundation in Vadodara | VadodaraExperts",
    description: "Professional foundation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-renovation-services/foundation",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="foundation" />;
}
