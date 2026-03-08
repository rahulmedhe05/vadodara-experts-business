import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("land-development-consultancy")!;

export const metadata: Metadata = {
  title: "transfer of development rights in Vadodara | Land Development Consultancy | VadodaraExperts",
  description: "Professional transfer of development rights services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/land-development-consultancy/transfer-of-development-rights-vadodara" },
  openGraph: {
    title: "transfer of development rights in Vadodara | VadodaraExperts",
    description: "Professional transfer of development rights services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/land-development-consultancy/transfer-of-development-rights-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="transfer-of-development-rights-vadodara" />;
}
