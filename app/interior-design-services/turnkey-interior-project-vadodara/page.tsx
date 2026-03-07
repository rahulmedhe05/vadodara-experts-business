import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("interior-design-services")!;

export const metadata: Metadata = {
  title: "Turnkey interior project in Vadodara | Interior Design Services | VadodaraExperts",
  description: "Professional turnkey interior project services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/interior-design-services/turnkey-interior-project-vadodara" },
  openGraph: {
    title: "Turnkey interior project in Vadodara | VadodaraExperts",
    description: "Professional turnkey interior project services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/interior-design-services/turnkey-interior-project-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="turnkey-interior-project-vadodara" />;
}
