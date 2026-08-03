import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;

function getResendClient() {
  if (!resendApiKey) {
    return null;
  }

  return new Resend(resendApiKey);
}

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const resend = getResendClient();
    if (!resend) {
      return NextResponse.json(
        { error: "Waitlist email service is not configured." },
        { status: 503 },
      );
    }

    await resend.emails.send({
      from: "SaddleBronc.Pro <support@saddlebronc.pro>",
      to: email,
      subject: "You're on the SaddleBronc.Pro waitlist! 🤠",
      html: `
        <div style="background-color:#0a0e1a;color:#f0ead8;padding:40px;font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
          <div style="text-align:center;margin-bottom:30px;">
            <h1 style="color:#c9a227;font-size:28px;margin:0;">SADDLEBRONC.PRO</h1>
            <p style="color:#9aa8bf;font-size:14px;margin-top:5px;">Know the horse before you nod.</p>
          </div>
          <h2 style="color:#c9a227;font-size:22px;">You're on the list! 🎉</h2>
          <p style="color:#d5dcea;font-size:16px;line-height:1.6;">
            Thanks for signing up for early access to <strong style="color:#c9a227;">SaddleBronc.Pro</strong> — the complete platform for headers, heelers, producers, and coaches.
          </p>
          <p style="color:#d5dcea;font-size:16px;line-height:1.6;">
            Half your score belongs to an animal you do not own, and your season
            is decided by the draw. There is no database anywhere that tells a
            bronc rider what he just drew. We are building one.
          </p>
          <h3 style="color:#c9a227;font-size:18px;margin-top:25px;">What's coming:</h3>
          <ul style="color:#d5dcea;font-size:15px;line-height:1.8;">
            <li>&#128202; Draw analysis — every recorded trip on the horse you drew</li>
            <li>&#128052; Buck patterns: which way it turns, how it leaves, whether it drops</li>
            <li>&#128200; Buck-off rate and average horse score, by season</li>
            <li>&#127909; Video of previous trips where available</li>
            <li>&#129518; Your own history on that horse, and riders like you</li>
            <li>&#127942; Entries, draws, live scores, averages, and short rounds</li>
            <li>&#9878;&#65039; Independent judge entry — two judges, four numbers, no peeking</li>
            <li>&#128101; The whole bronc riding community in one feed</li>
            <li>&#128230; Contractor tools: herd, pens, rest tracking, and horse marketing</li>
            <li>&#127891; NHSRA, NIRA and amateur standings, coaches, and scholarships</li>
          </ul>
          <p style="color:#d5dcea;font-size:16px;line-height:1.6;">
            We'll keep you posted on launch updates. Keep swinging. 🤠
          </p>
          <p style="color:#9aa8bf;font-size:14px;margin-top:30px;">
            — The SaddleBronc.Pro Team<br/>
            <a href="https://saddlebronc.pro" style="color:#c9a227;">saddlebronc.pro</a>
          </p>
          <hr style="border:none;border-top:1px solid #2e3a52;margin:30px 0;" />
          <p style="color:#67748c;font-size:12px;text-align:center;">
            &copy; 2026 Apps 1, LLC. All rights reserved.
          </p>
        </div>
      `,
    });

    // Also notify the team
    await resend.emails.send({
      from: "SaddleBronc.Pro <support@saddlebronc.pro>",
      to: "support@saddlebronc.pro",
      subject: "New Waitlist Signup!",
      html: `<p>New waitlist signup: <strong>${email}</strong></p>`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unexpected error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
