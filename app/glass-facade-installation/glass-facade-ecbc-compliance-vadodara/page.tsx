import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("glass-facade-installation")!;

export const metadata: Metadata = {
  title: "glass facade ECBC compliance in Vadodara | Glass Facade Installation | VadodaraExperts",
  description: "Professional glass facade ecbc compliance services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/glass-facade-installation/glass-facade-ecbc-compliance-vadodara" },
  openGraph: {
    title: "glass facade ECBC compliance in Vadodara | VadodaraExperts",
    description: "Professional glass facade ecbc compliance services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/glass-facade-installation/glass-facade-ecbc-compliance-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="glass-facade-ecbc-compliance-vadodara" />;
}
