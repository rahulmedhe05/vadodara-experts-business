import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("commercial-interior-design")!;

export const metadata: Metadata = {
  title: "signage design commercial in Vadodara | Commercial Interior Design | VadodaraExperts",
  description: "Professional signage design commercial services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/commercial-interior-design/signage-design-commercial-vadodara" },
  openGraph: {
    title: "signage design commercial in Vadodara | VadodaraExperts",
    description: "Professional signage design commercial services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/commercial-interior-design/signage-design-commercial-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="signage-design-commercial-vadodara" />;
}
