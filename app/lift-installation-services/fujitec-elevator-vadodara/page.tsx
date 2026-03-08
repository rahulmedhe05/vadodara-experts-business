import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("lift-installation-services")!;

export const metadata: Metadata = {
  title: "Fujitec elevator in Vadodara | Lift Installation Services | VadodaraExperts",
  description: "Professional fujitec elevator services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/lift-installation-services/fujitec-elevator-vadodara" },
  openGraph: {
    title: "Fujitec elevator in Vadodara | VadodaraExperts",
    description: "Professional fujitec elevator services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/lift-installation-services/fujitec-elevator-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fujitec-elevator-vadodara" />;
}
