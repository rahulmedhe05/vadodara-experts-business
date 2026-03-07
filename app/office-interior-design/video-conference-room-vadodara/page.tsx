import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("office-interior-design")!;

export const metadata: Metadata = {
  title: "video conference room in Vadodara | Office Interior Design | VadodaraExperts",
  description: "Professional video conference room services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/office-interior-design/video-conference-room-vadodara" },
  openGraph: {
    title: "video conference room in Vadodara | VadodaraExperts",
    description: "Professional video conference room services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/office-interior-design/video-conference-room-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="video-conference-room-vadodara" />;
}
