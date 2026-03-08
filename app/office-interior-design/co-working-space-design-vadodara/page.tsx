import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("office-interior-design")!;

export const metadata: Metadata = {
  title: "co-working space design in Vadodara | Office Interior Design | VadodaraExperts",
  description: "Professional co-working space design services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/office-interior-design/co-working-space-design-vadodara" },
  openGraph: {
    title: "co-working space design in Vadodara | VadodaraExperts",
    description: "Professional co-working space design services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/office-interior-design/co-working-space-design-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="co-working-space-design-vadodara" />;
}
