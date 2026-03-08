import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("office-interior-design")!;

export const metadata: Metadata = {
  title: "executive cabin design in Vadodara | Office Interior Design | VadodaraExperts",
  description: "Professional executive cabin design services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/office-interior-design/executive-cabin-design-vadodara" },
  openGraph: {
    title: "executive cabin design in Vadodara | VadodaraExperts",
    description: "Professional executive cabin design services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/office-interior-design/executive-cabin-design-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="executive-cabin-design-vadodara" />;
}
