import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("construction-project-management")!;

export const metadata: Metadata = {
  title: "independent engineer in Vadodara | Construction Project Management | VadodaraExperts",
  description: "Professional independent engineer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/construction-project-management/independent-engineer-vadodara" },
  openGraph: {
    title: "independent engineer in Vadodara | VadodaraExperts",
    description: "Professional independent engineer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/construction-project-management/independent-engineer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="independent-engineer-vadodara" />;
}
