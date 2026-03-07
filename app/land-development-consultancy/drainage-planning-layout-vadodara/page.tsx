import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("land-development-consultancy")!;

export const metadata: Metadata = {
  title: "drainage planning layout in Vadodara | Land Development Consultancy | VadodaraExperts",
  description: "Professional drainage planning layout services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/land-development-consultancy/drainage-planning-layout-vadodara" },
  openGraph: {
    title: "drainage planning layout in Vadodara | VadodaraExperts",
    description: "Professional drainage planning layout services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/land-development-consultancy/drainage-planning-layout-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="drainage-planning-layout-vadodara" />;
}
