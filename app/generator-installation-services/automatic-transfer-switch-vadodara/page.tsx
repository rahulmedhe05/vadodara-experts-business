import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("generator-installation-services")!;

export const metadata: Metadata = {
  title: "Automatic transfer switch in Vadodara | Generator Installation Services | VadodaraExperts",
  description: "Professional automatic transfer switch services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/generator-installation-services/automatic-transfer-switch-vadodara" },
  openGraph: {
    title: "Automatic transfer switch in Vadodara | VadodaraExperts",
    description: "Professional automatic transfer switch services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/generator-installation-services/automatic-transfer-switch-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="automatic-transfer-switch-vadodara" />;
}
