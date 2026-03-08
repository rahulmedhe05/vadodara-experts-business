import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("generator-installation-services")!;

export const metadata: Metadata = {
  title: "Ashok Leyland generator service in Vadodara | Generator Installation Services | VadodaraExperts",
  description: "Professional ashok leyland generator service services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/generator-installation-services/ashok-leyland-generator-service-vadodara" },
  openGraph: {
    title: "Ashok Leyland generator service in Vadodara | VadodaraExperts",
    description: "Professional ashok leyland generator service services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/generator-installation-services/ashok-leyland-generator-service-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ashok-leyland-generator-service-vadodara" />;
}
