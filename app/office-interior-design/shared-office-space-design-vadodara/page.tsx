import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("office-interior-design")!;

export const metadata: Metadata = {
  title: "shared office space design in Vadodara | Office Interior Design | VadodaraExperts",
  description: "Professional shared office space design services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/office-interior-design/shared-office-space-design-vadodara" },
  openGraph: {
    title: "shared office space design in Vadodara | VadodaraExperts",
    description: "Professional shared office space design services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/office-interior-design/shared-office-space-design-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="shared-office-space-design-vadodara" />;
}
