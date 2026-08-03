import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Saddle Bronc Rules Explained: Eight Seconds and What Ends Them",
  description:
    "The rein, the stirrups, the free hand, and the equipment a chute judge can end your day over. A plain walk through every rule that decides whether you get a score at all.",
  alternates: {
    canonical:
      "https://www.saddlebronc.pro/blog/saddle-bronc-rules-explained",
  },
};

export default function Post() {
  return (
    <article className="prose-arena">
      <p className="text-xs tracking-wider text-muted-dim uppercase">
        2026-08-03
      </p>
      <h1 className="mt-2 text-3xl font-extrabold text-brand">
        Saddle Bronc Rules Explained: Eight Seconds and What Ends Them
      </h1>

      <p>
        Saddle bronc has fewer rules than the roping events, but almost all of
        them are absolute — you either get a score or you get nothing. Here is
        the whole list.
      </p>

      <h2>The eight seconds</h2>

      <p>
        Measured from the moment the horse&apos;s{" "}
        <strong>front feet hit the ground outside the chute</strong> until the
        whistle. Not from the gate opening, which is why a horse that stalls in
        the chute has not started your clock.
      </p>

      <p>Come off before the whistle and it is a no score. There is no partial credit.</p>

      <h2>One hand, one rein</h2>

      <p>
        You hold a thick braided rein attached to the horse&apos;s halter, with{" "}
        <strong>one hand only</strong>. The rein is your only connection — there
        is no rigging handle to grip, which is what makes this the most
        technical roughstock event.
      </p>

      <p>
        Lose the rein and the ride is over. Both feet must stay in the stirrups
        for the full eight seconds; lose a stirrup and it is over too.
      </p>

      <h2>The free hand</h2>

      <p>
        The free hand may not touch <strong>the horse, the saddle, the rein, or
        your own body</strong>. Any contact is a disqualification.
      </p>

      <p>
        That last one surprises people. Slapping your own leg, grabbing your hat,
        steadying yourself against your own thigh — all of it counts.
      </p>

      <h2>The mark-out</h2>

      <p>
        Feet forward, spurs above the points of the shoulders, both at once,
        held until the front feet land after the first jump.
      </p>

      <p>
        Under PRCA rules, missing it is an automatic disqualification. Under
        IPRA rules since 2024 it is folded into the judges&apos; 25 points
        instead. That is a big enough difference that{" "}
        <Link href="/blog/mark-out-rule-explained">it gets its own post</Link>.
      </p>

      <h2>The equipment a chute judge can stop you over</h2>

      <p>
        The chute judge may inspect before the ride and may disqualify for
        noncompliance. What gets looked at:
      </p>

      <ul>
        <li>
          <strong>Spur rowels</strong> — must be free spinning, dull, and
          humane. This is the one that catches people, usually because a rowel
          has worn sharp rather than because anyone intended anything.
        </li>
        <li>
          <strong>The saddle</strong> — association-approved, with the rigging
          specification enforced: three-quarter double, the front edge of the D
          ring pulling not further back than directly below the centre of the
          point of the swell.
        </li>
        <li>
          <strong>Halter and rein</strong> — a regulation halter with a single
          rein.
        </li>
      </ul>

      <p>
        The flank strap is the contractor&apos;s responsibility, fitted by their
        flankman, sheepskin-lined with a quick release.
      </p>

      <p>
        Checking your own gear the night before is free. Finding out at the
        chute is not.
      </p>

      <h2>Rerides</h2>

      <p>
        A reride may be offered for <strong>equipment failure</strong> or for a{" "}
        <strong>horse that does not buck to performance specification</strong>.
        It is at the judges&apos; discretion — you cannot demand one.
      </p>

      <p>
        If you are offered one, you have a real decision: keep the score you
        have, or take the reride and risk it. That choice gets recorded in our
        system rather than lost, because looking back at how those decisions
        went over a season is genuinely useful.
      </p>

      <p>
        A reride awarded must be taken by the rider who was offered it.
        Substitution is generally not permitted except under
        association-specific injury rules.
      </p>

      <h2>Turnouts</h2>

      <p>
        Entering and not competing is a turnout, and it is fineable under
        association rules. It is an administrative outcome rather than a scoring
        one, but it belongs on your record and it belongs in the app.
      </p>

      <h2>The short version</h2>

      <p>
        Cover it for eight, mark it out, keep your free hand off everything,
        keep your feet in the stirrups, hang on to the rein, and have your
        rowels legal. Everything else is points.
      </p>

      <p>
        <Link href="/rules">Read the full rules reference &rarr;</Link>
      </p>
    </article>
  );
}
