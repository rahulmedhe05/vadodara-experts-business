import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("videography-services")!;

export const metadata: Metadata = {
  title: "Green screen editing in Vadodara | Videography Services | VadodaraExperts",
  description: "Professional green screen editing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/videography-services/green-screen-editing-vadodara" },
  openGraph: {
    title: "Green screen editing in Vadodara | VadodaraExperts",
    description: "Professional green screen editing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/videography-services/green-screen-editing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="green-screen-editing-vadodara" />;
}
