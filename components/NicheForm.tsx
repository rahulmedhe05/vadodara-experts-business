"use client";

import { useState } from "react";
import { getFormFields, getFormTitle, getFormSubtitle, FormField } from "@/lib/forms";

interface NicheFormProps {
  nicheSlug: string;
  nicheName: string;
  category: string;
}

export default function NicheForm({ nicheSlug, nicheName, category }: NicheFormProps) {
  const fields = getFormFields(nicheSlug, category);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-300 rounded-xl p-8 text-center">
        <div className="text-4xl mb-3">&#10003;</div>
        <h3 className="text-xl font-bold text-green-800 mb-2">Thank You!</h3>
        <p className="text-green-700">
          Your request for {nicheName} in Vadodara has been submitted successfully.
          Our team will connect you with verified experts within minutes.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-200 rounded-xl p-6 md:p-8">
      <h3 className="text-xl font-bold text-blue-900 mb-2">{getFormTitle(nicheName)}</h3>
      <p className="text-gray-600 text-sm mb-6">{getFormSubtitle(nicheName)}</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        {fields.map((field: FormField) => (
          <div key={field.name}>
            <label htmlFor={`form-${field.name}`} className="block text-sm font-medium text-gray-700 mb-1">
              {field.label} {field.required && <span className="text-red-500">*</span>}
            </label>
            {field.type === "select" ? (
              <select
                id={`form-${field.name}`}
                name={field.name}
                required={field.required}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900"
              >
                <option value="">Select {field.label}</option>
                {field.options?.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            ) : field.type === "textarea" ? (
              <textarea
                id={`form-${field.name}`}
                name={field.name}
                required={field.required}
                placeholder={field.placeholder}
                rows={4}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
              />
            ) : (
              <input
                id={`form-${field.name}`}
                type={field.type}
                name={field.name}
                required={field.required}
                placeholder={field.placeholder}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
              />
            )}
          </div>
        ))}
        <button
          type="submit"
          className="w-full py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition shadow-lg"
        >
          Get Free Quotes Now
        </button>
        <p className="text-xs text-gray-500 text-center">
          By submitting, you agree to be contacted by verified service providers.
        </p>
      </form>
    </div>
  );
}
