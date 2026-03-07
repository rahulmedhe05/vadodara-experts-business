import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("yoga-classes")!;

export const metadata: Metadata = {
  title: "Morning yoga classes in Vadodara | Yoga Classes | VadodaraExperts",
  description: "Professional morning yoga classes services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/yoga-classes/morning-yoga-classes-vadodara" },
  openGraph: {
    title: "Morning yoga classes in Vadodara | VadodaraExperts",
    description: "Professional morning yoga classes services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/yoga-classes/morning-yoga-classes-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="morning-yoga-classes-vadodara" />;
}
