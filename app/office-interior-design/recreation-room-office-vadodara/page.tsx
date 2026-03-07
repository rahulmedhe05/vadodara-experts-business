import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("office-interior-design")!;

export const metadata: Metadata = {
  title: "recreation room office in Vadodara | Office Interior Design | VadodaraExperts",
  description: "Professional recreation room office services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/office-interior-design/recreation-room-office-vadodara" },
  openGraph: {
    title: "recreation room office in Vadodara | VadodaraExperts",
    description: "Professional recreation room office services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/office-interior-design/recreation-room-office-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="recreation-room-office-vadodara" />;
}
