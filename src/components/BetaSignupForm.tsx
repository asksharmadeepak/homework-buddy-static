"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error";
type Platforms = { android: boolean; iphone: boolean };

export function BetaSignupForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [platforms, setPlatforms] = useState<Platforms>({ android: false, iphone: false });

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage("");

    if (!platforms.android && !platforms.iphone) {
      setStatus("error");
      setErrorMessage("Please choose Android early access, iPhone updates, or both.");
      return;
    }

    setStatus("submitting");

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.set("platforms", [
      platforms.android ? "android" : null,
      platforms.iphone ? "iphone" : null,
    ]
      .filter(Boolean)
      .join(","));

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
    const thanks = platforms.android
      ? platforms.iphone
        ? "Thanks for signing up. We'll email your Google Play invite soon, and notify you when iPhone early access is ready."
        : "Thanks for signing up. We'll email your Google Play invite soon so you can start creating printable worksheets."
      : "Thanks for your interest. We'll email you when Homework Buddy early access opens on iPhone.";

    return (
      <div className="rounded-3xl bg-[#F0EBFF] px-6 py-8 text-left md:px-8">
        <h2 className="text-xl font-black text-[#24212C]">You&apos;re in</h2>
        <p className="mt-3 text-sm font-semibold leading-relaxed text-[#7D7788] md:text-base">
          {thanks}
        </p>
        {platforms.android && site.playBetaJoinUrl ? (
          <a
            href={site.playBetaJoinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-full bg-[#7B5CD6] px-6 py-3 text-sm font-extrabold text-white"
          >
            Open Play invite
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

      <p className="mt-5 text-sm font-extrabold text-[#24212C]">I&apos;m interested in</p>
      <div className="mt-3 space-y-3">
        <label className="flex items-start gap-3 text-sm font-semibold text-[#3d3848]">
          <input
            type="checkbox"
            name="android"
            value="yes"
            checked={platforms.android}
            onChange={(e) => setPlatforms((p) => ({ ...p, android: e.target.checked }))}
            className="mt-1 h-4 w-4 accent-[#7B5CD6]"
          />
          <span>Android early access — get a Play invite now</span>
        </label>
        <label className="flex items-start gap-3 text-sm font-semibold text-[#3d3848]">
          <input
            type="checkbox"
            name="iphone"
            value="yes"
            checked={platforms.iphone}
            onChange={(e) => setPlatforms((p) => ({ ...p, iphone: e.target.checked }))}
            className="mt-1 h-4 w-4 accent-[#7B5CD6]"
          />
          <span>iPhone — notify me when early access is ready</span>
        </label>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 w-full rounded-full bg-[#7B5CD6] px-6 py-3 text-sm font-extrabold text-white disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Submitting…" : "Get early access"}
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
        We only use your email for early access invites and product updates (Android and/or iPhone).
        See our{" "}
        <a href="/privacy" className="text-[#7B5CD6]">
          Privacy Policy
        </a>
        .
      </p>
    </form>
  );
}
