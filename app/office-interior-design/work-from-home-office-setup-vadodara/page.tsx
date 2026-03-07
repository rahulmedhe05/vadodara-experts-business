import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("office-interior-design")!;

export const metadata: Metadata = {
  title: "work from home office setup in Vadodara | Office Interior Design | VadodaraExperts",
  description: "Professional work from home office setup services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/office-interior-design/work-from-home-office-setup-vadodara" },
  openGraph: {
    title: "work from home office setup in Vadodara | VadodaraExperts",
    description: "Professional work from home office setup services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/office-interior-design/work-from-home-office-setup-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="work-from-home-office-setup-vadodara" />;
}
