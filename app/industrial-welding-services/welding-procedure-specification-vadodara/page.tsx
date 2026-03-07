import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-welding-services")!;

export const metadata: Metadata = {
  title: "welding procedure specification in Vadodara | Industrial Welding Services | VadodaraExperts",
  description: "Professional welding procedure specification services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-welding-services/welding-procedure-specification-vadodara" },
  openGraph: {
    title: "welding procedure specification in Vadodara | VadodaraExperts",
    description: "Professional welding procedure specification services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-welding-services/welding-procedure-specification-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="welding-procedure-specification-vadodara" />;
}
