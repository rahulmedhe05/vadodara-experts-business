import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-interior-design")!;

export const metadata: Metadata = {
  title: "industrial admin office in Vadodara | Industrial Interior Design | VadodaraExperts",
  description: "Professional industrial admin office services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-interior-design/industrial-admin-office-vadodara" },
  openGraph: {
    title: "industrial admin office in Vadodara | VadodaraExperts",
    description: "Professional industrial admin office services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-interior-design/industrial-admin-office-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="industrial-admin-office-vadodara" />;
}
