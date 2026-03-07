import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("videography-services")!;

export const metadata: Metadata = {
  title: "Birthday party videography in Vadodara | Videography Services | VadodaraExperts",
  description: "Professional birthday party videography services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/videography-services/birthday-party-videography-vadodara" },
  openGraph: {
    title: "Birthday party videography in Vadodara | VadodaraExperts",
    description: "Professional birthday party videography services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/videography-services/birthday-party-videography-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="birthday-party-videography-vadodara" />;
}
