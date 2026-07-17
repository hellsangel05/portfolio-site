"use client";

export default function PrintButton() {
  return <button className="button button-secondary print-button" onClick={() => window.print()}>Print page</button>;
}
