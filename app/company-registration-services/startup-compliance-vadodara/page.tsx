import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("company-registration-services")!;

export const metadata: Metadata = {
  title: "Startup compliance in Vadodara | Company Registration Services | VadodaraExperts",
  description: "Professional startup compliance services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/company-registration-services/startup-compliance-vadodara" },
  openGraph: {
    title: "Startup compliance in Vadodara | VadodaraExperts",
    description: "Professional startup compliance services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/company-registration-services/startup-compliance-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="startup-compliance-vadodara" />;
}
