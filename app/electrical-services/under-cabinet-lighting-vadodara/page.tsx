import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("electrical-services")!;

export const metadata: Metadata = {
  title: "Under cabinet lighting in Vadodara | Electrical Services | VadodaraExperts",
  description: "Professional under cabinet lighting services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/electrical-services/under-cabinet-lighting-vadodara" },
  openGraph: {
    title: "Under cabinet lighting in Vadodara | VadodaraExperts",
    description: "Professional under cabinet lighting services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/electrical-services/under-cabinet-lighting-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="under-cabinet-lighting-vadodara" />;
}
