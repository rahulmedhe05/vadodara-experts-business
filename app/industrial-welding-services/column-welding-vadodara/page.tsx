import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-welding-services")!;

export const metadata: Metadata = {
  title: "column welding in Vadodara | Industrial Welding Services | VadodaraExperts",
  description: "Professional column welding services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-welding-services/column-welding-vadodara" },
  openGraph: {
    title: "column welding in Vadodara | VadodaraExperts",
    description: "Professional column welding services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-welding-services/column-welding-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="column-welding-vadodara" />;
}
