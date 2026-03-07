import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("personal-training-services")!;

export const metadata: Metadata = {
  title: "Habit coaching in Vadodara | Personal Training Services | VadodaraExperts",
  description: "Professional habit coaching services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/personal-training-services/habit-coaching-vadodara" },
  openGraph: {
    title: "Habit coaching in Vadodara | VadodaraExperts",
    description: "Professional habit coaching services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/personal-training-services/habit-coaching-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="habit-coaching-vadodara" />;
}
