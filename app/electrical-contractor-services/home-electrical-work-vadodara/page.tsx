import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("electrical-contractor-services")!;

export const metadata: Metadata = {
  title: "home electrical work in Vadodara | Electrical Contractor Services | VadodaraExperts",
  description: "Professional home electrical work services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/electrical-contractor-services/home-electrical-work-vadodara" },
  openGraph: {
    title: "home electrical work in Vadodara | VadodaraExperts",
    description: "Professional home electrical work services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/electrical-contractor-services/home-electrical-work-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="home-electrical-work-vadodara" />;
}
