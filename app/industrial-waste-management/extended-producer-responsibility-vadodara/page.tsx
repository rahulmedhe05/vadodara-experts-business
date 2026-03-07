import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-waste-management")!;

export const metadata: Metadata = {
  title: "Extended producer responsibility in Vadodara | Industrial Waste Management | VadodaraExperts",
  description: "Professional extended producer responsibility services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-waste-management/extended-producer-responsibility-vadodara" },
  openGraph: {
    title: "Extended producer responsibility in Vadodara | VadodaraExperts",
    description: "Professional extended producer responsibility services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-waste-management/extended-producer-responsibility-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="extended-producer-responsibility-vadodara" />;
}
