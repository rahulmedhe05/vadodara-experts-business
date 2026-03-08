import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("cctv-installation-services")!;

export const metadata: Metadata = {
  title: "Cat6 cable installation in Vadodara | CCTV Installation Services | VadodaraExperts",
  description: "Professional cat6 cable installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/cctv-installation-services/cat6-cable-installation-vadodara" },
  openGraph: {
    title: "Cat6 cable installation in Vadodara | VadodaraExperts",
    description: "Professional cat6 cable installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/cctv-installation-services/cat6-cable-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="cat6-cable-installation-vadodara" />;
}
