from pathlib import Path
import sys

from reportlab.lib.colors import HexColor
from reportlab.lib.pagesizes import LETTER
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import Paragraph, SimpleDocTemplate


OUTPUT = Path(sys.argv[1] if len(sys.argv) > 1 else "output/pdf/angel-gonzalez-resume.pdf")
OUTPUT.parent.mkdir(parents=True, exist_ok=True)

INK = HexColor("#171719")
MUTED = HexColor("#54545a")
ACCENT = HexColor("#b8442e")
RULE = HexColor("#d0cec8")

styles = getSampleStyleSheet()

name_style = ParagraphStyle(
    "Name",
    parent=styles["Normal"],
    fontName="Helvetica-Bold",
    fontSize=26,
    leading=27,
    textColor=INK,
    spaceAfter=3,
)
title_style = ParagraphStyle(
    "Title",
    parent=styles["Normal"],
    fontName="Helvetica",
    fontSize=11,
    leading=13.5,
    textColor=MUTED,
    spaceAfter=5,
)
contact_style = ParagraphStyle(
    "Contact",
    parent=styles["Normal"],
    fontName="Helvetica",
    fontSize=8.6,
    leading=10.5,
    textColor=MUTED,
    spaceAfter=6,
)
section_style = ParagraphStyle(
    "Section",
    parent=styles["Normal"],
    fontName="Helvetica-Bold",
    fontSize=8.4,
    leading=10.5,
    textColor=ACCENT,
    uppercase=True,
    spaceBefore=7,
    spaceAfter=4,
    borderWidth=0,
    borderPadding=0,
)
body_style = ParagraphStyle(
    "Body",
    parent=styles["Normal"],
    fontName="Helvetica",
    fontSize=8.9,
    leading=11.2,
    textColor=INK,
    spaceAfter=2,
)
entry_style = ParagraphStyle(
    "Entry",
    parent=body_style,
    fontName="Helvetica-Bold",
    fontSize=9.5,
    leading=11.8,
    spaceBefore=2,
    spaceAfter=1,
)
bullet_style = ParagraphStyle(
    "Bullet",
    parent=body_style,
    leftIndent=10,
    firstLineIndent=-7,
    bulletIndent=0,
    spaceAfter=1.2,
)
skills_style = ParagraphStyle(
    "Skills",
    parent=body_style,
    fontSize=8.5,
    leading=10.6,
)


def section(label: str) -> Paragraph:
    return Paragraph(label.upper(), section_style)


def bullet(text: str) -> Paragraph:
    return Paragraph(text, bullet_style, bulletText="-")


story = [
    Paragraph("Angel Gonzalez", name_style),
    Paragraph("Product-Minded Full-Stack Developer", title_style),
    Paragraph(
        'Los Angeles, CA &nbsp;|&nbsp; '
        '<a href="mailto:gonzalezangel0510@yahoo.com" color="#54545a">gonzalezangel0510@yahoo.com</a> &nbsp;|&nbsp; '
        '<a href="https://github.com/hellsangel05" color="#54545a">github.com/hellsangel05</a> &nbsp;|&nbsp; '
        '<a href="https://portfolio-site-green-xi.vercel.app" color="#54545a">portfolio-site-green-xi.vercel.app</a>',
        contact_style,
    ),
    section("Summary"),
    Paragraph(
        "Product-minded full-stack developer and co-founder with hands-on experience taking web and mobile products "
        "from concept through interface design, implementation, database architecture, AI integration, and deployment. "
        "Seeking a junior product engineering, prototyping, or creative-technology role.",
        body_style,
    ),
    section("Selected engineering projects"),
    Paragraph('<b>Raidio</b> | AI media platform | <a href="https://portfolio-site-green-xi.vercel.app/work/raidio" color="#b8442e">Case study</a>', entry_style),
    bullet("Built synchronized radio playback, station studios, generated-music workflows, voice hosts, catalogs, libraries, and resilient rundown publishing with Next.js, TypeScript, Supabase, and PostgreSQL."),
    Paragraph('<b>Snapdex</b> | Creator economy and game | <a href="https://portfolio-site-green-xi.vercel.app/work/snapdex" color="#b8442e">Case study</a>', entry_style),
    bullet("Built uploads, rarity tiers, packs, collections, trading, marketplace flows, creator royalties, supply burns, and deterministic arena battles with atomic database operations."),
    Paragraph('<b>Jump Trainer</b> | Computer vision coaching | <a href="https://portfolio-site-green-xi.vercel.app/work/jump-trainer" color="#b8442e">Case study</a>', entry_style),
    bullet("Built an Expo mobile experience and Python analysis service that estimates vertical jump from flight-time physics, reports confidence, rejects unreliable clips, and creates training plans."),
    section("Product-building experience"),
    Paragraph("ADGO Ventures | Co-Founder / Full-Stack Product Developer | Present", entry_style),
    bullet("Translate product concepts into user flows, technical plans, responsive interfaces, database-backed applications, and deployed builds across media, creator tools, sports, civic technology, and community products."),
    bullet("Design and implement systems including shared media playback, creator economies, semantic idea graphs, video-analysis pipelines, privacy controls, moderation, and progression loops."),
    Paragraph("ADGO Studios | Co-Founder / Creative and Automation Developer | Present", entry_style),
    bullet("Develop websites and creative workflows for image and video generation, advertising assets, lead capture, CRM operations, and automation."),
    section("Skills"),
    Paragraph("<b>Development:</b> TypeScript, JavaScript, React, Next.js, Expo, React Native, Python, Supabase, PostgreSQL, Vercel, GitHub, APIs", skills_style),
    Paragraph("<b>Product:</b> Product ideation, rapid prototyping, responsive interfaces, authentication, database-backed applications, deployment, debugging, iteration", skills_style),
    Paragraph("<b>AI and automation:</b> LLM integration, prompt design, image generation, video generation, workflow automation, computer vision workflows", skills_style),
    section("Additional experience and education"),
    Paragraph("The Home Depot | Hardware Sales Associate | May 2025 - Present", body_style),
    Paragraph("Chatsworth Products Incorporated | Manufacturing Technician | Nov 2024 - May 2025", body_style),
    Paragraph("Mosquito Squad | Pest Control Technician | May 2023 - Oct 2024", body_style),
    Paragraph("Earlier retail and security roles | 2017 - 2023", body_style),
    Paragraph("Granada Hills Charter High School | High school diploma | 2016", body_style),
]


def draw_page(canvas, doc):
    canvas.saveState()
    canvas.setStrokeColor(RULE)
    canvas.setLineWidth(0.5)
    canvas.line(doc.leftMargin, 0.43 * inch, LETTER[0] - doc.rightMargin, 0.43 * inch)
    canvas.setFont("Helvetica", 6.8)
    canvas.setFillColor(MUTED)
    canvas.drawString(doc.leftMargin, 0.28 * inch, "Angel Gonzalez - Resume")
    canvas.drawRightString(LETTER[0] - doc.rightMargin, 0.28 * inch, "Updated July 2026")
    canvas.restoreState()


document = SimpleDocTemplate(
    str(OUTPUT),
    pagesize=LETTER,
    rightMargin=0.48 * inch,
    leftMargin=0.48 * inch,
    topMargin=0.42 * inch,
    bottomMargin=0.52 * inch,
    title="Angel Gonzalez Resume",
    author="Angel Gonzalez",
    subject="Product-Minded Full-Stack Developer",
)
document.build(story, onFirstPage=draw_page, onLaterPages=draw_page)
print(OUTPUT.resolve())
