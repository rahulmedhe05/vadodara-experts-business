import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-waste-management")!;

export const metadata: Metadata = {
  title: "Site cleanup in Vadodara | Industrial Waste Management | VadodaraExperts",
  description: "Professional site cleanup services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-waste-management/site-cleanup-vadodara" },
  openGraph: {
    title: "Site cleanup in Vadodara | VadodaraExperts",
    description: "Professional site cleanup services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-waste-management/site-cleanup-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="site-cleanup-vadodara" />;
}
