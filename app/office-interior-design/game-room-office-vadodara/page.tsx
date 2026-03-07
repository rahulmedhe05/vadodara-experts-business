import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("office-interior-design")!;

export const metadata: Metadata = {
  title: "game room office in Vadodara | Office Interior Design | VadodaraExperts",
  description: "Professional game room office services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/office-interior-design/game-room-office-vadodara" },
  openGraph: {
    title: "game room office in Vadodara | VadodaraExperts",
    description: "Professional game room office services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/office-interior-design/game-room-office-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="game-room-office-vadodara" />;
}
