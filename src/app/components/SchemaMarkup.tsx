export default function SchemaMarkup() {
  const appSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "SaddleBronc.pro",
    applicationCategory: "SportsApplication",
    operatingSystem: "iOS, Android",
    description:
      "The everything app for saddle bronc riding. A social platform for the whole bronc riding community, plus a bucking horse database with buck patterns, buck-off rates and trip history, draw analysis, entries, judge scores, rerides, and contractor herd tools. Built for amateur, youth and college riders.",
    url: "https://www.saddlebronc.pro",
    offers: [
      { "@type": "Offer", price: "0", priceCurrency: "USD", name: "Free" },
      {
        "@type": "Offer",
        price: "4.99",
        priceCurrency: "USD",
        name: "Premium Monthly",
      },
      {
        "@type": "Offer",
        price: "49.99",
        priceCurrency: "USD",
        name: "Premium Annual",
      },
    ],
    author: {
      "@type": "Organization",
      name: "SaddleBronc.pro",
      url: "https://www.saddlebronc.pro",
      email: "support@saddlebronc.pro",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "SaddleBronc.pro",
    url: "https://www.saddlebronc.pro",
    description:
      "The complete saddle bronc platform. Community, bucking horse data, draws, scores, rules, and contractor tools in one app.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.saddlebronc.pro/blog?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  // The rules reference is the page most likely to earn a featured snippet.
  // The mark-out answer names both associations, because the same physical
  // event produces two different outcomes depending on who is sanctioning.
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How is saddle bronc riding scored?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Two judges each award 0 to 25 points for the rider and 0 to 25 points for the horse, so four numbers add to a maximum of 100. A score above 80 is good and above 90 is exceptional. Rider points come primarily from spurring action — spurs set at the points of the shoulders on the rise and swept back toward the cantle, toes turned out, in rhythm and continuous through all eight seconds — plus control and body position. Horse points come from the difficulty of the trip: power, height, direction changes, drop, and consistency.",
        },
      },
      {
        "@type": "Question",
        name: "What is the mark-out rule in saddle bronc riding?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Leaving the chute, the rider's feet must be forward with the spurs touching the horse above the points of the shoulders, and must stay there until the horse's front feet hit the ground after the first jump out. Both spurs must qualify simultaneously. Under PRCA rules, failing to mark out is an automatic disqualification. The IPRA changed this in 2024 so that foot position is folded into the 25 points each official awards during the ride rather than producing an automatic no score. Two associations, two different outcomes for the same physical event.",
        },
      },
      {
        "@type": "Question",
        name: "How long is a saddle bronc ride?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Eight seconds, measured from the moment the horse's front feet hit the ground outside the chute until the whistle. Being bucked off before the whistle is a no score.",
        },
      },
      {
        "@type": "Question",
        name: "What disqualifies a saddle bronc rider?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Being bucked off before the whistle, touching the horse, the saddle, the rein or yourself with the free hand, losing a stirrup, losing the rein, and equipment that fails inspection — rowels must be free spinning, dull and humane. Under PRCA rules, failing to mark out is also a disqualification.",
        },
      },
      {
        "@type": "Question",
        name: "What is a reride in saddle bronc riding?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A reride may be offered when a score is affected by equipment failure or by a horse that does not buck to performance specification. It is at the judges' discretion. A rider offered a reride may keep the score he has or take the reride, and that decision is recorded. If a reride is awarded it must be taken by the rider who was offered it.",
        },
      },
      {
        "@type": "Question",
        name: "Why does the horse you draw matter so much in saddle bronc?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Half the score belongs to the horse — up to 50 of the 100 available points. A horse that bucks hard with changes of direction outscores a horse that bucks straight, so a rider on a poor-bucking horse cannot win regardless of how well he rides. That is why buck patterns, buck-off rates and average horse scores are worth knowing before you nod.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
