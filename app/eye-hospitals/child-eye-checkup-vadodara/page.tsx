import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("eye-hospitals")!;

export const metadata: Metadata = {
  title: "Child eye checkup in Vadodara | Eye Hospitals | VadodaraExperts",
  description: "Professional child eye checkup services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/eye-hospitals/child-eye-checkup-vadodara" },
  openGraph: {
    title: "Child eye checkup in Vadodara | VadodaraExperts",
    description: "Professional child eye checkup services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/eye-hospitals/child-eye-checkup-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="child-eye-checkup-vadodara" />;
}
