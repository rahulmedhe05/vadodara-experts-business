import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-welding-services")!;

export const metadata: Metadata = {
  title: "flash butt welding in Vadodara | Industrial Welding Services | VadodaraExperts",
  description: "Professional flash butt welding services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-welding-services/flash-butt-welding-vadodara" },
  openGraph: {
    title: "flash butt welding in Vadodara | VadodaraExperts",
    description: "Professional flash butt welding services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-welding-services/flash-butt-welding-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="flash-butt-welding-vadodara" />;
}
