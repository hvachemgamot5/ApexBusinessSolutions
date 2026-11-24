"use client";

import type { FormEvent } from "react";

export default function ContactEnquiryForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const businessName = String(formData.get("businessName") || "").trim();
    const country = String(formData.get("country") || "").trim();
    const service = String(formData.get("service") || "").trim();
    const volume = String(formData.get("volume") || "").trim();
    const email = String(formData.get("email") || "").trim();

    const body = [
      "Hello Apex Business Solutions,",
      "",
      "I would like to enquire about bookkeeping support.",
      "",
      `Business name: ${businessName}`,
      `Country: ${country}`,
      `Service required: ${service}`,
      `Approximate monthly transactions: ${volume}`,
      `My email address: ${email}`,
      "",
      "Please contact me to discuss the next steps.",
    ].join("\n");

    const params = new URLSearchParams({
      view: "cm",
      fs: "1",
      to: "hvachemgamot5@gmail.com",
      su: "New Bookkeeping Enquiry - Apex Business Solutions",
      body,
    });

    window.location.assign(`https://mail.google.com/mail/?${params.toString()}`);
  }

  const fieldClass =
    "mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100";

  return (
    <form
      id="enquiry-form"
      onSubmit={handleSubmit}
      className="mt-10 rounded-3xl border border-white/10 bg-white p-6 text-slate-900 shadow-xl sm:p-8"
    >
      <div className="mb-7">
        <p className="text-sm font-bold uppercase tracking-[.18em] text-blue-700">
          Bookkeeping enquiry
        </p>
        <h3 className="mt-2 text-2xl font-black sm:text-3xl">
          Tell us about your business
        </h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Complete these details. We’ll prepare an enquiry email for you to review and send using Gmail.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-semibold text-slate-700">
          Business name
          <input
            className={fieldClass}
            type="text"
            name="businessName"
            autoComplete="organization"
            placeholder="Your business name"
            required
            maxLength={100}
          />
        </label>

        <label className="block text-sm font-semibold text-slate-700">
          Country
          <input
            className={fieldClass}
            type="text"
            name="country"
            autoComplete="country-name"
            placeholder="e.g. India, United States"
            required
            maxLength={80}
          />
        </label>

        <label className="block text-sm font-semibold text-slate-700">
          Which service do you need?
          <select className={fieldClass} name="service" defaultValue="" required>
            <option value="" disabled>Select a service</option>
            <option>Monthly bookkeeping</option>
            <option>QuickBooks Online bookkeeping</option>
            <option>Xero bookkeeping</option>
            <option>Bank and credit-card reconciliation</option>
            <option>Accounts payable / receivable</option>
            <option>Cleanup and catch-up bookkeeping</option>
            <option>Financial reporting</option>
            <option>Business analysis</option>
            <option>Not sure — please advise</option>
          </select>
        </label>

        <label className="block text-sm font-semibold text-slate-700">
          Approximate monthly transaction volume
          <select className={fieldClass} name="volume" defaultValue="" required>
            <option value="" disabled>Select a range</option>
            <option>Fewer than 50</option>
            <option>50–100</option>
            <option>101–200</option>
            <option>201–500</option>
            <option>More than 500</option>
            <option>Not sure</option>
          </select>
        </label>

        <label className="block text-sm font-semibold text-slate-700 sm:col-span-2">
          Your email address
          <input
            className={fieldClass}
            type="email"
            name="email"
            autoComplete="email"
            placeholder="you@example.com"
            required
            maxLength={254}
          />
        </label>
      </div>

      <label className="mt-6 flex items-start gap-3 text-sm leading-6 text-slate-600">
        <input
          type="checkbox"
          name="privacyAcknowledgement"
          required
          className="mt-1 h-4 w-4 shrink-0 accent-blue-700"
        />
        <span>
          I have read the{" "}
          <a
            href="/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-800"
          >
            Privacy Policy
          </a>{" "}
          and understand how my enquiry information will be used.
        </span>
      </label>

      <button
        type="submit"
        className="mt-7 w-full rounded-xl bg-blue-700 px-6 py-4 font-bold text-white shadow-lg shadow-blue-950/10 transition hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-200 sm:w-auto"
      >
        Continue to Gmail
      </button>
      <p className="mt-4 text-xs leading-5 text-slate-500">
        Your answers are used to prepare an email on your device. Nothing is sent automatically. Please do not include passwords, bank login details, or sensitive financial documents.
      </p>
    </form>
  );
}
