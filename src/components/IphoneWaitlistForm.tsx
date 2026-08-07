"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error";

/** iPhone interest waitlist (Netlify Forms). Android users go to Play Store. */
export function IphoneWaitlistForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage("");
    setStatus("submitting");

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.set("platforms", "iphone");
    formData.set("iphone", "yes");

    try {
      const body = new URLSearchParams();
      for (const [key, value] of formData.entries()) {
        body.append(key, String(value));
      }

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again or email us directly.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-3xl bg-[#F0EBFF] px-6 py-8 text-left md:px-8">
        <h2 className="text-xl font-black text-[#24212C]">You&apos;re on the list</h2>
        <p className="mt-3 text-sm font-semibold leading-relaxed text-[#7D7788] md:text-base">
          Thanks for your interest. We&apos;ll email you when Homework Buddy is ready on iPhone.
        </p>
      </div>
    );
  }

  return (
    <form
      name="beta-testers"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={onSubmit}
      className="rounded-3xl bg-[#F0EBFF] px-6 py-8 text-left md:px-8"
    >
      <input type="hidden" name="form-name" value="beta-testers" />
      <input type="hidden" name="iphone" value="yes" />
      <p className="hidden">
        <label>
          Don&apos;t fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <p className="text-sm font-extrabold uppercase tracking-wide text-[#7B5CD6]">
        iPhone waitlist
      </p>
      <h2 className="mt-2 text-xl font-black text-[#24212C]">Want Homework Buddy on iPhone?</h2>
      <p className="mt-2 text-sm font-semibold leading-relaxed text-[#7D7788]">
        Leave your email and we&apos;ll notify you when iOS early access opens. Android is available now
        on Google Play.
      </p>

      <label className="mt-6 block text-sm font-extrabold text-[#24212C]">
        Email
        <input
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder="you@email.com"
          className="mt-2 w-full rounded-2xl border border-[#ebe4f7] bg-white px-4 py-3 text-base font-semibold text-[#24212C] outline-none focus:border-[#7B5CD6]"
        />
      </label>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 w-full rounded-full bg-[#7B5CD6] px-6 py-3 text-sm font-extrabold text-white disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Submitting…" : "Notify me for iPhone"}
      </button>

      {status === "error" ? (
        <p className="mt-4 text-sm font-semibold text-[#E85D75]">
          {errorMessage}{" "}
          <a className="underline" href={`mailto:${site.supportEmail}`}>
            {site.supportEmail}
          </a>
        </p>
      ) : null}

      <p className="mt-4 text-xs font-semibold leading-relaxed text-[#7D7788]">
        We only use your email for iPhone updates and related product news. See our{" "}
        <a href="/privacy" className="text-[#7B5CD6]">
          Privacy Policy
        </a>
        .
      </p>
    </form>
  );
}

/** @deprecated Use IphoneWaitlistForm — kept for any old imports */
export const BetaSignupForm = IphoneWaitlistForm;
