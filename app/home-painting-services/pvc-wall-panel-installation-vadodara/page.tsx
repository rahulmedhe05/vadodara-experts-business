import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-painting-services")!;

export const metadata: Metadata = {
  title: "PVC wall panel installation in Vadodara | Home Painting Services | VadodaraExperts",
  description: "Professional pvc wall panel installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-painting-services/pvc-wall-panel-installation-vadodara" },
  openGraph: {
    title: "PVC wall panel installation in Vadodara | VadodaraExperts",
    description: "Professional pvc wall panel installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-painting-services/pvc-wall-panel-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pvc-wall-panel-installation-vadodara" />;
}
