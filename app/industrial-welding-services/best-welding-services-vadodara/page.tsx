import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-welding-services")!;

export const metadata: Metadata = {
  title: "best welding services in Vadodara | Industrial Welding Services | VadodaraExperts",
  description: "Professional best welding services services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-welding-services/best-welding-services-vadodara" },
  openGraph: {
    title: "best welding services in Vadodara | VadodaraExperts",
    description: "Professional best welding services services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-welding-services/best-welding-services-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="best-welding-services-vadodara" />;
}
