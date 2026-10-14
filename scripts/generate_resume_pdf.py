"""Generate a one-page ATS-friendly resume with ADGO and project experience."""
from pathlib import Path
import sys
from reportlab.lib import colors
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable

output = Path(sys.argv[1] if len(sys.argv)>1 else "public/angel-gonzalez-resume.pdf")
output.parent.mkdir(parents=True, exist_ok=True)
NAVY=colors.HexColor("#132641")
BLUE=colors.HexColor("#2256bb")
TEXT=colors.HexColor("#26354a")
MUTED=colors.HexColor("#52627a")
styles={
"name":ParagraphStyle("Name",fontName="Helvetica-Bold",fontSize=21.7,leading=24,textColor=NAVY,spaceAfter=1),
"tag":ParagraphStyle("Tag",fontName="Helvetica-Bold",fontSize=9.3,leading=12,textColor=BLUE,spaceAfter=4),
"contact":ParagraphStyle("Contact",fontName="Helvetica",fontSize=8.1,leading=10.5,textColor=MUTED,spaceAfter=1),
"section":ParagraphStyle("Section",fontName="Helvetica-Bold",fontSize=9.3,leading=11,textColor=BLUE,spaceBefore=11,spaceAfter=5),
"body":ParagraphStyle("Body",fontName="Helvetica",fontSize=8.55,leading=11.4,textColor=TEXT,spaceAfter=3),
"small":ParagraphStyle("Small",fontName="Helvetica",fontSize=8.25,leading=11.1,textColor=TEXT,spaceAfter=3),
"role":ParagraphStyle("Role",fontName="Helvetica-Bold",fontSize=9,leading=11.3,textColor=NAVY,spaceBefore=3,spaceAfter=3),
"bullet":ParagraphStyle("Bullet",fontName="Helvetica",fontSize=8.35,leading=11.2,textColor=TEXT,leftIndent=9,firstLineIndent=-9,spaceAfter=2),
}
P=lambda text,kind="body":Paragraph(text,styles[kind])
story=[
 P("Angel Gonzalez","name"),
 P("AI Implementation | Marketing Automation | Web Development | Creative AI","tag"),
 P("San Fernando Valley / Los Angeles, CA | gonzalezangel0510@yahoo.com","contact"),
 P("portfolio-site-green-xi.vercel.app | github.com/hellsangel05","contact"),
 Spacer(1,5),
 HRFlowable(width="100%",thickness=.7,color=colors.HexColor("#b2c3d9")),
 P("SUMMARY","section"),
 P("Hands-on experience launching paid Meta ads with a business partner, building AI-assisted websites and applications, configuring GoHighLevel CRM and AI voice reception, and automating ad-creative production with Higgsfield. Bilingual English/Spanish; interested in AI enablement, creative technology, web development and technical implementation."),
 P("TOOLS &amp; SKILLS","section"),
 P("<b>AI and creative:</b> ChatGPT, Claude, Higgsfield, generative video, prompt iteration, ad creative, ElevenLabs, Suno","small"),
 P("<b>Marketing and workflows:</b> Meta Ads Manager, Facebook/Instagram paid advertising, Meta Pixel, GoHighLevel CRM, lead forms, calendar booking, AI voice agents, automation","small"),
 P("<b>Development:</b> JavaScript, TypeScript, React, Next.js, Astro, Python, Supabase/PostgreSQL, GitHub, Vercel, Cloudflare, APIs, technical SEO","small"),
 P("RELEVANT EXPERIENCE","section"),
 P("ADGO Studios | Co-Founder - Web, AI and Marketing Systems | 2026 - Present","role"),
 P("- With a business partner, launched ADGO's own bilingual Meta Ads campaign for Facebook and Instagram in the Los Angeles / San Fernando Valley market.","bullet"),
 P("- Built and configured GoHighLevel CRM, website contact forms, consultation booking, automated acknowledgments, and Luna, an AI phone receptionist.","bullet"),
 P("- Developed a repeatable, automated Higgsfield ad-creative workflow; work across AI concepting, short-form video, messaging, design and business websites.","bullet"),
 P("- Work directly on client discovery, responsive websites, hosting, forms and service presentation; built Aurora Pool &amp; Spa using Astro and Cloudflare.","bullet"),
 P("Independent Software &amp; Creative Projects | Builder / Creator","role"),
 P("- Built web and mobile products using Next.js, React, TypeScript, Python and Supabase, including Raidio, Snapdex and a video-based Jump Trainer.","bullet"),
 P("- Created PSYCH! Open Source: a fiction and publishing platform with episode routes, archive, timeline, progress tracking and spoiler controls.","bullet"),
 P("The Home Depot | Hardware Sales Associate | 2025 - Present","role"),
 P("- Help customers troubleshoot hardware, electrical and plumbing questions; explain options clearly in English and Spanish.","bullet"),
 P("Earlier roles | Manufacturing, field service, construction support","role"),
 P("- Hands-on work involving customer service, following procedures, resolving issues and adapting to unfamiliar tasks.","bullet"),
 P("SELECTED WORK","section"),
 P("<b>ADGO Studios:</b> adgostudios.com &nbsp; | &nbsp; <b>Aurora:</b> aurora-pool-spa.adgostudios.workers.dev","small"),
 P("<b>AI workflow details:</b> portfolio-site-green-xi.vercel.app/ai-automation","small"),
 P("<b>Creative AI work:</b> portfolio-site-green-xi.vercel.app/creative-ai","small"),
 P("EDUCATION","section"),
 P("Granada Hills Charter High School | Diploma, 2016","small"),
]
doc=SimpleDocTemplate(str(output),pagesize=letter,leftMargin=44,rightMargin=44,topMargin=28,bottomMargin=27,title="Angel Gonzalez - AI and Technical Resume",author="Angel Gonzalez",pageCompression=1)
doc.build(story)
print(output.resolve())
