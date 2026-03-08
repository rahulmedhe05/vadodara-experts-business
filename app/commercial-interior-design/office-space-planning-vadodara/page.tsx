import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("commercial-interior-design")!;

export const metadata: Metadata = {
  title: "office space planning in Vadodara | Commercial Interior Design | VadodaraExperts",
  description: "Professional office space planning services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/commercial-interior-design/office-space-planning-vadodara" },
  openGraph: {
    title: "office space planning in Vadodara | VadodaraExperts",
    description: "Professional office space planning services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/commercial-interior-design/office-space-planning-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="office-space-planning-vadodara" />;
}
