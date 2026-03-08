import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("interior-design-services")!;

export const metadata: Metadata = {
  title: "Interior project management in Vadodara | Interior Design Services | VadodaraExperts",
  description: "Professional interior project management services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/interior-design-services/interior-project-management-vadodara" },
  openGraph: {
    title: "Interior project management in Vadodara | VadodaraExperts",
    description: "Professional interior project management services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/interior-design-services/interior-project-management-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="interior-project-management-vadodara" />;
}
