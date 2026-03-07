import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("modular-kitchen-services")!;

export const metadata: Metadata = {
  title: "Undersink organizer in Vadodara | Modular Kitchen Services | VadodaraExperts",
  description: "Professional undersink organizer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/modular-kitchen-services/undersink-organizer-vadodara" },
  openGraph: {
    title: "Undersink organizer in Vadodara | VadodaraExperts",
    description: "Professional undersink organizer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/modular-kitchen-services/undersink-organizer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="undersink-organizer-vadodara" />;
}
