import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("office-interior-design")!;

export const metadata: Metadata = {
  title: "office refurbishment in Vadodara | Office Interior Design | VadodaraExperts",
  description: "Professional office refurbishment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/office-interior-design/office-refurbishment-vadodara" },
  openGraph: {
    title: "office refurbishment in Vadodara | VadodaraExperts",
    description: "Professional office refurbishment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/office-interior-design/office-refurbishment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="office-refurbishment-vadodara" />;
}
