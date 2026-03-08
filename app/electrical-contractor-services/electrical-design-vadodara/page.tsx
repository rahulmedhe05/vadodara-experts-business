import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("electrical-contractor-services")!;

export const metadata: Metadata = {
  title: "electrical design in Vadodara | Electrical Contractor Services | VadodaraExperts",
  description: "Professional electrical design services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/electrical-contractor-services/electrical-design-vadodara" },
  openGraph: {
    title: "electrical design in Vadodara | VadodaraExperts",
    description: "Professional electrical design services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/electrical-contractor-services/electrical-design-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="electrical-design-vadodara" />;
}
