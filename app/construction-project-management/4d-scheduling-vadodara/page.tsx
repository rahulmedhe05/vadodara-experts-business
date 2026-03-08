import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("construction-project-management")!;

export const metadata: Metadata = {
  title: "4D scheduling in Vadodara | Construction Project Management | VadodaraExperts",
  description: "Professional 4d scheduling services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/construction-project-management/4d-scheduling-vadodara" },
  openGraph: {
    title: "4D scheduling in Vadodara | VadodaraExperts",
    description: "Professional 4d scheduling services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/construction-project-management/4d-scheduling-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="4d-scheduling-vadodara" />;
}
