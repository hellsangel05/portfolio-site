"""Generate two consistent, ATS-friendly resumes and the legacy download alias."""
from pathlib import Path
from shutil import copyfile
import sys
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable
from reportlab.lib import colors
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

font_dir = Path('/usr/share/fonts/truetype/dejavu')
pdfmetrics.registerFont(TTFont('ResumeSans', str(font_dir / 'DejaVuSans.ttf')))
pdfmetrics.registerFont(TTFont('ResumeSans-Bold', str(font_dir / 'DejaVuSans-Bold.ttf')))
pdfmetrics.registerFontFamily('ResumeSans', normal='ResumeSans', bold='ResumeSans-Bold')

ROOT = Path(__file__).resolve().parents[1]
OUT = Path(sys.argv[1]) if len(sys.argv) > 1 else ROOT / 'public'
OUT.mkdir(parents=True, exist_ok=True)
BLUE = colors.HexColor('#2053B6')
INK = colors.HexColor('#24364C')
styles = {
    'name': ParagraphStyle('name', fontName='Helvetica-Bold', fontSize=23, leading=25, textColor=INK, spaceAfter=4),
    'tag': ParagraphStyle('tag', fontName='Helvetica-Bold', fontSize=10, leading=13, textColor=BLUE, spaceAfter=5),
    'contact': ParagraphStyle('contact', fontName='Helvetica', fontSize=9, leading=12, textColor=INK, spaceAfter=2),
    'section': ParagraphStyle('section', fontName='Helvetica-Bold', fontSize=9.5, leading=12, textColor=BLUE, spaceBefore=6, spaceAfter=4),
    'body': ParagraphStyle('body', fontName='Helvetica', fontSize=9.3, leading=12, textColor=INK, spaceAfter=2),
    'role': ParagraphStyle('role', fontName='Helvetica-Bold', fontSize=9.3, leading=12, textColor=INK, spaceBefore=4, spaceAfter=2, keepWithNext=True),
    'bullet': ParagraphStyle('bullet', fontName='Helvetica', fontSize=9.3, leading=12, textColor=INK, leftIndent=9, firstLineIndent=-8, spaceAfter=2),
}

for style in styles.values():
    style.fontName = 'ResumeSans-Bold' if style.fontName.endswith('-Bold') else 'ResumeSans'

def p(text, style='body'):
    return Paragraph(text, styles[style])

def header(title):
    return [p('Angel Gonzalez', 'name'), p(title, 'tag'),
        p('San Fernando Valley, CA 91340 | <link href="tel:+18184470902">(818) 447-0902</link> | English / Spanish', 'contact'),
        p('<link href="mailto:gonzalezangel0510@yahoo.com">gonzalezangel0510@yahoo.com</link> | <link href="https://angel-gonzalez-dev.vercel.app/">angel-gonzalez-dev.vercel.app</link>', 'contact'),
        p('<link href="https://github.com/hellsangel05">github.com/hellsangel05</link> | <link href="https://www.linkedin.com/in/angel-gonzalez-85b621229/">linkedin.com/in/angel-gonzalez-85b621229</link>', 'contact'),
        p('Available immediately | No visa sponsorship required', 'contact'),
        Spacer(1, 4), HRFlowable(width='100%', thickness=.7, color=colors.HexColor('#B7C8E0'))]

def employment():
    return [p('ADDITIONAL PROFESSIONAL EXPERIENCE', 'section'),
        p('The Home Depot | Hardware Sales Associate (part-time) | May 2025 - Present', 'role'),
        p('Troubleshoot hardware, plumbing, and electrical product questions; explain options in English and Spanish.'),
        p('Chatsworth Products Incorporated | Manufacturing Technician | Nov 2024 - May 2025', 'role'),
        p('Assembled computer/network hardware cabinets; inspected components, repaired defects, and followed specifications.'),
        p('Mosquito Squad | Pest Control Technician | May 2023 - Oct 2024', 'role'),
        p('Delivered field services, maintained equipment and records, supported customers, and trained new hires.'),
        p('<b>Green Power Network:</b> Solar Sales Canvasser | Feb - Apr 2023', 'contact'),
        p('<b>City Private Security:</b> Security Guard | Oct 2018 - Dec 2022', 'contact'),
        p('<b>Food4Less:</b> Customer Clerk | Oct 2017 - Apr 2020', 'contact'),
        p('EDUCATION &amp; COMMUNITY', 'section'),
        p('Granada Hills Charter High School | High school diploma, 2016', 'contact'),
        p('Sylmar Recreation Center | Volunteer | Jun 2013 - May 2016', 'contact')]

common_role = p('ADGO Studios | Co-founder, Web Development &amp; Digital Systems | Jan 2026 - Present', 'role')
developer = header('Web Developer &amp; Creative Technologist | Applications &amp; Digital Production') + [
    p('SUMMARY', 'section'),
    p('Web developer and creative technologist building client websites, full-stack applications, and AI-enabled business workflows. Work spans requirements, implementation, integrations, testing, deployment, and AI-assisted creative production.'),
    p('TECHNICAL SKILLS', 'section'),
    p('<b>Development:</b> JavaScript, TypeScript, React, Next.js, Astro, Python, APIs, responsive design', 'contact'),
    p('<b>Data &amp; delivery:</b> Supabase, PostgreSQL, authentication, GitHub, Vercel, Cloudflare, debugging', 'contact'),
    p('<b>AI &amp; systems:</b> AI-assisted development, CRM implementation, voice AI, ChatGPT, Claude, ElevenLabs', 'contact'),
    p('RELEVANT EXPERIENCE', 'section'), common_role,
    p('- Build and deploy responsive business websites and lead-intake experiences; handle discovery, integrations, testing, and client feedback.', 'bullet'),
    p('- Configure CRM forms, appointment scheduling, follow-up workflows, and the Luna AI receptionist. Produce advertising creative using Higgsfield, ElevenLabs, and HyperFrames.', 'bullet'),
    p('SELECTED INDEPENDENT &amp; CLIENT PROJECTS', 'section'),
    p('Raidio | Next.js, TypeScript, Supabase, PostgreSQL', 'role'),
    p('Built an AI radio application with station programming, synchronized shared-playhead listening, generated audio workflows, and separate draft and published station rundowns.'),
    p('Jump Trainer | Python, NumPy, MediaPipe, WebAssembly', 'role'),
    p('Developed on-device jump-video analysis using pose tracking, takeoff and landing detection, flight-time physics, and confidence scoring. Video processing stays in the browser.'),
    p('Aurora Pool &amp; Spa | Astro, TypeScript, Cloudflare', 'role'),
    p('Delivered responsive service pages, local coverage information, optimized client photography, and CRM-connected contact paths through ADGO Studios.'),
    p('PSYCH! | Next.js, Supabase, AI-assisted animation', 'role'),
    p('Created an original science-fiction universe, built its episode-reading platform with a timeline and spoiler controls, and released an animated first episode.'),
] + employment()

automation = header('CRM &amp; AI Implementation | Workflow Automation &amp; Technical Operations') + [
    p('SUMMARY', 'section'),
    p('Web developer and technical implementer connecting websites, CRM lead intake, appointment scheduling, automated follow-up, and voice AI through ADGO Studios. Bring hands-on configuration, conversation testing, technical troubleshooting, and bilingual customer communication.'),
    p('CORE SKILLS', 'section'),
    p('<b>Business systems:</b> CRM implementation, contact pipelines, lead capture, scheduling, workflow automation', 'contact'),
    p('<b>Technical:</b> JavaScript, TypeScript, APIs, web forms, Next.js, Astro, Supabase, Vercel, Cloudflare', 'contact'),
    p('<b>Supporting tools:</b> GoHighLevel, ChatGPT, Claude, Meta Ads Manager, Higgsfield, ElevenLabs, HyperFrames', 'contact'),
    p('RELEVANT EXPERIENCE', 'section'), common_role,
    p('- Implement CRM lead capture, contact records, consultation calendars, acknowledgments, and follow-up workflows; connect business websites and inquiry forms.', 'bullet'),
    p('- Configure Luna AI phone reception with a business knowledge base, service-question handling, lead qualification, and appointment options. Develop call-handling logic and test responses.', 'bullet'),
    p('- Handle client discovery, communication, integrations, and troubleshooting. Launch paid Meta advertising and deliver AI-assisted short-form creative.', 'bullet'),
    p('SELECTED IMPLEMENTATION PROJECTS', 'section'),
    p('Luna AI receptionist | Voice AI &amp; appointment scheduling', 'role'),
    p('Configured customer-facing phone reception around service questions, lead qualification, booking options, and human follow-up. Tested conversations against business information.'),
    p('ADGO Studios &amp; Aurora | CRM intake &amp; customer workflows', 'role'),
    p('Implemented website inquiry paths, contact management, booking options, and automated responses. Designed separate transactional and marketing SMS consent choices.'),
    p('Web &amp; creative delivery | Astro, Next.js, Cloudflare, AI production tools', 'role'),
    p('Built client-facing websites and service pages, integrated business tools, and produced advertising assets that connect campaign messaging to customer contact paths.'),
] + employment()

for name, title, blocks in [
    ('angel-gonzalez-developer-resume.pdf', 'Angel Gonzalez | Web Development & Creative Technology', developer),
    ('angel-gonzalez-automation-resume.pdf', 'Angel Gonzalez | CRM & AI Implementation', automation),
]:
    target = OUT / name
    SimpleDocTemplate(str(target), pagesize=letter, leftMargin=39, rightMargin=39, topMargin=27, bottomMargin=27,
        title=title, author='Angel Gonzalez', pageCompression=1).build(blocks)
    print(target)
copyfile(OUT / 'angel-gonzalez-developer-resume.pdf', OUT / 'angel-gonzalez-resume.pdf')
