import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-welding-services")!;

export const metadata: Metadata = {
  title: "dye penetrant testing in Vadodara | Industrial Welding Services | VadodaraExperts",
  description: "Professional dye penetrant testing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-welding-services/dye-penetrant-testing-vadodara" },
  openGraph: {
    title: "dye penetrant testing in Vadodara | VadodaraExperts",
    description: "Professional dye penetrant testing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-welding-services/dye-penetrant-testing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="dye-penetrant-testing-vadodara" />;
}
