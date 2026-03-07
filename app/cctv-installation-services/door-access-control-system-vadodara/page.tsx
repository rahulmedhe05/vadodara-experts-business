import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("cctv-installation-services")!;

export const metadata: Metadata = {
  title: "Door access control system in Vadodara | CCTV Installation Services | VadodaraExperts",
  description: "Professional door access control system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/cctv-installation-services/door-access-control-system-vadodara" },
  openGraph: {
    title: "Door access control system in Vadodara | VadodaraExperts",
    description: "Professional door access control system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/cctv-installation-services/door-access-control-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="door-access-control-system-vadodara" />;
}
