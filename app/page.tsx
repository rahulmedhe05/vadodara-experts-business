import { Metadata } from "next";
import HomePage from "@/components/HomePage";

export const metadata: Metadata = {
  title: "VadodaraExperts — Premium Professional Services in Vadodara",
  description:
    "VadodaraExperts delivers professional services across 200+ categories in Vadodara. From home services to industrial solutions — quality work, expert teams, guaranteed satisfaction.",
  alternates: { canonical: "https://vadodaraexperts.com" },
  openGraph: {
    title: "VadodaraExperts — Premium Professional Services in Vadodara",
    description:
      "Professional services across 200+ categories in Vadodara. Quality work, expert teams, guaranteed satisfaction.",
    url: "https://vadodaraexperts.com",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <HomePage />;
}
