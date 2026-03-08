import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("construction-safety-consultancy")!;

export const metadata: Metadata = {
  title: "lockout tagout in Vadodara | Construction Safety Consultancy | VadodaraExperts",
  description: "Professional lockout tagout services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/construction-safety-consultancy/lockout-tagout-vadodara" },
  openGraph: {
    title: "lockout tagout in Vadodara | VadodaraExperts",
    description: "Professional lockout tagout services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/construction-safety-consultancy/lockout-tagout-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="lockout-tagout-vadodara" />;
}
