import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("personal-loan-consultancy")!;

export const metadata: Metadata = {
  title: "YES Bank personal loan in Vadodara | Personal Loan Consultancy | VadodaraExperts",
  description: "Professional yes bank personal loan services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/personal-loan-consultancy/yes-bank-personal-loan-vadodara" },
  openGraph: {
    title: "YES Bank personal loan in Vadodara | VadodaraExperts",
    description: "Professional yes bank personal loan services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/personal-loan-consultancy/yes-bank-personal-loan-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="yes-bank-personal-loan-vadodara" />;
}
