import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("eye-hospitals")!;

export const metadata: Metadata = {
  title: "Cataract operation in Vadodara | Eye Hospitals | VadodaraExperts",
  description: "Professional cataract operation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/eye-hospitals/cataract-operation-vadodara" },
  openGraph: {
    title: "Cataract operation in Vadodara | VadodaraExperts",
    description: "Professional cataract operation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/eye-hospitals/cataract-operation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="cataract-operation-vadodara" />;
}
