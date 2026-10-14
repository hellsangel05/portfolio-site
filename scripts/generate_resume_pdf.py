"""Generate Angel Gonzalez's ATS-friendly one-page resume."""
from pathlib import Path
import sys
from reportlab.lib import colors
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable, KeepTogether
from reportlab.lib.enums import TA_LEFT

out=Path(sys.argv[1] if len(sys.argv)>1 else '/mnt/data/angel-gonzalez-resume-updated.pdf')
out.parent.mkdir(parents=True,exist_ok=True)
navy=colors.HexColor('#183558'); blue=colors.HexColor('#245ed2'); ink=colors.HexColor('#24374e'); muted=colors.HexColor('#51627b')
styles={
'name':ParagraphStyle('name',fontName='Helvetica-Bold',fontSize=20,leading=23,textColor=navy,spaceAfter=2),
'sub':ParagraphStyle('sub',fontName='Helvetica-Bold',fontSize=9.4,leading=11,textColor=blue,spaceAfter=4),
'contact':ParagraphStyle('contact',fontName='Helvetica',fontSize=8.15,leading=10.5,textColor=muted,spaceAfter=2),
'section':ParagraphStyle('section',fontName='Helvetica-Bold',fontSize=9,leading=11,textColor=blue,spaceBefore=10,spaceAfter=4),
'body':ParagraphStyle('body',fontName='Helvetica',fontSize=8.15,leading=11.2,textColor=ink,spaceAfter=2),
'small':ParagraphStyle('small',fontName='Helvetica',fontSize=7.95,leading=10.8,textColor=ink,spaceAfter=1),
'role':ParagraphStyle('role',fontName='Helvetica-Bold',fontSize=8.6,leading=11.5,textColor=navy,spaceBefore=4,spaceAfter=1),
'bullet':ParagraphStyle('bullet',fontName='Helvetica',fontSize=8.05,leading=10.9,textColor=ink,spaceAfter=2,leftIndent=10,firstLineIndent=-9),
}
def P(t,k='body'):return Paragraph(t,styles[k])
s=[
P('Angel Gonzalez','name'),
P('Web Development  |  CRM &amp; AI Automation  |  Creative Technology','sub'),
P('San Fernando Valley, Los Angeles, CA  |  English / Spanish  |  gonzalezangel0510@yahoo.com','contact'),
P('portfolio-site-green-xi.vercel.app  |  github.com/hellsangel05','contact'),
Spacer(1,4), HRFlowable(width='100%',thickness=.8,color=colors.HexColor('#bdcbdd')),
P('PROFILE','section'),
P('Web developer and creative technologist experienced in full-stack applications, client websites, CRM workflows, AI voice reception, Meta advertising, and AI-assisted video production. I build, test, and deploy digital tools for real business needs.'),
P('CORE SKILLS','section'),
P('<b>CRM &amp; marketing:</b> Contact and lead management, pipelines, lead forms, appointment scheduling, automated follow-ups, Voice AI, Meta Ads Manager, Meta Pixel, Search Console','small'),
P('<b>Development:</b> JavaScript, TypeScript, React, Next.js, Astro, Python, APIs, Supabase / PostgreSQL, GitHub, Vercel, Cloudflare','small'),
P('<b>Creative production:</b> Higgsfield, Kling, ElevenLabs, HyperFrames, generative video, motion graphics, ad copywriting, campaign creative','small'),
P('RELEVANT EXPERIENCE','section'),
P('ADGO Studios  |  Co-founder - Websites, AI Automation &amp; Digital Marketing  |  2026-Present','role'),
P('- Built responsive business websites and lead-capture experiences, including Aurora Pool &amp; Spa on Astro and Cloudflare Workers.','bullet'),
P('- Configured CRM workflows, web forms, appointments, automated messages, and Luna AI phone receptionist using GoHighLevel.','bullet'),
P('- Launched a paid Facebook and Instagram campaign through Meta Ads Manager, covering targeting, creative development, and delivery.','bullet'),
P('- Produced short-form video ad concepts using Higgsfield, ElevenLabs, and HyperFrames; managed business outreach and client communication.','bullet'),
P('Independent Software Developer &amp; Creative Producer','role'),
P('- Developed applications including Raidio, Snapdex, and Jump Trainer using Next.js, TypeScript, Supabase, and AI-assisted development tools.','bullet'),
P('- Created PSYCH!, an original sci-fi universe with a published animated Episode 1 and a Next.js story platform, archive, and timeline.','bullet'),
P('OTHER PROFESSIONAL EXPERIENCE','section'),
P('<b>The Home Depot - Hardware Sales Associate | 2025-Present:</b> Technical product guidance and troubleshooting in hardware, electrical, and plumbing; bilingual customer service.','small'),
P('<b>Mosquito Squad - Field Technician:</b> On-site customer service, equipment use, service procedures, and independent field work.','small'),
P('<b>Amazon DSP - Delivery Associate:</b> Time-sensitive route execution, logistics, and customer delivery service.','small'),
P('<b>Construction / HVAC Helper:</b> Hands-on installation support, tools and materials, and jobsite coordination.','small'),
P('<b>Manufacturing / Production:</b> Production operations, safety procedures, and quality-conscious work.','small'),
P('SELECTED WORK &amp; EDUCATION','section'),
P('<b>Portfolio:</b> portfolio-site-green-xi.vercel.app  |  <b>ADGO:</b> adgostudios.com  |  <b>PSYCH!:</b> psych-open-source.vercel.app','small'),
P('Granada Hills Charter High School  |  High School Diploma, 2016','small'),
]
doc=SimpleDocTemplate(str(out),pagesize=letter,leftMargin=43,rightMargin=43,topMargin=29,bottomMargin=27,title='Angel Gonzalez - Web, CRM Automation, Creative Technology',author='Angel Gonzalez')
doc.build(s)
print(out)
