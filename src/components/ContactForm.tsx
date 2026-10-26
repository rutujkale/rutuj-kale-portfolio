import { useState, type FormEvent } from "react";
import { profile } from "../data/profile";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [opened, setOpened] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = `Portfolio message from ${name}`;
    const body = `${message}\n\n--\n${name}\n${email}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setOpened(true);
  };

  return (
    <form onSubmit={handleSubmit} className="border-t border-line pt-6">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <h2 className="font-display text-2xl leading-tight tracking-[-0.03em] text-ink">
          Transmit a message
        </h2>
        <span className="label">FORM / 01</span>
      </div>
      <p className="mt-2 max-w-md text-s leading-relaxed text-muted">
        No backend is connected. Submitting opens your email client with the message prefilled and
        addressed to Rutuj.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="label">
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
            className="field"
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="label">
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
            className="field"
          />
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor="contact-message" className="label">
          MESSAGE
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={7}
          placeholder="What are we routing?"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className="field resize-y"
        />
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-5">
        <p className="label" aria-live="polite">
          {opened ? "EMAIL CLIENT OPENED / CHECK THE DRAFT" : "OUTPUT / DIRECT EMAIL"}
        </p>
        <button type="submit" className="btn btn--primary" data-fill>
          <span className="btn__fill" aria-hidden="true" />
          <span className="relative z-10">Transmit</span>
          <svg
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="square"
            className="btn__icon relative z-10 h-3.5 w-3.5"
            aria-hidden="true"
          >
            <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" />
          </svg>
        </button>
      </div>
    </form>
  );
}
