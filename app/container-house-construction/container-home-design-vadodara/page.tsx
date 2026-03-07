import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("container-house-construction")!;

export const metadata: Metadata = {
  title: "container home design in Vadodara | Container House Construction | VadodaraExperts",
  description: "Professional container home design services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/container-house-construction/container-home-design-vadodara" },
  openGraph: {
    title: "container home design in Vadodara | VadodaraExperts",
    description: "Professional container home design services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/container-house-construction/container-home-design-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="container-home-design-vadodara" />;
}
