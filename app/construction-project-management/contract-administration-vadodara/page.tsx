import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("construction-project-management")!;

export const metadata: Metadata = {
  title: "contract administration in Vadodara | Construction Project Management | VadodaraExperts",
  description: "Professional contract administration services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/construction-project-management/contract-administration-vadodara" },
  openGraph: {
    title: "contract administration in Vadodara | VadodaraExperts",
    description: "Professional contract administration services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/construction-project-management/contract-administration-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="contract-administration-vadodara" />;
}
