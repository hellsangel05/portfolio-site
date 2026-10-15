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
 p('Web Development  |  CRM &amp; AI Automation  |  Creative Technology','tag'),
 p('San Fernando Valley, Los Angeles, CA  |  gonzalezangel0510@yahoo.com','contact'),
 p('portfolio-site-green-xi.vercel.app  |  github.com/hellsangel05','contact'),
 Spacer(1,4),HRFlowable(width='100%',thickness=.8,color=colors.HexColor('#B7C8E0')),
 p('PROFESSIONAL SUMMARY','section'),
 p('Developer and creative technologist with experience building websites and applications, configuring CRM and voice AI workflows, producing digital advertising, and troubleshooting technical systems. Background in precision manufacturing, field service, and customer-facing roles.'),
 p('CORE SKILLS','section'),
 p('<b>Development:</b> Next.js, React, TypeScript, JavaScript, Astro, Python, APIs, Supabase, PostgreSQL, GitHub, Vercel, Cloudflare','small'),
 p('<b>CRM &amp; marketing automation:</b> Lead capture, contact management, pipelines, scheduling, follow-ups, GoHighLevel, Voice AI','small'),
 p('<b>Paid social &amp; creative:</b> Meta Ads Manager, audience targeting, ad creative, Higgsfield, ElevenLabs, HyperFrames, video production','small'),
 p('PROJECT &amp; PROFESSIONAL EXPERIENCE','section'),
 p('ADGO Studios  |  Co-founder, Web Development &amp; Digital Systems  |  2026 - Present','role'),
 p('- Built business websites and lead-capture experiences, including an Astro/Cloudflare project for Aurora Pool &amp; Spa.','bullet'),
 p('- Configured CRM forms, scheduling, follow-up workflows, and Luna AI phone receptionist in GoHighLevel.','bullet'),
 p('- Launched paid social advertising using Meta Ads Manager; created short-form videos with Higgsfield, ElevenLabs, and HyperFrames.','bullet'),
 p('Independent Developer &amp; Creative Producer','role'),
 p('- Built application projects using Next.js and Supabase, including Raidio, Snapdex, and Jump Trainer. Created PSYCH!, an original fiction platform and released animated Episode 1.','bullet'),
 p('The Home Depot  |  Hardware Sales Associate  |  May 2025 - Present','role'),
 p('- Help customers troubleshoot hardware, plumbing, and electrical product questions; communicate technical solutions in English and Spanish.','bullet'),
 p('Chatsworth Products Inc.  |  Manufacturing Technician  |  Nov 2024 - May 2025','role'),
 p('- Assembled cabinets for computer/network hardware; measured, drilled, pressed and finished metal components to specification. Inspected units, repaired defects, and followed quality and safety procedures.','bullet'),
 p('Mosquito Squad  |  Pest Control Technician  |  May 2023 - Oct 2024','role'),
 p('- Delivered residential field services, maintained equipment and service records, supported customers, upsold services, and trained new hires.','bullet'),
 p('ADDITIONAL EXPERIENCE','section'),
 p('<b>Green Power Network:</b> Solar Canvasser (Feb-Apr 2023) - door-to-door homeowner outreach, qualifying solar prospects, generating leads, and setting sales appointments','small'),
 p('<b>City Private Security:</b> Security Guard (Oct 2018-Dec 2022) &nbsp; | &nbsp; <b>Food4Less:</b> Customer Clerk (Oct 2017-Apr 2020)','small'),
 p('<b>Sylmar Recreation Center:</b> Volunteer (2013-2016)','small'),
 p('EDUCATION','section'),p('Granada Hills Charter High School  |  High School Diploma, 2016','small')
]
SimpleDocTemplate(str(out),pagesize=letter,leftMargin=43,rightMargin=43,topMargin=31,bottomMargin=28,title='Angel Gonzalez | Web Development, CRM & Creative Technology',author='Angel Gonzalez',pageCompression=1).build(blocks)
print(out)
