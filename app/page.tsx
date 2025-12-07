"use client";
import { useState } from "react";

export default function Home() {
  const [seat, setSeat] = useState<number | null>(null);
  const [error, setError] = useState("");

  async function draw() {
    const res = await fetch("/api/get-seat");
    const data = await res.json();
    if (data.error) {
      setError(data.error);
    } else {
      setSeat(data.seat);
    }
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0a1a33 0%, #12284a 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        color: "white",
        fontFamily: "'Noto Sans JP', sans-serif",
      }}
    >
      <div
        style={{
          textAlign: "center",
          width: "100%",
          maxWidth: "400px",
          padding: "40px 30px",
          borderRadius: "16px",
          background: "rgba(255,255,255,0.07)",
          backdropFilter: "blur(6px)",
          border: "1px solid rgba(255,255,255,0.15)",
          boxShadow: "0 0 20px rgba(0,0,0,0.3)",
        }}
      >
        <h1
          style={{
            fontSize: "26px",
            letterSpacing: "2px",
            marginBottom: "20px",
            color: "#ffd56b",
            fontWeight: 700,
          }}
        >
          2025年 NC事 忘年会
        </h1>

        <div
          style={{
            marginBottom: "25px",
            fontSize: "14px",
            opacity: 0.85,
          }}
        >
          〜 本日の席番号 〜
        </div>

        {!seat && !error && (
          <button
            onClick={draw}
            style={{
              width: "100%",
              padding: "16px 0",
              fontSize: "20px",
              fontWeight: 600,
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
              background:
                "linear-gradient(135deg, #e7c675 0%, #f3dca2 100%)",
              color: "#333",
              boxShadow: "0 0 10px rgba(255, 215, 130, 0.6)",
            }}
          >
            席番号を表示
          </button>
        )}

        {seat && (
          <div
            style={{
              marginTop: "20px",
              fontSize: "90px",
              fontWeight: 800,
              animation: "fadeIn 0.8s ease-out",
              color: "#ffe8a6",
              textShadow: "0 0 12px rgba(255, 220, 140, 0.8)",
            }}
          >
            {seat}
          </div>
        )}

        {error && (
          <div
            style={{
              marginTop: "20px",
              color: "#ff8f8f",
              fontSize: "20px",
              fontWeight: 600,
            }}
          >
            {error}
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.7);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}
