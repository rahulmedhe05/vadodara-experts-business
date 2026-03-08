import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-solar-installation")!;

export const metadata: Metadata = {
  title: "warehouse solar installation in Vadodara | Industrial Solar Installation | VadodaraExperts",
  description: "Professional warehouse solar installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-solar-installation/warehouse-solar-installation-vadodara" },
  openGraph: {
    title: "warehouse solar installation in Vadodara | VadodaraExperts",
    description: "Professional warehouse solar installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-solar-installation/warehouse-solar-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="warehouse-solar-installation-vadodara" />;
}
