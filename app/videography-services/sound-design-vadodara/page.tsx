import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("videography-services")!;

export const metadata: Metadata = {
  title: "Sound design in Vadodara | Videography Services | VadodaraExperts",
  description: "Professional sound design services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/videography-services/sound-design-vadodara" },
  openGraph: {
    title: "Sound design in Vadodara | VadodaraExperts",
    description: "Professional sound design services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/videography-services/sound-design-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="sound-design-vadodara" />;
}
