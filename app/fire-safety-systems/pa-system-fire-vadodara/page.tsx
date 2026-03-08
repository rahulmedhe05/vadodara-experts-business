import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("fire-safety-systems")!;

export const metadata: Metadata = {
  title: "PA system fire in Vadodara | Fire Safety Systems | VadodaraExperts",
  description: "Professional pa system fire services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/fire-safety-systems/pa-system-fire-vadodara" },
  openGraph: {
    title: "PA system fire in Vadodara | VadodaraExperts",
    description: "Professional pa system fire services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/fire-safety-systems/pa-system-fire-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pa-system-fire-vadodara" />;
}
