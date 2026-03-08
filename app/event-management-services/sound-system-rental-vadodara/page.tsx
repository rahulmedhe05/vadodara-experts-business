import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("event-management-services")!;

export const metadata: Metadata = {
  title: "Sound system rental in Vadodara | Event Management Services | VadodaraExperts",
  description: "Professional sound system rental services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/event-management-services/sound-system-rental-vadodara" },
  openGraph: {
    title: "Sound system rental in Vadodara | VadodaraExperts",
    description: "Professional sound system rental services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/event-management-services/sound-system-rental-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="sound-system-rental-vadodara" />;
}
