import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("commercial-interior-design")!;

export const metadata: Metadata = {
  title: "office cafeteria design in Vadodara | Commercial Interior Design | VadodaraExperts",
  description: "Professional office cafeteria design services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/commercial-interior-design/office-cafeteria-design-vadodara" },
  openGraph: {
    title: "office cafeteria design in Vadodara | VadodaraExperts",
    description: "Professional office cafeteria design services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/commercial-interior-design/office-cafeteria-design-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="office-cafeteria-design-vadodara" />;
}
