import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("eye-hospitals")!;

export const metadata: Metadata = {
  title: "School eye screening in Vadodara | Eye Hospitals | VadodaraExperts",
  description: "Professional school eye screening services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/eye-hospitals/school-eye-screening-vadodara" },
  openGraph: {
    title: "School eye screening in Vadodara | VadodaraExperts",
    description: "Professional school eye screening services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/eye-hospitals/school-eye-screening-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="school-eye-screening-vadodara" />;
}
