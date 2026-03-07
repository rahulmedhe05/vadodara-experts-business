import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("false-ceiling-services")!;

export const metadata: Metadata = {
  title: "Mineral fiber ceiling in Vadodara | False Ceiling Services | VadodaraExperts",
  description: "Professional mineral fiber ceiling services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/false-ceiling-services/mineral-fiber-ceiling-vadodara" },
  openGraph: {
    title: "Mineral fiber ceiling in Vadodara | VadodaraExperts",
    description: "Professional mineral fiber ceiling services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/false-ceiling-services/mineral-fiber-ceiling-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="mineral-fiber-ceiling-vadodara" />;
}
