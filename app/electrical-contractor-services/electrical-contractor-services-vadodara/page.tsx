import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("electrical-contractor-services")!;

export const metadata: Metadata = {
  title: "electrical contractor services in Vadodara | Electrical Contractor Services | VadodaraExperts",
  description: "Professional electrical contractor services services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/electrical-contractor-services/electrical-contractor-services-vadodara" },
  openGraph: {
    title: "electrical contractor services in Vadodara | VadodaraExperts",
    description: "Professional electrical contractor services services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/electrical-contractor-services/electrical-contractor-services-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="electrical-contractor-services-vadodara" />;
}
