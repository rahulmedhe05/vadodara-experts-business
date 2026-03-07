import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-security-systems")!;

export const metadata: Metadata = {
  title: "Access control repair in Vadodara | Home Security Systems | VadodaraExperts",
  description: "Professional access control repair services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-security-systems/access-control-repair-vadodara" },
  openGraph: {
    title: "Access control repair in Vadodara | VadodaraExperts",
    description: "Professional access control repair services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-security-systems/access-control-repair-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="access-control-repair-vadodara" />;
}
