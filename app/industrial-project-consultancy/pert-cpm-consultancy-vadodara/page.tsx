import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-project-consultancy")!;

export const metadata: Metadata = {
  title: "PERT CPM consultancy in Vadodara | Industrial Project Consultancy | VadodaraExperts",
  description: "Professional pert cpm consultancy services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-project-consultancy/pert-cpm-consultancy-vadodara" },
  openGraph: {
    title: "PERT CPM consultancy in Vadodara | VadodaraExperts",
    description: "Professional pert cpm consultancy services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-project-consultancy/pert-cpm-consultancy-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pert-cpm-consultancy-vadodara" />;
}
