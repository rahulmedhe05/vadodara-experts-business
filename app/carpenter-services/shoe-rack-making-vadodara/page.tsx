import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("carpenter-services")!;

export const metadata: Metadata = {
  title: "Shoe rack making in Vadodara | Carpenter Services | VadodaraExperts",
  description: "Professional shoe rack making services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/carpenter-services/shoe-rack-making-vadodara" },
  openGraph: {
    title: "Shoe rack making in Vadodara | VadodaraExperts",
    description: "Professional shoe rack making services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/carpenter-services/shoe-rack-making-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="shoe-rack-making-vadodara" />;
}
