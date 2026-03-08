import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("personal-training-services")!;

export const metadata: Metadata = {
  title: "Speed training coach in Vadodara | Personal Training Services | VadodaraExperts",
  description: "Professional speed training coach services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/personal-training-services/speed-training-coach-vadodara" },
  openGraph: {
    title: "Speed training coach in Vadodara | VadodaraExperts",
    description: "Professional speed training coach services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/personal-training-services/speed-training-coach-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="speed-training-coach-vadodara" />;
}
