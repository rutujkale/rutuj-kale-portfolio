import { useState, type FormEvent } from "react";
import { profile } from "../data/profile";
import { Button } from "./Button";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = `Portfolio message from ${name}`;
    const body = `${message}\n\n--\n${name}\n${email}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const inputClasses =
    "mt-2 w-full rounded border border-outline-variant bg-surface-container-lowest px-3 py-3 text-on-surface placeholder:text-on-surface-variant/40 transition-colors focus:border-primary focus:outline-none";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg border border-outline-variant bg-surface p-6 md:p-8"
    >
      <h2 className="font-sans text-2xl font-semibold tracking-tight text-on-surface">
        Send a Message
      </h2>
      <p className="mt-2 font-mono text-xs text-on-surface-variant">
        No backend is configured. Submitting opens your email client with the message pre-filled.
      </p>
      <div className="mt-8 space-y-6">
        <div>
          <label
            htmlFor="contact-name"
            className="font-mono text-xs tracking-[0.05em] text-on-surface-variant"
          >
            NAME
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className={inputClasses}
          />
        </div>
        <div>
          <label
            htmlFor="contact-email"
            className="font-mono text-xs tracking-[0.05em] text-on-surface-variant"
          >
            EMAIL
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className={inputClasses}
          />
        </div>
        <div>
          <label
            htmlFor="contact-message"
            className="font-mono text-xs tracking-[0.05em] text-on-surface-variant"
          >
            MESSAGE
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={6}
            placeholder="How can we work together?"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className={inputClasses}
          />
        </div>
      </div>
      <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
        <span className="font-mono text-xs text-on-surface-variant">RESPONSE: DIRECT EMAIL</span>
        <Button type="submit">Send Message</Button>
      </div>
    </form>
  );
}
