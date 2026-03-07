import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("carpenter-services")!;

export const metadata: Metadata = {
  title: "Office furniture carpentry in Vadodara | Carpenter Services | VadodaraExperts",
  description: "Professional office furniture carpentry services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/carpenter-services/office-furniture-carpentry-vadodara" },
  openGraph: {
    title: "Office furniture carpentry in Vadodara | VadodaraExperts",
    description: "Professional office furniture carpentry services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/carpenter-services/office-furniture-carpentry-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="office-furniture-carpentry-vadodara" />;
}
