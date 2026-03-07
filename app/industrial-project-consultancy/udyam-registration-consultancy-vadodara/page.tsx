import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-project-consultancy")!;

export const metadata: Metadata = {
  title: "udyam registration consultancy in Vadodara | Industrial Project Consultancy | VadodaraExperts",
  description: "Professional udyam registration consultancy services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-project-consultancy/udyam-registration-consultancy-vadodara" },
  openGraph: {
    title: "udyam registration consultancy in Vadodara | VadodaraExperts",
    description: "Professional udyam registration consultancy services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-project-consultancy/udyam-registration-consultancy-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="udyam-registration-consultancy-vadodara" />;
}
