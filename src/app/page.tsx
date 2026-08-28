"use client";

import { useState } from "react";
import CrossQuote from "./components/CrossQuote";
import Footer from "./components/Footer";
import Link from "next/link";

/**
 * Feature groups mirror the screens in the build map's route tree.
 *
 * Ordering: this is an everything-app for the bronc riding community, so the
 * social platform leads. Stock intelligence is second because the map calls
 * it the core differentiator — half the score belongs to an animal the rider
 * does not own, and no consumer product anywhere gives a bronc rider a real
 * database of horses.
 *
 * Audience is amateur, youth and college riders, not PRCA professionals.
 */
const features = [
  {
    id: "social",
    icon: "👥",
    title: "Social & Community",
    desc: "The Whole Bronc Riding World, In One Feed",
    detail: [
      "A real feed — post video of your trips, not just scores",
      "Stories that disappear in 24 hours",
      "Like, comment, bookmark, repost, and share anywhere",
      "Follow the riders you look up to and build your own following",
      "Group chats for your travel rig, your school team, or your practice group",
      "Direct messaging with read receipts",
      "Find riders near you or entered at the same rodeo",
      "Regional groups — your local rodeo scene, organized",
      "Celebrate first qualified rides, first checks, and first buckles",
      "Badges for milestones, streaks, and consistency",
      "Block, report, and mute on every account from day one",
    ],
  },
  {
    id: "stock",
    icon: "🐎",
    title: "Draw Analysis & Stock Data",
    desc: "Know The Horse Before You Nod",
    detail: [
      "Every recorded trip on the horse you drew — score, rider, covered or not",
      "Buck-off rate and average horse score across the season",
      "The buck pattern: which way it turns, and how often",
      "Out of the chute: fast, slow, stalls, or rears",
      "Kick height, drop, direction changes, and whether it is honest or erratic",
      "Video of previous trips where available",
      "Your own history on that horse, if you have been on it",
      "Comparable horses in the same pen",
      "Rider-horse style fit — if you ride left-turning horses well, you will see it",
      "Nothing like this exists for a contestant anywhere",
    ],
  },
  {
    id: "scores",
    icon: "⚖️",
    title: "Scores & Judging",
    desc: "Two Judges. Four Numbers. One Hundred Points.",
    detail: [
      "Your score broken into its four parts, not just the total",
      "Rider marks and horse marks tracked separately over a season",
      "See how much of your average total is coming from the stock you draw",
      "Judge split data — where two judges saw the ride differently",
      "Mark-out outcome recorded per association, because it is not the same everywhere",
      "Reride offered, taken or declined, with the decision kept on the record",
      "Disqualification reasons recorded properly rather than as a blank",
      "Every score cites the rule set and edition it was scored under",
    ],
  },
  {
    id: "competition",
    icon: "🏆",
    title: "Competition & Events",
    desc: "Every Rodeo Within Driving Distance",
    detail: [
      "Browse and enter by association, date, and distance",
      "One head, two head plus average, go-round plus short round",
      "Bronc riding jackpots — common in the offseason and easy to miss",
      "Match rides and invitationals",
      "Draw posted with a documented random seed and a visible timestamp",
      "Your horse and chute number pushed to your phone",
      "Live scores as judges submit",
      "Averages, short-round standings, and payouts",
      "Season standings by association",
    ],
  },
  {
    id: "rules",
    icon: "📖",
    title: "Rules & Officiating",
    desc: "Know The Call Before It Gets Made",
    detail: [
      "The eight seconds, and exactly when they start",
      "The mark-out rule — a disqualification under PRCA, a scored element under IPRA",
      "Free hand, stirrups, and rein: what ends a ride instantly",
      "How the 100 points are actually awarded, on both sides",
      "Reride grounds and how the decision works",
      "Equipment specification: saddle rigging, halter and rein, spur rowels",
      "Rules versioned by date — a 2026 ride is scored under 2026 rules",
      "Producer ground rules stated up front, before you enter",
    ],
  },
  {
    id: "equipment",
    icon: "🔧",
    title: "Equipment Check",
    desc: "The Chute Judge Can End Your Day Before It Starts",
    detail: [
      "Pre-ride checklist for everything a chute judge inspects",
      "Rowels: free spinning, dull, and humane — checked and logged",
      "Saddle rigging specification in plain language",
      "Rein length recorded",
      "Photo log, timestamped, ready if a check is questioned",
      "Association-specific specs, because they are not identical",
    ],
  },
  {
    id: "training",
    icon: "🎯",
    title: "Training & Video",
    desc: "Coaching For People Who Cannot Afford A Coach (Premium)",
    detail: [
      "Film a trip on your phone and get it broken down — no special equipment",
      "Mark-out position at the moment the front feet land",
      "Spur stroke timing, length, and rhythm against the horse's motion",
      "Toe turnout and body position through the eight seconds",
      "Where in the ride your form breaks down, second by second",
      "Side by side against your own best trip",
      "Progress measured against your own baseline, not a professional's",
      "Drill library: spur board, bronc barrel, and conditioning work",
      "Book schools and clinics in the app",
    ],
  },
  {
    id: "conditioning",
    icon: "💪",
    title: "Conditioning & Recovery",
    desc: "The Half Of This Sport Nobody Films",
    detail: [
      "Conditioning log by kind, duration, and date",
      "Injury and recovery tracking, private by default",
      "Sports medicine and chiropractic directory",
      "Protective vest and mouthguard reminders in the equipment checklist",
      "Rodeo-to-rodeo workload across a season, so you can see when you are cooked",
    ],
  },
  {
    id: "contractors",
    icon: "📦",
    title: "For Stock Contractors",
    desc: "Your Horses, Your Data, Your Marketing",
    detail: [
      "Herd management with ownership records kept in one place",
      "Trip history and buck-off statistics per horse",
      "Pen assembly — which horses go to which rodeo",
      "Rest and workload tracking across a season",
      "Marketing pages for horses being promoted for sale or horse-of-the-year",
      "Award history: horse of the year, top pen, contractor awards",
      "Ownership documentation storage",
      "Supplier directory so producers can find you by region and herd size",
      "Health and vaccination records for a bucking string",
    ],
  },
  {
    id: "marketplace",
    icon: "🛒",
    title: "Marketplace",
    desc: "Buy & Sell With Confidence",
    detail: [
      "Bronc saddles, reins, halters, cinches, latigos, and bucking rolls",
      "Spurs, spur straps, rowels, chaps, boots, hats, and gloves",
      "Riding vests, protective vests, mouthguards, tape and wraps",
      "Bucking machines, spur boards, bronc barrels, and drop barrels",
      "Bucking horse prospects, broodmares, bucking stock, semen and breedings",
      "Trailers, rigs, and living quarters",
      "Contractor supply: flank straps, chute equipment, panels, arena equipment",
      "Schools, clinics, hauling, sports medicine, and training",
      "Seller ratings, saved listings, and direct messaging",
    ],
  },
  {
    id: "travel",
    icon: "🚗",
    title: "Travel & Safety",
    desc: "Travel Safe, Arrive Ready",
    detail: [
      "Route planner built around the rodeos you actually entered",
      "Split the drive and the fuel with whoever is in the rig",
      "Real-time weather and severe weather alerts",
      "Emergency alert system with one-tap contacts",
      "Arena finder with reviews from other riders",
      "Entry deadlines and draw times surfaced before you miss them",
      "Gas, food, and rest stop finder",
    ],
  },
  {
    id: "youth",
    icon: "🎓",
    title: "Youth, School & College",
    desc: "Junior Rodeo Through The CNFR",
    detail: [
      "NHSRA and NIRA saddle bronc standings and qualification tracking",
      "Junior and youth divisions, including steer and pony classes where run",
      "Coach dashboards with roster, entries, travel, and eligibility",
      "School event calendars and region standings",
      "Scholarship board with deadlines and requirements",
      "Recruiting profile with highlight reel, coaches-only by default for minors",
      "Progression pathway: first qualified ride, first 70, first check, first buckle",
      "A minor's recruiting profile never goes public automatically at 18",
    ],
  },
  {
    id: "producers",
    icon: "💼",
    title: "Producers & Judges",
    desc: "Draw Integrity, Built In (Premium)",
    detail: [
      "Stock draw with a documented random seed and a locked audit record",
      "Draw seed and timestamp visible — the most sensitive thing in roughstock",
      "Pen assignment from a contractor's herd, with rest tracking",
      "Independent judge entry: two judges, four numbers, neither seeing the other",
      "Reride management — offer, accept or decline, and the reride draw",
      "Equipment check log for the chute judge",
      "Chute order and slack management",
      "Payout by places, with stock contractor percentage modelled",
      "Day sheet with horse names, which is what the announcer actually needs",
    ],
  },
];

const scoreCells = [
  { value: "0–25", label: "Judge 1 · Rider" },
  { value: "0–25", label: "Judge 1 · Horse" },
  { value: "0–25", label: "Judge 2 · Rider" },
  { value: "0–25", label: "Judge 2 · Horse" },
];

const pricing = [
  {
    name: "Free",
    price: "$0",
    period: "/forever",
    perks: [
      "Rider profile and community feed",
      "Event discovery and entries",
      "Basic draw information",
      "Score history and rider/horse split",
      "Equipment checklist",
      "Conditioning log",
      "Marketplace access",
      "Rules reference",
    ],
  },
  {
    name: "Premium",
    price: "$4.99",
    period: "/mo",
    featured: true,
    perks: [
      "Everything in Free",
      "Full draw analysis with buck patterns and buck-off rates",
      "Trip video on drawn horses where available",
      "Rider-horse style fit and matchup history",
      "AI ride breakdown: mark-out, spur stroke, body position",
      "Side-by-side video comparison",
      "Drill library and school bookings",
      "Priority support",
    ],
  },
  {
    name: "Annual",
    price: "$49.99",
    period: "/yr",
    best: true,
    perks: [
      "Everything in Premium",
      "Save $10 versus monthly",
      "Early access to new features",
      "Exclusive community badge",
    ],
  },
];

export default function Home() {
  const [openModal, setOpenModal] = useState<number | null>(null);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");
  // Honeypot. Hidden from real visitors, so anything here came from a bot.
  // Not named "company": browsers autofill organization fields, and a real
  // person whose browser filled it would be silently dropped as a bot.
  const [honeypot, setHoneypot] = useState("");

  const handleWaitlist = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, hp_company: honeypot }),
      });
      const data = await res.json().catch(() => null);
      if (!res.ok) {
        throw new Error(data?.error ?? "");
      }
      setStatus("success");
      setEmail("");
    } catch (err) {
      // Prefer the server's reason when it gave one: "that address has a typo"
      // and "the mail service is down" need very different things from the
      // visitor, and the generic line tells them neither.
      setErrorMessage(err instanceof Error ? err.message : "");
      setStatus("error");
    }
  };

  return (
    <div className="arena-page arena-bg-1 min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b border-ink-border bg-[#0a0e1a]/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <Link href="/" className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="SaddleBronc.pro" className="h-14 w-auto" />
            <span className="hidden text-lg font-bold tracking-wide text-brand sm:block">
              SADDLEBRONC<span className="text-brand-2">.PRO</span>
            </span>
          </Link>
          <nav className="hidden gap-8 text-sm font-semibold tracking-wider text-muted uppercase md:flex">
            <a href="#features" className="transition hover:text-brand">
              Features
            </a>
            <Link href="/rules" className="transition hover:text-brand">
              Rules
            </Link>
            <a href="#pricing" className="transition hover:text-brand">
              Pricing
            </a>
            <Link href="/blog" className="transition hover:text-brand">
              Blog
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center px-6 py-20 text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo.png"
          alt="SaddleBronc.pro"
          className="w-[300px] drop-shadow-2xl md:w-[400px]"
        />
        <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-cream md:text-5xl">
          SaddleBronc<span className="text-brand-2">.pro</span>
        </h1>
        <p className="mt-4 text-xl font-bold tracking-wide text-brand italic md:text-2xl">
          &ldquo;Know the horse before you nod.&rdquo;
        </p>
        <p className="mt-6 max-w-2xl text-lg text-muted md:text-xl">
          Saddle bronc is the only event in this portfolio where half your score
          belongs to an animal you do not own. Fifty of the hundred points are
          the horse&apos;s. Your season is decided by the draw as much as by how
          you ride.
        </p>
        <p className="mt-4 max-w-2xl text-lg text-muted md:text-xl">
          And there is no database anywhere that tells a bronc rider what he
          just drew. Contractors know it. Travel partners trade it verbally in a
          truck at midnight.{" "}
          <span className="text-cream">
            We are writing it down — along with everything else the bronc riding
            community needs.
          </span>
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <div className="relative">
            <div className="flex cursor-default items-center gap-3 rounded-xl border border-ink-border bg-ink-raised px-6 py-3 opacity-70">
              <svg viewBox="0 0 384 512" className="h-8 w-8 fill-cream">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
              </svg>
              <div className="text-left">
                <p className="text-[10px] leading-tight text-muted uppercase">
                  Download on the
                </p>
                <p className="text-lg leading-tight font-semibold text-cream">
                  App Store
                </p>
              </div>
            </div>
            <span className="absolute -top-3 -right-3 rounded-full bg-brand-deep px-2 py-1 text-[10px] font-bold text-white uppercase shadow-lg">
              Coming Soon
            </span>
          </div>
          <div className="relative">
            <div className="flex cursor-default items-center gap-3 rounded-xl border border-ink-border bg-ink-raised px-6 py-3 opacity-70">
              <svg viewBox="0 0 512 512" className="h-8 w-8 fill-cream">
                <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
              </svg>
              <div className="text-left">
                <p className="text-[10px] leading-tight text-muted uppercase">
                  Get it on
                </p>
                <p className="text-lg leading-tight font-semibold text-cream">
                  Google Play
                </p>
              </div>
            </div>
            <span className="absolute -top-3 -right-3 rounded-full bg-brand-deep px-2 py-1 text-[10px] font-bold text-white uppercase shadow-lg">
              Coming Soon
            </span>
          </div>
        </div>

        <a
          href="#waitlist"
          className="mt-8 rounded-lg bg-brand px-8 py-4 text-lg font-bold tracking-wider text-[#0a0e1a] uppercase shadow-lg shadow-brand/20 transition hover:bg-brand-deep"
        >
          Join the Waitlist
        </a>
      </section>

      {/* The score */}
      <section className="mx-auto max-w-4xl px-6 pb-10">
        <p className="mb-4 text-center text-sm font-bold tracking-wider text-brand uppercase">
          Two judges, four numbers, one hundred points
        </p>
        <div className="score-grid">
          {scoreCells.map((c) => (
            <div key={c.label} className="score-cell">
              <p className="score-value">{c.value}</p>
              <p className="mt-2 text-[11px] leading-tight text-muted">
                {c.label}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-center text-sm text-muted">
          Half of it is the horse. That is the part nobody has ever measured for
          you.
        </p>
      </section>

      {/* Who it is for */}
      <section className="mx-auto max-w-6xl px-6 pb-8">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { label: "Riders", note: "Amateur, youth, college" },
            { label: "Contractors", note: "Your horses, your data" },
            { label: "Producers", note: "Draws, judges, payouts" },
            { label: "Families", note: "Parents, guardians, fans" },
          ].map((who) => (
            <div
              key={who.label}
              className="rounded-xl border border-ink-border bg-ink-raised/70 p-4 text-center"
            >
              <p className="text-sm font-bold tracking-wider text-brand uppercase">
                {who.label}
              </p>
              <p className="mt-1 text-xs text-muted">{who.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-center text-3xl font-bold tracking-wider text-brand uppercase">
          What&apos;s Inside
        </h2>
        <p className="mx-auto mt-4 mb-14 max-w-2xl text-center text-muted">
          Thirteen feature groups — the social side, the competing side, and
          everything in between. Built for weekend and college riders, not just
          the ones on TV. Tap any card for the full list.
        </p>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <button
              key={f.id}
              onClick={() => setOpenModal(i)}
              className="group rounded-xl border border-ink-border bg-ink-raised p-6 text-left transition-all hover:border-brand hover:shadow-lg hover:shadow-brand/10"
            >
              <div className="mb-4 text-4xl">{f.icon}</div>
              <h3 className="text-xl font-semibold text-brand group-hover:underline">
                {f.title}
              </h3>
              <p className="mt-2 text-sm text-muted">{f.desc}</p>
              <p className="mt-3 text-xs font-semibold text-brand-2">
                See all {f.detail.length} features &rarr;
              </p>
            </button>
          ))}
        </div>
      </section>

      {/* Feature modal */}
      {openModal !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={() => setOpenModal(null)}
        >
          <div
            className="max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-ink-border bg-ink-panel p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 text-5xl">{features[openModal].icon}</div>
            <h3 className="text-2xl font-bold text-brand">
              {features[openModal].title}
            </h3>
            <p className="mt-1 text-sm text-muted">{features[openModal].desc}</p>
            <ul className="mt-4 space-y-2">
              {features[openModal].detail.map((item, j) => (
                <li key={j} className="flex items-start gap-2 text-[#d5dcea]">
                  <span className="mt-0.5 text-brand-2">&#10003;</span>
                  {item}
                </li>
              ))}
            </ul>
            <button
              onClick={() => setOpenModal(null)}
              className="mt-6 rounded-lg bg-brand px-6 py-2 font-semibold text-[#0a0e1a] transition hover:bg-brand-deep"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Why it is different */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="mb-14 text-center text-3xl font-bold tracking-wider text-brand uppercase">
          Why Saddle Bronc Needed Its Own App
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            {
              t: "The score is not a time",
              d: "Everything else in rodeo results is built around a stopwatch. A judged event has two officials, four numbers, a rider half and an animal half. Software that treats a score as a time gets all of it wrong.",
            },
            {
              t: "Half your season is the draw",
              d: "You cannot win on a horse that does not buck, no matter how well you ride. Knowing what you drew — pattern, buck-off rate, average mark — is the single most valuable thing a bronc rider can have, and nobody has ever given it to them.",
            },
            {
              t: "The mark-out rule is not one rule",
              d: "A missed mark-out is an automatic disqualification under PRCA rules and a scored element under IPRA rules since 2024. Same physical event, two outcomes. Generic rodeo software gets this wrong constantly.",
            },
          ].map((c) => (
            <div
              key={c.t}
              className="rounded-xl border border-ink-border bg-ink-raised p-6"
            >
              <h3 className="text-lg font-semibold text-brand-2">{c.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="mb-14 text-center text-3xl font-bold tracking-wider text-brand uppercase">
          Pricing
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {pricing.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl border p-8 ${
                plan.featured
                  ? "border-brand bg-ink-panel shadow-lg shadow-brand/15"
                  : "border-ink-border bg-ink-raised"
              }`}
            >
              {plan.featured && (
                <p className="mb-2 text-xs font-bold tracking-wider text-brand-2 uppercase">
                  Most Popular
                </p>
              )}
              {plan.best && (
                <p className="mb-2 text-xs font-bold tracking-wider text-brand uppercase">
                  Best Value
                </p>
              )}
              <h3 className="text-xl font-bold text-brand">{plan.name}</h3>
              <div className="mt-4">
                <span className="text-4xl font-extrabold text-cream">
                  {plan.price}
                </span>
                <span className="text-muted">{plan.period}</span>
              </div>
              <ul className="mt-6 space-y-3">
                {plan.perks.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-2 text-sm text-[#d5dcea]"
                  >
                    <span className="mt-0.5 text-brand-2">&#10003;</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Waitlist */}
      <section id="waitlist" className="mx-auto max-w-xl px-6 py-20 text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-wider text-brand uppercase">
          Get Early Access
        </h2>
        <p className="mb-8 text-muted">
          Drop your email and be the first to know when SaddleBronc.pro
          launches.
        </p>
        {status === "success" ? (
          <p className="text-lg font-semibold text-brand">
            &#127881; You&apos;re on the list! Check your inbox.
          </p>
        ) : (
          <form
            onSubmit={handleWaitlist}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <input
              type="text"
              name="hp_company"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="absolute left-[-9999px] h-0 w-0 opacity-0"
            />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="flex-1 rounded-lg border border-ink-border bg-ink-raised px-4 py-3 text-cream placeholder-muted-dim focus:border-brand focus:outline-none"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="rounded-lg bg-brand px-6 py-3 font-bold tracking-wider text-[#0a0e1a] uppercase shadow-lg shadow-brand/20 transition hover:bg-brand-deep disabled:opacity-50"
            >
              {status === "loading" ? "Submitting..." : "Notify Me"}
            </button>
          </form>
        )}
        {status === "error" && (
          <p className="mt-4 text-sm text-red-400">
            {errorMessage || "Something went wrong. Try again."}
          </p>
        )}
      </section>

      <Footer />
      <CrossQuote />
    </div>
  );
}
