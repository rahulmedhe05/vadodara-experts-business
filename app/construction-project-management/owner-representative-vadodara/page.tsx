import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("construction-project-management")!;

export const metadata: Metadata = {
  title: "owner representative in Vadodara | Construction Project Management | VadodaraExperts",
  description: "Professional owner representative services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/construction-project-management/owner-representative-vadodara" },
  openGraph: {
    title: "owner representative in Vadodara | VadodaraExperts",
    description: "Professional owner representative services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/construction-project-management/owner-representative-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="owner-representative-vadodara" />;
}
