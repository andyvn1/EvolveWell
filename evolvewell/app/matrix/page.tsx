"use client";

import { useState } from "react";

const data = {
  columns: [
    { id: "cto", label: "CTO / PLATFORM", owner: "OLIVER", color: "#1a6b8a" },
    { id: "coo", label: "COO / COMMERCE", owner: "HALLAND", color: "#1a6b4a" },
    { id: "cpo", label: "CPO / SYSTEMS", owner: "YAHYA", color: "#6b4a1a" },
    { id: "cgo", label: "CGO / DATA", owner: "ANDY", color: "#6b1a5a" },
  ],
  rows: [
    {
      id: "coaching", label: "COACHING SESSIONS", sublabel: "20% Fee", ownerCol: "cto",
      cells: {
        cto: { owner: true, role: "MODERATOR", note: "Oliver manages" },
        coo: { items: ["Backend", "Support"] },
        cpo: { items: ["API", "Integration"] },
        cgo: { items: ["Analytics", "Tracking"] },
      },
    },
    {
      id: "shop", label: "EQUIPMENT SHOP", sublabel: "Direct Sales", ownerCol: "coo",
      cells: {
        cto: { items: ["Security /", "Payments"] },
        coo: { owner: true, role: "SHOP WORKER", note: "Halland manages" },
        cpo: { items: ["UI / Catalog", "Support"] },
        cgo: { items: ["Conversion", "Pixels"] },
      },
    },
    {
      id: "digital", label: "DIGITAL MARKET", sublabel: "15% Comm", ownerCol: "cpo",
      cells: {
        cto: { items: ["Video", "Hosting"] },
        coo: { items: ["Payment", "Logic"] },
        cpo: { owner: true, role: "UX CONTRACTOR", note: "Yahya manages" },
        cgo: { items: ["Funnel", "Strategy"] },
      },
    },
    {
      id: "subscriptions", label: "SUBSCRIPTIONS", sublabel: "$29/mo Tools", ownerCol: "cgo",
      cells: {
        cto: { items: ["User", "Auth"] },
        coo: { items: ["Billing", "Cycles"] },
        cpo: { items: ["Dashboard", "Features"] },
        cgo: { owner: true, role: "GROWTH MGR", note: "Andy manages" },
      },
    },
  ],
};

export default function MatrixOrg() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div style={{ minHeight: "100vh", background: "#0f1117", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "40px 20px" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Barlow+Condensed:wght@300;500;700;900&display=swap');
        .cell-hover { transition: all 0.18s ease; }
        .cell-hover:hover { transform: scale(1.02); z-index: 10; }
        .owner-pulse { animation: pulse 2.5s ease-in-out infinite; }
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(255,220,80,0.4); }
          50% { box-shadow: 0 0 0 6px rgba(255,220,80,0); }
        }
      `}</style>

      <div style={{ textAlign: "center", marginBottom: 32 }}>
        <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 11, letterSpacing: 6, color: "#555", marginBottom: 6, textTransform: "uppercase" }}>Organization Structure</div>
        <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 32, letterSpacing: 3, color: "#f0f0f0", textTransform: "uppercase" }}>Matrix Org Chart</div>
        <div style={{ width: 60, height: 2, background: "#ffd540", margin: "10px auto 0" }} />
      </div>

      <div style={{ width: "100%", maxWidth: 920, overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: 4 }}>
          <thead>
            <tr>
              <th style={{ width: "18%", padding: 0 }}>
                <div style={{ background: "#1a1d26", border: "1px solid #2a2d3a", borderRadius: 6, padding: "12px 10px", height: 80, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 10, letterSpacing: 2, color: "#444", textTransform: "uppercase", textAlign: "center" }}>Revenue<br />Streams</span>
                </div>
              </th>
              {data.columns.map((col) => (
                <th key={col.id} style={{ width: "20.5%", padding: 0, paddingLeft: 4 }}>
                  <div style={{ background: col.color, borderRadius: 6, padding: "14px 10px", height: 80, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 4 }}>
                    <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 13, letterSpacing: 1, color: "rgba(255,255,255,0.95)", textTransform: "uppercase", textAlign: "center", lineHeight: 1.2 }}>{col.label}</span>
                    <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: "rgba(255,255,255,0.6)", letterSpacing: 1 }}>({col.owner})</span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.rows.map((row, ri) => (
              <tr key={row.id}>
                <td style={{ padding: 0, paddingTop: 4 }}>
                  <div style={{ background: "#1a1d26", border: "1px solid #2a2d3a", borderRadius: 6, padding: "14px 12px", minHeight: 88, display: "flex", flexDirection: "column", justifyContent: "center", gap: 4 }}>
                    <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 12, letterSpacing: 1, color: "#d0d0d0", textTransform: "uppercase", lineHeight: 1.2 }}>{ri + 1}. {row.label}</span>
                    <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 9, color: "#ffd540", letterSpacing: 0.5 }}>{row.sublabel}</span>
                  </div>
                </td>
                {data.columns.map((col) => {
                  const cell = row.cells[col.id as keyof typeof row.cells];
                  const isOwner = cell.owner;
                  const key = `${row.id}-${col.id}`;
                  return (
                    <td key={col.id} style={{ padding: 0, paddingTop: 4, paddingLeft: 4, verticalAlign: "top" }}>
                      <div
                        className={`cell-hover ${isOwner ? "owner-pulse" : ""}`}
                        onMouseEnter={() => setHovered(key)}
                        onMouseLeave={() => setHovered(null)}
                        style={{
                          background: isOwner ? col.color : "#252836",
                          border: isOwner ? `2px solid #ffd540` : hovered === key ? `1px solid ${col.color}` : "1px solid #3a3f52",
                          borderRadius: 6,
                          padding: isOwner ? "14px 12px" : "12px 10px",
                          minHeight: 88,
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          gap: isOwner ? 6 : 4,
                          cursor: "default",
                          position: "relative",
                        }}
                      >
                        {isOwner ? (
                          <>
                            <div style={{ position: "absolute", top: 6, right: 8, fontFamily: "'Space Mono', monospace", fontSize: 7, letterSpacing: 1, color: "#ffd540", textTransform: "uppercase" }}>★ OWNER</div>
                            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 15, letterSpacing: 2, color: "#fff", textTransform: "uppercase" }}>{cell.role}</span>
                            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 8, color: "rgba(255,255,255,0.6)" }}>{cell.note}</span>
                          </>
                        ) : (
                          cell.items?.map((item, i) => (
                            <span key={i} style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: hovered === key ? "#fff" : "#b0b8cc", lineHeight: 1.6, transition: "color 0.18s" }}>{item}</span>
                          ))
                        )}
                      </div>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>

        <div style={{ display: "flex", gap: 28, marginTop: 20, justifyContent: "center", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 16, height: 16, borderRadius: 3, background: "#1a6b8a", border: "2px solid #ffd540" }} />
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 9, color: "#aaa", letterSpacing: 1 }}>Owns & leads this revenue stream</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 16, height: 16, borderRadius: 3, background: "#252836", border: "1px solid #3a3f52" }} />
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 9, color: "#aaa", letterSpacing: 1 }}>Supports but does not own</span>
          </div>
        </div>
      </div>
    </div>
  );
}
