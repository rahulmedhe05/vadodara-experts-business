import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("land-development-consultancy")!;

export const metadata: Metadata = {
  title: "AUDA permission in Vadodara | Land Development Consultancy | VadodaraExperts",
  description: "Professional auda permission services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/land-development-consultancy/auda-permission-vadodara" },
  openGraph: {
    title: "AUDA permission in Vadodara | VadodaraExperts",
    description: "Professional auda permission services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/land-development-consultancy/auda-permission-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="auda-permission-vadodara" />;
}
