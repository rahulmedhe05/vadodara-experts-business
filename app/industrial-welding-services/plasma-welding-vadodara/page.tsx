import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-welding-services")!;

export const metadata: Metadata = {
  title: "plasma welding in Vadodara | Industrial Welding Services | VadodaraExperts",
  description: "Professional plasma welding services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-welding-services/plasma-welding-vadodara" },
  openGraph: {
    title: "plasma welding in Vadodara | VadodaraExperts",
    description: "Professional plasma welding services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-welding-services/plasma-welding-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="plasma-welding-vadodara" />;
}
