import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("eye-hospitals")!;

export const metadata: Metadata = {
  title: "Trabeculectomy in Vadodara | Eye Hospitals | VadodaraExperts",
  description: "Professional trabeculectomy services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/eye-hospitals/trabeculectomy-vadodara" },
  openGraph: {
    title: "Trabeculectomy in Vadodara | VadodaraExperts",
    description: "Professional trabeculectomy services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/eye-hospitals/trabeculectomy-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="trabeculectomy-vadodara" />;
}
