import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("construction-project-management")!;

export const metadata: Metadata = {
  title: "construction consultant in Vadodara | Construction Project Management | VadodaraExperts",
  description: "Professional construction consultant services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/construction-project-management/construction-consultant-vadodara" },
  openGraph: {
    title: "construction consultant in Vadodara | VadodaraExperts",
    description: "Professional construction consultant services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/construction-project-management/construction-consultant-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="construction-consultant-vadodara" />;
}
