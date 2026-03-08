import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("videography-services")!;

export const metadata: Metadata = {
  title: "Aerial filming in Vadodara | Videography Services | VadodaraExperts",
  description: "Professional aerial filming services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/videography-services/aerial-filming-vadodara" },
  openGraph: {
    title: "Aerial filming in Vadodara | VadodaraExperts",
    description: "Professional aerial filming services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/videography-services/aerial-filming-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="aerial-filming-vadodara" />;
}
