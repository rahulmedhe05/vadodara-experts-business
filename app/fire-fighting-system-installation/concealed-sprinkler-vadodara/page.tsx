import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("fire-fighting-system-installation")!;

export const metadata: Metadata = {
  title: "concealed sprinkler in Vadodara | Fire Fighting System Installation | VadodaraExperts",
  description: "Professional concealed sprinkler services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/fire-fighting-system-installation/concealed-sprinkler-vadodara" },
  openGraph: {
    title: "concealed sprinkler in Vadodara | VadodaraExperts",
    description: "Professional concealed sprinkler services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/fire-fighting-system-installation/concealed-sprinkler-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="concealed-sprinkler-vadodara" />;
}
