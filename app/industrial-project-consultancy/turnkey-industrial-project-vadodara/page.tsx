import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-project-consultancy")!;

export const metadata: Metadata = {
  title: "turnkey industrial project in Vadodara | Industrial Project Consultancy | VadodaraExperts",
  description: "Professional turnkey industrial project services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-project-consultancy/turnkey-industrial-project-vadodara" },
  openGraph: {
    title: "turnkey industrial project in Vadodara | VadodaraExperts",
    description: "Professional turnkey industrial project services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-project-consultancy/turnkey-industrial-project-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="turnkey-industrial-project-vadodara" />;
}
