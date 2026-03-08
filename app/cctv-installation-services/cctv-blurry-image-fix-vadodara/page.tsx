import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("cctv-installation-services")!;

export const metadata: Metadata = {
  title: "CCTV blurry image fix in Vadodara | CCTV Installation Services | VadodaraExperts",
  description: "Professional cctv blurry image fix services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/cctv-installation-services/cctv-blurry-image-fix-vadodara" },
  openGraph: {
    title: "CCTV blurry image fix in Vadodara | VadodaraExperts",
    description: "Professional cctv blurry image fix services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/cctv-installation-services/cctv-blurry-image-fix-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="cctv-blurry-image-fix-vadodara" />;
}
