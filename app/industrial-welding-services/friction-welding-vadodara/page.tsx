import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-welding-services")!;

export const metadata: Metadata = {
  title: "friction welding in Vadodara | Industrial Welding Services | VadodaraExperts",
  description: "Professional friction welding services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-welding-services/friction-welding-vadodara" },
  openGraph: {
    title: "friction welding in Vadodara | VadodaraExperts",
    description: "Professional friction welding services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-welding-services/friction-welding-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="friction-welding-vadodara" />;
}
