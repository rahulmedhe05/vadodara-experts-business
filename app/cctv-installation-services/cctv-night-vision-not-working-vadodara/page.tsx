import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("cctv-installation-services")!;

export const metadata: Metadata = {
  title: "CCTV night vision not working in Vadodara | CCTV Installation Services | VadodaraExperts",
  description: "Professional cctv night vision not working services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/cctv-installation-services/cctv-night-vision-not-working-vadodara" },
  openGraph: {
    title: "CCTV night vision not working in Vadodara | VadodaraExperts",
    description: "Professional cctv night vision not working services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/cctv-installation-services/cctv-night-vision-not-working-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="cctv-night-vision-not-working-vadodara" />;
}
