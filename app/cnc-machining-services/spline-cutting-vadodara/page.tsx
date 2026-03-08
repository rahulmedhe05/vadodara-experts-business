import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("cnc-machining-services")!;

export const metadata: Metadata = {
  title: "spline cutting in Vadodara | CNC Machining Services | VadodaraExperts",
  description: "Professional spline cutting services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/cnc-machining-services/spline-cutting-vadodara" },
  openGraph: {
    title: "spline cutting in Vadodara | VadodaraExperts",
    description: "Professional spline cutting services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/cnc-machining-services/spline-cutting-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="spline-cutting-vadodara" />;
}
