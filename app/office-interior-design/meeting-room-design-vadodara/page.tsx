import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("office-interior-design")!;

export const metadata: Metadata = {
  title: "meeting room design in Vadodara | Office Interior Design | VadodaraExperts",
  description: "Professional meeting room design services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/office-interior-design/meeting-room-design-vadodara" },
  openGraph: {
    title: "meeting room design in Vadodara | VadodaraExperts",
    description: "Professional meeting room design services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/office-interior-design/meeting-room-design-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="meeting-room-design-vadodara" />;
}
