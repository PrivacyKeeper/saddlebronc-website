import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title:
    "Saddle Bronc Rules Explained - Scoring, Mark Out & Disqualifications | SaddleBronc.pro",
  description:
    "A complete plain-language saddle bronc rules reference: the eight seconds, how two judges award 100 points, the mark-out rule and why it differs between PRCA and IPRA, disqualifications, rerides, and equipment specification. Current as of August 2026.",
  alternates: { canonical: "https://www.saddlebronc.pro/rules" },
};

/**
 * The mark-out rule is the reason this page tags by association. The same
 * physical event — the rider's feet out of position when the front feet land
 * — is an automatic disqualification under PRCA rules and a scored element
 * under IPRA rules since 2024.
 */
function Assoc({ children }: { children: React.ReactNode }) {
  return <span className="assoc-tag">{children}</span>;
}

export default function RulesPage() {
  return (
    <div className="arena-page arena-bg-2 min-h-screen">
      <header className="flex items-center justify-between border-b border-ink-border bg-[#0a0e1a]/90 px-8 py-6 backdrop-blur-sm">
        <Link
          href="/"
          className="text-xl font-bold text-brand transition hover:text-brand-deep"
        >
          &larr; SaddleBronc.Pro
        </Link>
        <nav className="flex gap-6 text-sm font-semibold">
          <Link href="/rules" className="text-brand">
            Rules
          </Link>
          <Link href="/blog" className="text-muted transition hover:text-brand">
            Blog
          </Link>
        </nav>
      </header>

      <main className="arena-panel mx-auto my-8 max-w-3xl px-6 py-8">
        <article className="prose-arena">
          <h1 className="text-3xl font-extrabold text-brand">
            Saddle Bronc Riding Rules
          </h1>
          <p className="mt-3 text-muted">
            A plain-language reference to the rules that decide rides and
            scores. Current as of 3 August 2026.
          </p>

          <div className="mt-6 rounded-xl border border-ink-border bg-ink-raised/70 p-5">
            <p className="text-sm text-[#d5dcea]">
              <strong className="text-brand">Read this first.</strong> One rule
              in saddle bronc produces two completely different outcomes
              depending on who is sanctioning: <strong>the mark-out</strong>. It
              is an automatic disqualification under PRCA rules and a scored
              element under IPRA rules. Everything else below is broadly
              consistent, but that one is worth knowing before you enter
              somewhere new.
            </p>
            <p className="mt-3 text-sm text-[#d5dcea]">
              Ground rules for a specific rodeo override association rules for
              that rodeo. Youth and junior classes may run modified stock and
              modified requirements, and those are class settings rather than
              exceptions.
            </p>
          </div>

          <h2>The ride</h2>
          <p>
            <strong>Eight seconds</strong>, measured from the moment the
            horse&apos;s front feet hit the ground outside the chute until the
            whistle. Being bucked off before the whistle is a no score.
          </p>
          <p>
            The rider holds a thick braided rein attached to the horse&apos;s
            halter, <strong>one hand only</strong>. Both feet must stay in the
            stirrups for the whole ride.
          </p>

          <h2>The mark-out</h2>
          <p>
            Leaving the chute, the rider&apos;s feet must be forward with the
            spurs touching the horse <strong>above the points of the
            shoulders</strong>, and must stay there until the horse&apos;s front
            feet hit the ground after the first jump out.{" "}
            <strong>Both spurs must qualify simultaneously.</strong>
          </p>
          <p>Then the associations diverge:</p>
          <ul>
            <li>
              <Assoc>PRCA</Assoc> Failing to mark out is an{" "}
              <strong>automatic disqualification</strong>. No score, regardless
              of what happened in the other seven and a half seconds.
            </li>
            <li>
              <Assoc>IPRA</Assoc> Since 2024, the position of the rider&apos;s
              feet when the animal&apos;s front feet touch the ground is{" "}
              <strong>folded into the 25 points</strong> each official awards
              during the eight-second ride, rather than producing an automatic
              no score. The stated purpose was more accurate and consistent
              judging.
            </li>
          </ul>
          <p>
            This is exactly the sort of thing generic rodeo software gets wrong
            — it stores one outcome and applies it everywhere. In our system it
            is a rule profile setting bound to the association and the season.
          </p>

          <h2>How the score works</h2>
          <p>
            Two judges. Each awards <strong>0 to 25 points for the rider</strong>{" "}
            and <strong>0 to 25 points for the horse</strong>. Four numbers,
            adding to a maximum of 100.
          </p>
          <p>
            A score above 80 is good. Above 90 is exceptional and you will
            remember it.
          </p>

          <h3>Rider points</h3>
          <p>
            Rider marks come primarily from <strong>spurring action</strong>:
          </p>
          <ul>
            <li>
              Spurs set at the points of the shoulders on the rise, swept back
              toward the cantle
            </li>
            <li>Toes turned out</li>
            <li>In rhythm with the horse, not against it</li>
            <li>Continuous through all eight seconds</li>
            <li>Plus control and body position throughout</li>
          </ul>

          <h3>Horse points</h3>
          <p>
            Horse marks come from the <strong>difficulty of the trip</strong> —
            power, height, direction changes, drop, and consistency. A horse
            that bucks hard <em>with changes of direction</em> outscores a horse
            that bucks straight, however hard it bucks.
          </p>
          <p>
            Which is why the draw matters as much as the ride. You cannot win on
            a horse that will not mark well, no matter how you ride it.
          </p>

          <h2>What ends a ride instantly</h2>
          <ul>
            <li>
              <strong>Bucked off</strong> before the whistle — no score
            </li>
            <li>
              <strong>Free hand contact</strong> — the free hand may not touch
              the horse, the saddle, the rein, or the rider&apos;s own body
            </li>
            <li>
              <strong>Losing a stirrup</strong>
            </li>
            <li>
              <strong>Losing the rein</strong>
            </li>
            <li>
              <strong>Equipment violation</strong> — rowels, saddle, or rein
              specification
            </li>
            <li>
              <strong>Failing to mark out</strong> <Assoc>PRCA</Assoc>
            </li>
          </ul>
          <p>
            Turning out — entering and not competing — is fineable under
            association rules rather than a scoring outcome.
          </p>

          <h2>Rerides</h2>
          <p>
            A reride may be offered when a score is affected by{" "}
            <strong>equipment failure</strong> or by a{" "}
            <strong>horse that does not buck to performance specification</strong>
            . The decision is at the judges&apos; discretion.
          </p>
          <p>
            A rider who is offered a reride may <strong>keep the score he
            has</strong> or <strong>take the reride</strong> — and that decision
            gets recorded, because it is a real strategic choice and worth being
            able to look back on.
          </p>
          <p>
            If a reride is awarded, it must be taken by the rider who was
            offered it. Substitution is generally not permitted except under
            association-specific injury rules.
          </p>

          <h2>Equipment</h2>
          <ul>
            <li>
              <strong>Saddle</strong> — a standard association-approved bronc
              saddle, with the rigging specification enforced: three-quarter
              double, the front edge of the D ring pulling not further back than
              directly below the centre of the point of the swell
            </li>
            <li>
              <strong>Halter and rein</strong> — a regulation halter with a
              single rein
            </li>
            <li>
              <strong>Spur rowels</strong> — must be free spinning, dull, and
              humane. The chute judge may inspect before the ride and may
              disqualify for noncompliance.
            </li>
            <li>
              <strong>Flank strap</strong> — fitted by the contractor&apos;s
              flankman, sheepskin-lined, with a quick release
            </li>
          </ul>
          <p>
            The chute judge can end your day before it starts, which is why an
            equipment checklist with a timestamped photo log is in the app.
          </p>

          <h2>What this means for how you enter</h2>
          <p>
            Two things are worth checking before every rodeo you have not been
            to: which mark-out rule the association runs, and what the reride
            policy is. Both are shown on the entry screen rather than assumed.
          </p>
          <p>
            And once the draw is posted, the most useful thing you can do is
            find out what you are on. That is what{" "}
            <Link href="/">SaddleBronc.pro</Link> is built around.
          </p>

          <div className="mt-10 rounded-xl border border-ink-border bg-ink-raised/70 p-5">
            <p className="text-sm text-muted">
              <strong className="text-brand">Sources and currency.</strong> PRCA
              values are from the 2026 PRCA Rule Book. The IPRA mark-out change
              is the 2024 amendment as documented in the SaddleBronc.pro build
              map, rules-verified 24 July 2026. Rodeo rules change annually and
              mid-season. This page is a reference, not a rulebook — the
              association&apos;s current published rulebook and the ground rules
              of the specific rodeo always govern, and judges&apos; decisions on
              markings are final within the grievance process.
            </p>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
