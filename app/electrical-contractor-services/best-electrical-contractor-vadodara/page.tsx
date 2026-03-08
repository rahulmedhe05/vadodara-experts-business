import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("electrical-contractor-services")!;

export const metadata: Metadata = {
  title: "best electrical contractor in Vadodara | Electrical Contractor Services | VadodaraExperts",
  description: "Professional best electrical contractor services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/electrical-contractor-services/best-electrical-contractor-vadodara" },
  openGraph: {
    title: "best electrical contractor in Vadodara | VadodaraExperts",
    description: "Professional best electrical contractor services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/electrical-contractor-services/best-electrical-contractor-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="best-electrical-contractor-vadodara" />;
}
