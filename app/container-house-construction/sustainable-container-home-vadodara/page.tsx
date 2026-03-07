import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("container-house-construction")!;

export const metadata: Metadata = {
  title: "sustainable container home in Vadodara | Container House Construction | VadodaraExperts",
  description: "Professional sustainable container home services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/container-house-construction/sustainable-container-home-vadodara" },
  openGraph: {
    title: "sustainable container home in Vadodara | VadodaraExperts",
    description: "Professional sustainable container home services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/container-house-construction/sustainable-container-home-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="sustainable-container-home-vadodara" />;
}
