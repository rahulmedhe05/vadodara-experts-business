import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("yoga-classes")!;

export const metadata: Metadata = {
  title: "Home yoga classes in Vadodara | Yoga Classes | VadodaraExperts",
  description: "Professional home yoga classes services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/yoga-classes/home-yoga-classes-vadodara" },
  openGraph: {
    title: "Home yoga classes in Vadodara | VadodaraExperts",
    description: "Professional home yoga classes services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/yoga-classes/home-yoga-classes-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="home-yoga-classes-vadodara" />;
}
