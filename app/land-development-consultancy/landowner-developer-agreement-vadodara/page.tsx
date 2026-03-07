import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("land-development-consultancy")!;

export const metadata: Metadata = {
  title: "landowner developer agreement in Vadodara | Land Development Consultancy | VadodaraExperts",
  description: "Professional landowner developer agreement services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/land-development-consultancy/landowner-developer-agreement-vadodara" },
  openGraph: {
    title: "landowner developer agreement in Vadodara | VadodaraExperts",
    description: "Professional landowner developer agreement services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/land-development-consultancy/landowner-developer-agreement-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="landowner-developer-agreement-vadodara" />;
}
