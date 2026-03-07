import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-welding-services")!;

export const metadata: Metadata = {
  title: "GMAW welding in Vadodara | Industrial Welding Services | VadodaraExperts",
  description: "Professional gmaw welding services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-welding-services/gmaw-welding-vadodara" },
  openGraph: {
    title: "GMAW welding in Vadodara | VadodaraExperts",
    description: "Professional gmaw welding services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-welding-services/gmaw-welding-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="gmaw-welding-vadodara" />;
}
