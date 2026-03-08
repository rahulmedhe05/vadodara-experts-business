import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("office-interior-design")!;

export const metadata: Metadata = {
  title: "MD cabin design in Vadodara | Office Interior Design | VadodaraExperts",
  description: "Professional md cabin design services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/office-interior-design/md-cabin-design-vadodara" },
  openGraph: {
    title: "MD cabin design in Vadodara | VadodaraExperts",
    description: "Professional md cabin design services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/office-interior-design/md-cabin-design-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="md-cabin-design-vadodara" />;
}
