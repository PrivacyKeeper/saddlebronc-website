import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Introducing SaddleBronc.Pro",
  description:
    "Half your score belongs to an animal you do not own, and nobody has ever written down what those animals do. Here is the bucking horse database — plus everything else the bronc riding community needs.",
  alternates: {
    canonical: "https://www.saddlebronc.pro/blog/introducing-saddlebronc-pro",
  },
};

export default function Post() {
  return (
    <article className="prose-arena">
      <p className="text-xs tracking-wider text-muted-dim uppercase">
        2026-08-03
      </p>
      <h1 className="mt-2 text-3xl font-extrabold text-brand">
        Introducing SaddleBronc.Pro
      </h1>

      <p>
        Saddle bronc is rodeo&apos;s classic event and the most technical of the
        roughstock events. It is also the only one where{" "}
        <strong>half your score belongs to an animal you do not own</strong>.
      </p>

      <p>
        Fifty of the hundred available points are the horse&apos;s. A rider on a
        horse that will not mark cannot win, no matter how well he rides. Which
        means a bronc rider&apos;s season is decided by the draw at least as
        much as by the riding.
      </p>

      <h2>And nobody has written the horses down</h2>

      <p>
        There is no consumer product anywhere that gives a bronc rider a real
        database of bucking horses. Not buck patterns. Not average scores. Not
        buck-off rates. Not who has been on them and what they marked.
      </p>

      <p>
        The information exists — contractors know their own horses cold, and
        travel partners trade it verbally in a truck at midnight. It has just
        never been collected anywhere a contestant can get at it two days before
        he nods.
      </p>

      <p>That is what we are building first.</p>

      <h2>What draw analysis actually shows you</h2>

      <p>You draw a horse. You open the app. You see:</p>

      <ul>
        <li>Every recorded trip on that horse — score, rider, covered or not</li>
        <li>Buck-off rate and average horse score</li>
        <li>Which way it turns, and how consistently</li>
        <li>How it comes out of the chute: fast, slow, stalls, rears</li>
        <li>Kick height, drop, and direction changes</li>
        <li>Whether it is honest or erratic</li>
        <li>Video of previous trips where it exists</li>
        <li>Your own history on that horse, if you have been on it</li>
        <li>Comparable horses in the same pen</li>
      </ul>

      <p>
        And then something nobody has had before:{" "}
        <strong>style fit</strong>. If you ride horses that turn back left well
        and straight buckers badly, that pattern is in your own data — you just
        have never been able to see it.
      </p>

      <h2>Contractors are a first-class user, deliberately</h2>

      <p>
        None of this works without stock contractors, because the data is
        theirs. So they are built for properly rather than treated as a source
        to be scraped: herd management, ownership records, trip history and
        buck-off statistics per horse, pen assembly, rest and workload tracking,
        and marketing pages for horses being promoted for sale or for
        horse-of-the-year voting.
      </p>

      <p>
        A contractor with a documented buck-off rate and a season of trip
        history on a horse has something real to sell. That is a genuine reason
        to keep using it.
      </p>

      <h2>It is also everything else</h2>

      <p>
        Stock intelligence is the differentiator, but this is the app for the
        whole bronc riding community — the feed, the groups, the DMs, the
        people. Entries and draws. Judge scores broken into their four parts.
        Rerides. Equipment checks. Conditioning. Schools and clinics. The
        marketplace. Youth and college standings.
      </p>

      <p>If you ride broncs, you should not need another app. That is the bar.</p>

      <h2>Built for the amateur side</h2>

      <p>
        Most bronc riders are not at the NFR. They are at amateur rodeos, high
        school and college, and offseason jackpots — which are easy to miss
        entirely if you are not on the right group chat.
      </p>

      <p>
        That is who the copy, the pricing and the defaults are written for. And
        it is why the rules are configuration rather than code: the mark-out
        rule alone is an automatic disqualification under PRCA and a scored
        element under IPRA. Same physical event, two outcomes. See the{" "}
        <Link href="/rules">rules reference</Link>.
      </p>

      <p>
        <Link href="/#waitlist">Join the waitlist &rarr;</Link>
      </p>
    </article>
  );
}
