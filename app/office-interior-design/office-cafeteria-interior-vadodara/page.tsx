import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("office-interior-design")!;

export const metadata: Metadata = {
  title: "office cafeteria interior in Vadodara | Office Interior Design | VadodaraExperts",
  description: "Professional office cafeteria interior services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/office-interior-design/office-cafeteria-interior-vadodara" },
  openGraph: {
    title: "office cafeteria interior in Vadodara | VadodaraExperts",
    description: "Professional office cafeteria interior services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/office-interior-design/office-cafeteria-interior-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="office-cafeteria-interior-vadodara" />;
}
