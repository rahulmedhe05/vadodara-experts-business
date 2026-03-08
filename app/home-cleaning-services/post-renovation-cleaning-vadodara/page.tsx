import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-cleaning-services")!;

export const metadata: Metadata = {
  title: "Post renovation cleaning in Vadodara | Home Cleaning Services | VadodaraExperts",
  description: "Professional post renovation cleaning services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-cleaning-services/post-renovation-cleaning-vadodara" },
  openGraph: {
    title: "Post renovation cleaning in Vadodara | VadodaraExperts",
    description: "Professional post renovation cleaning services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-cleaning-services/post-renovation-cleaning-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="post-renovation-cleaning-vadodara" />;
}
