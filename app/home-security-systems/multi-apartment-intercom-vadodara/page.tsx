import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-security-systems")!;

export const metadata: Metadata = {
  title: "Multi apartment intercom in Vadodara | Home Security Systems | VadodaraExperts",
  description: "Professional multi apartment intercom services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-security-systems/multi-apartment-intercom-vadodara" },
  openGraph: {
    title: "Multi apartment intercom in Vadodara | VadodaraExperts",
    description: "Professional multi apartment intercom services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-security-systems/multi-apartment-intercom-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="multi-apartment-intercom-vadodara" />;
}
