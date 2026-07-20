"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error";

export function BetaSignupForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

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
          Thanks for joining the Homework Buddy beta. We&apos;ll send a Google Play testing invite to
          your email soon. Please install the app and open it at least once so your tester activity
          counts.
        </p>
        {site.playBetaJoinUrl ? (
          <a
            href={site.playBetaJoinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-full bg-[#7B5CD6] px-6 py-3 text-sm font-extrabold text-white"
          >
            Open Play beta invite
          </a>
        ) : null}
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
      <p className="hidden">
        <label>
          Don&apos;t fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <label className="block text-sm font-extrabold text-[#24212C]">
        Name <span className="font-semibold text-[#7D7788]">(optional)</span>
        <input
          type="text"
          name="name"
          autoComplete="name"
          className="mt-2 w-full rounded-2xl border border-[#ebe4f7] bg-white px-4 py-3 text-base font-semibold text-[#24212C] outline-none focus:border-[#7B5CD6]"
        />
      </label>

      <label className="mt-4 block text-sm font-extrabold text-[#24212C]">
        Email
        <input
          type="email"
          name="email"
          required
          autoComplete="email"
          className="mt-2 w-full rounded-2xl border border-[#ebe4f7] bg-white px-4 py-3 text-base font-semibold text-[#24212C] outline-none focus:border-[#7B5CD6]"
        />
      </label>

      <label className="mt-4 flex items-start gap-3 text-sm font-semibold text-[#3d3848]">
        <input
          type="checkbox"
          name="android"
          value="yes"
          required
          className="mt-1 h-4 w-4 accent-[#7B5CD6]"
        />
        <span>I have an Android phone or tablet and want to try Homework Buddy as a beta tester.</span>
      </label>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 w-full rounded-full bg-[#7B5CD6] px-6 py-3 text-sm font-extrabold text-white disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Submitting…" : "Join the beta"}
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
        We only use your email to send a Play testing invite and related beta updates. See our{" "}
        <a href="/privacy" className="text-[#7B5CD6]">
          Privacy Policy
        </a>
        .
      </p>
    </form>
  );
}
