"use client";

export default function PrintButton() {
  return <button className="button button-primary print-button" onClick={() => window.print()}>Print / Save as PDF</button>;
}
