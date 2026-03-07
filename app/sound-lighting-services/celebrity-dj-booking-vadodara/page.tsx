import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("sound-lighting-services")!;

export const metadata: Metadata = {
  title: "Celebrity DJ booking in Vadodara | Sound & Lighting Services | VadodaraExperts",
  description: "Professional celebrity dj booking services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/sound-lighting-services/celebrity-dj-booking-vadodara" },
  openGraph: {
    title: "Celebrity DJ booking in Vadodara | VadodaraExperts",
    description: "Professional celebrity dj booking services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/sound-lighting-services/celebrity-dj-booking-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="celebrity-dj-booking-vadodara" />;
}
