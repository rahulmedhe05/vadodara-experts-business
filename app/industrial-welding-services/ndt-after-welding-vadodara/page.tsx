import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-welding-services")!;

export const metadata: Metadata = {
  title: "NDT after welding in Vadodara | Industrial Welding Services | VadodaraExperts",
  description: "Professional ndt after welding services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-welding-services/ndt-after-welding-vadodara" },
  openGraph: {
    title: "NDT after welding in Vadodara | VadodaraExperts",
    description: "Professional ndt after welding services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-welding-services/ndt-after-welding-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ndt-after-welding-vadodara" />;
}
