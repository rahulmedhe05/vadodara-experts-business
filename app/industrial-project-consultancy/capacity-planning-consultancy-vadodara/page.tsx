import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-project-consultancy")!;

export const metadata: Metadata = {
  title: "capacity planning consultancy in Vadodara | Industrial Project Consultancy | VadodaraExperts",
  description: "Professional capacity planning consultancy services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-project-consultancy/capacity-planning-consultancy-vadodara" },
  openGraph: {
    title: "capacity planning consultancy in Vadodara | VadodaraExperts",
    description: "Professional capacity planning consultancy services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-project-consultancy/capacity-planning-consultancy-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="capacity-planning-consultancy-vadodara" />;
}
