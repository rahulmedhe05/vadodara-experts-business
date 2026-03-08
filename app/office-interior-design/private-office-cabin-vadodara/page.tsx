import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("office-interior-design")!;

export const metadata: Metadata = {
  title: "private office cabin in Vadodara | Office Interior Design | VadodaraExperts",
  description: "Professional private office cabin services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/office-interior-design/private-office-cabin-vadodara" },
  openGraph: {
    title: "private office cabin in Vadodara | VadodaraExperts",
    description: "Professional private office cabin services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/office-interior-design/private-office-cabin-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="private-office-cabin-vadodara" />;
}
