import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("land-development-consultancy")!;

export const metadata: Metadata = {
  title: "fire NOC for project in Vadodara | Land Development Consultancy | VadodaraExperts",
  description: "Professional fire noc for project services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/land-development-consultancy/fire-noc-for-project-vadodara" },
  openGraph: {
    title: "fire NOC for project in Vadodara | VadodaraExperts",
    description: "Professional fire noc for project services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/land-development-consultancy/fire-noc-for-project-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fire-noc-for-project-vadodara" />;
}
