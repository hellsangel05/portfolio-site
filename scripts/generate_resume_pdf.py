"""Generate the portfolio's focused, ATS-friendly one-page PDF resume."""
from pathlib import Path
import sys
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable
from reportlab.lib import colors
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle
out=Path(sys.argv[1] if len(sys.argv)>1 else 'public/angel-gonzalez-resume.pdf')
out.parent.mkdir(parents=True,exist_ok=True)
blue=colors.HexColor('#2053B6');dark=colors.HexColor('#172A45');ink=colors.HexColor('#293A50');muted=colors.HexColor('#56657B')
s={
 'name':ParagraphStyle('name',fontName='Helvetica-Bold',fontSize=21,leading=23,textColor=dark,spaceAfter=3),
 'tag':ParagraphStyle('tag',fontName='Helvetica-Bold',fontSize=9.1,leading=12,textColor=blue,spaceAfter=4),
 'contact':ParagraphStyle('contact',fontName='Helvetica',fontSize=8.4,leading=11,textColor=muted,spaceAfter=2),
 'section':ParagraphStyle('section',fontName='Helvetica-Bold',fontSize=9.2,leading=11.4,textColor=blue,spaceBefore=8,spaceAfter=4),
 'body':ParagraphStyle('body',fontName='Helvetica',fontSize=8.55,leading=12.2,textColor=ink,spaceAfter=2.5),
 'role':ParagraphStyle('role',fontName='Helvetica-Bold',fontSize=8.75,leading=12,textColor=dark,spaceBefore=4,spaceAfter=2),
 'bullet':ParagraphStyle('bullet',fontName='Helvetica',fontSize=8.3,leading=11.5,leftIndent=10,firstLineIndent=-8,textColor=ink,spaceAfter=2),
 'small':ParagraphStyle('small',fontName='Helvetica',fontSize=8.2,leading=11.4,textColor=ink,spaceAfter=2)
}
def p(x,sty='body'):return Paragraph(x,s[sty])
blocks=[
 p('Angel Gonzalez','name'),
 p('Applied AI Development | Full-Stack Engineering | AI Automation','tag'),
 p('San Fernando Valley, Los Angeles, CA | gonzalezangel0510@yahoo.com | English &amp; Spanish','contact'),
 p('portfolio-site-green-xi.vercel.app | github.com/hellsangel05','contact'),
 Spacer(1,4),HRFlowable(width='100%',thickness=.8,color=colors.HexColor('#B7C8E0')),
 p('PROFESSIONAL SUMMARY','section'),
 p('Applied AI developer who designs and ships full-stack AI products: an LLM extraction pipeline with schema validation and human review, a computer-vision measurement engine, and a generative-audio platform. Also sets up AI phone reception, CRM automation, and websites for local businesses. Builds with AI coding tools while owning architecture, testing, and deployment.'),
 p('CORE SKILLS','section'),
 p('<b>Applied AI:</b> Claude and OpenAI APIs, structured output with schema validation (Zod), embeddings and vector search, MediaPipe, NumPy, ElevenLabs, voice AI','small'),
 p('<b>Development:</b> TypeScript, JavaScript, Python, React, Next.js, Expo/React Native, FastAPI, Supabase, PostgreSQL (RLS), GitHub Actions, Vercel, Cloudflare','small'),
 p('<b>Business automation:</b> GoHighLevel CRM, lead capture, scheduling, follow-up workflows, Meta Ads Manager, Higgsfield, HyperFrames','small'),
 p('AI PROJECTS','section'),
 p('- <b>Civic Mirror</b> - Claude pipeline turns ballot pamphlets into Zod-validated, cited drafts with human review before publishing; bilingual Next.js/Supabase app with row-level security and CI.','bullet'),
 p('- <b>Jump Trainer</b> - Python/MediaPipe engine measures vertical jump from phone video using flight-time physics, confidence ranges, clip rejection, and versioned algorithms; Expo mobile app.','bullet'),
 p('- <b>Raidio</b> - AI-generated music and voice-host radio network; synchronized wall-clock playhead; failure-tolerant generation. Next.js and Supabase.','bullet'),
 p('- <b>Co-Lab</b> - LLM routing and embeddings-based vector search link ideas into an idea network; batched classification controls AI costs.','bullet'),
 p('EXPERIENCE','section'),
 p('Applied-AI products | Co-founder &amp; Full-Stack Engineer | 2026 - Present','role'),
 p('- Design and build applied-AI products end to end with a partner, working across UX, backend systems, AI integration, and deployment.','bullet'),
 p('ADGO Studios | Co-founder, AI Automation &amp; Web Development | 2026 - Present','role'),
 p('- Configured Luna AI phone reception, CRM forms, scheduling, and follow-up workflows in GoHighLevel. Built websites, launched Meta ads and produced AI video creative.','bullet'),
 p('The Home Depot | Hardware Sales Associate | May 2025 - Present','role'),
 p('- Product troubleshooting and guidance in hardware, plumbing, and electrical; English and Spanish customer service.','bullet'),
 p('Chatsworth Products Inc. | Manufacturing Technician | Nov 2024 - May 2025','role'),
 p('- Assembled computer and network hardware cabinets to specification; inspected units, repaired defects, and followed quality procedures.','bullet'),
 p('EARLIER EXPERIENCE','section'),
 p('<b>Mosquito Squad:</b> Pest Control Technician (May 2023-Oct 2024) | <b>Green Power Network:</b> Solar Canvasser (Feb-Apr 2023)','small'),
 p('<b>City Private Security:</b> Security Guard (Oct 2018-Dec 2022) | <b>Food4Less:</b> Customer Clerk (Oct 2017-Apr 2020)','small'),
 p('<b>Sylmar Recreation Center:</b> Volunteer (2013-2016)','small'),
 p('EDUCATION','section'),p('Granada Hills Charter High School | High School Diploma, 2016','small')
]
SimpleDocTemplate(str(out),pagesize=letter,leftMargin=43,rightMargin=43,topMargin=31,bottomMargin=28,title='Angel Gonzalez | Applied AI Developer',author='Angel Gonzalez',pageCompression=1).build(blocks)
print(out)
