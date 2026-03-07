import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-welding-services")!;

export const metadata: Metadata = {
  title: "TIG welding services in Vadodara | Industrial Welding Services | VadodaraExperts",
  description: "Professional tig welding services services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-welding-services/tig-welding-services-vadodara" },
  openGraph: {
    title: "TIG welding services in Vadodara | VadodaraExperts",
    description: "Professional tig welding services services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-welding-services/tig-welding-services-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="tig-welding-services-vadodara" />;
}
