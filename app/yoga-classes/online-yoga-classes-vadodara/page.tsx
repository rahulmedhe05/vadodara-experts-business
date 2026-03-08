import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("yoga-classes")!;

export const metadata: Metadata = {
  title: "Online yoga classes in Vadodara | Yoga Classes | VadodaraExperts",
  description: "Professional online yoga classes services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/yoga-classes/online-yoga-classes-vadodara" },
  openGraph: {
    title: "Online yoga classes in Vadodara | VadodaraExperts",
    description: "Professional online yoga classes services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/yoga-classes/online-yoga-classes-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="online-yoga-classes-vadodara" />;
}
