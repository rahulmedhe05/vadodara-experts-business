import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("land-development-consultancy")!;

export const metadata: Metadata = {
  title: "VUDA permission in Vadodara | Land Development Consultancy | VadodaraExperts",
  description: "Professional vuda permission services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/land-development-consultancy/vuda-permission-vadodara" },
  openGraph: {
    title: "VUDA permission in Vadodara | VadodaraExperts",
    description: "Professional vuda permission services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/land-development-consultancy/vuda-permission-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="vuda-permission-vadodara" />;
}
