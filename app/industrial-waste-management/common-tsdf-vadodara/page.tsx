import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-waste-management")!;

export const metadata: Metadata = {
  title: "Common TSDF in Vadodara | Industrial Waste Management | VadodaraExperts",
  description: "Professional common tsdf services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-waste-management/common-tsdf-vadodara" },
  openGraph: {
    title: "Common TSDF in Vadodara | VadodaraExperts",
    description: "Professional common tsdf services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-waste-management/common-tsdf-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="common-tsdf-vadodara" />;
}
