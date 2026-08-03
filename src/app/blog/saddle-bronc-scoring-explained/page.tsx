import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Saddle Bronc Scoring Explained: Where the 100 Points Come From",
  description:
    "Two judges, four numbers, a rider half and a horse half. What earns rider points, what earns horse points, and why an 80 on a poor horse is a better ride than an 80 on a great one.",
  alternates: {
    canonical:
      "https://www.saddlebronc.pro/blog/saddle-bronc-scoring-explained",
  },
};

export default function Post() {
  return (
    <article className="prose-arena">
      <p className="text-xs tracking-wider text-muted-dim uppercase">
        2026-08-03
      </p>
      <h1 className="mt-2 text-3xl font-extrabold text-brand">
        Saddle Bronc Scoring Explained: Where the 100 Points Come From
      </h1>

      <p>
        Everyone knows a 90 is exceptional and a 70 is not. Fewer people can
        tell you where those numbers come from — and the structure matters,
        because half of it is not about you at all.
      </p>

      <h2>Two judges, four numbers</h2>

      <p>
        Two judges each award <strong>0 to 25 for the rider</strong> and{" "}
        <strong>0 to 25 for the horse</strong>. Those four numbers add to a
        maximum of 100.
      </p>

      <p>
        So a 78 might be 20 + 19 on the rider and 20 + 19 on the horse. Or it
        might be 23 + 22 on the rider and 17 + 16 on a horse that did not give
        much. Same score, completely different afternoon.
      </p>

      <p>
        That split is not usually published anywhere, which is a shame, because
        it is the most useful number a rider has. Tracked across a season it
        tells you whether your riding is improving or your draws are.
      </p>

      <h2>What earns rider points</h2>

      <p>Primarily the spurring action:</p>

      <ul>
        <li>
          <strong>Spurs set at the points of the shoulders on the rise</strong> —
          not late, not low
        </li>
        <li>
          <strong>Swept back toward the cantle</strong> — the full stroke, not a
          token one
        </li>
        <li>
          <strong>Toes turned out</strong>
        </li>
        <li>
          <strong>In rhythm with the horse</strong>, not fighting it
        </li>
        <li>
          <strong>Continuous through all eight seconds</strong>, not just the
          first three
        </li>
      </ul>

      <p>Plus control and body position throughout.</p>

      <p>
        The word doing the work there is <em>continuous</em>. Most riders&apos;
        marks come apart in the last two seconds, when the legs are gone and the
        stroke shortens. It is invisible from the chute and obvious on video —
        which is exactly the kind of thing worth measuring second by second.
      </p>

      <h2>What earns horse points</h2>

      <p>The difficulty of the trip:</p>

      <ul>
        <li>Power</li>
        <li>Height</li>
        <li>
          <strong>Direction changes</strong>
        </li>
        <li>Drop</li>
        <li>Consistency through the eight seconds</li>
      </ul>

      <p>
        A horse that bucks hard <em>and changes direction</em> outscores a horse
        that bucks hard in a straight line. That is the single most important
        thing to understand about the animal half of the score, and it is why
        buck pattern — not just buck-off rate — is what you want to know about a
        draw.
      </p>

      <h2>Why an 80 is not always an 80</h2>

      <p>
        Consider two rides that both score 80:
      </p>

      <ul>
        <li>
          <strong>Rider 21+21, horse 19+19.</strong> You rode well on a horse
          that gave you very little.
        </li>
        <li>
          <strong>Rider 17+17, horse 23+23.</strong> You survived a great horse
          and did not do much with it.
        </li>
      </ul>

      <p>
        The first is a better ride and the worse result — because you cannot win
        a rodeo on a horse that will not mark, however well you ride it. The
        second is the one that keeps you awake, because a horse like that comes
        along a few times a season and you left points on it.
      </p>

      <p>
        Neither of those readings is available to you from a results sheet
        showing &ldquo;80.&rdquo;
      </p>

      <h2>What to do with the split</h2>

      <p>
        Track your rider marks separately from your horse marks over a season
        and two things become visible:
      </p>

      <ol>
        <li>
          <strong>Whether you are actually improving.</strong> Rising totals on
          flat rider marks means you are drawing better, not riding better.
        </li>
        <li>
          <strong>Where your draws are coming from.</strong> If your average
          horse mark is well below the field&apos;s, you are either entering the
          wrong rodeos or having some bad luck — and one of those is fixable.
        </li>
      </ol>

      <p>
        There is a third thing worth having, too:{" "}
        <strong>judge split data</strong>. Where two carded officials saw the
        same eight seconds differently is genuinely interesting, and over enough
        rides it says something about which parts of a ride are read
        consistently and which are not.
      </p>

      <p>
        <Link href="/rules">Read the full rules reference &rarr;</Link>
      </p>
    </article>
  );
}
