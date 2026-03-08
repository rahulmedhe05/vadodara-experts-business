import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("sound-lighting-services")!;

export const metadata: Metadata = {
  title: "School auditorium sound in Vadodara | Sound & Lighting Services | VadodaraExperts",
  description: "Professional school auditorium sound services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/sound-lighting-services/school-auditorium-sound-vadodara" },
  openGraph: {
    title: "School auditorium sound in Vadodara | VadodaraExperts",
    description: "Professional school auditorium sound services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/sound-lighting-services/school-auditorium-sound-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="school-auditorium-sound-vadodara" />;
}
