import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("eye-hospitals")!;

export const metadata: Metadata = {
  title: "Eye surgeon in Vadodara | Eye Hospitals | VadodaraExperts",
  description: "Professional eye surgeon services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/eye-hospitals/eye-surgeon-vadodara" },
  openGraph: {
    title: "Eye surgeon in Vadodara | VadodaraExperts",
    description: "Professional eye surgeon services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/eye-hospitals/eye-surgeon-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="eye-surgeon-vadodara" />;
}
