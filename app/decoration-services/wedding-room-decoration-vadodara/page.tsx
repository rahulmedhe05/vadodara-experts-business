import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("decoration-services")!;

export const metadata: Metadata = {
  title: "Wedding room decoration in Vadodara | Decoration Services | VadodaraExperts",
  description: "Professional wedding room decoration services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/decoration-services/wedding-room-decoration-vadodara" },
  openGraph: {
    title: "Wedding room decoration in Vadodara | VadodaraExperts",
    description: "Professional wedding room decoration services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/decoration-services/wedding-room-decoration-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="wedding-room-decoration-vadodara" />;
}
