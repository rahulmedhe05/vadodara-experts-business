import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("trademark-registration-services")!;

export const metadata: Metadata = {
  title: "Best trademark class in Vadodara | Trademark Registration Services | VadodaraExperts",
  description: "Professional best trademark class services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/trademark-registration-services/best-trademark-class-vadodara" },
  openGraph: {
    title: "Best trademark class in Vadodara | VadodaraExperts",
    description: "Professional best trademark class services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/trademark-registration-services/best-trademark-class-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="best-trademark-class-vadodara" />;
}
