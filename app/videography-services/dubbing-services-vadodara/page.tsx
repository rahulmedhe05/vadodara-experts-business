import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("videography-services")!;

export const metadata: Metadata = {
  title: "Dubbing services in Vadodara | Videography Services | VadodaraExperts",
  description: "Professional dubbing services services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/videography-services/dubbing-services-vadodara" },
  openGraph: {
    title: "Dubbing services in Vadodara | VadodaraExperts",
    description: "Professional dubbing services services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/videography-services/dubbing-services-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="dubbing-services-vadodara" />;
}
