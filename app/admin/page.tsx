"use client";
import { useState } from "react";

export default function Admin() {
  const [input, setInput] = useState("");
  const [seats, setSeats] = useState<number[] | null>(null);

  async function login() {
    if (input !== "yama") {
      alert("パスワードが違います");
      return;
    }
    const res = await fetch("/api/used-seats");
    const data = await res.json();
    setSeats(data.seats);
  }

  return (
    <div style={{ textAlign: "center", marginTop: 80 }}>
      {!seats && (
        <>
          <h2>管理者ログイン</h2>
          <input value={input} onChange={(e) => setInput(e.target.value)} />
          <button onClick={login}>ログイン</button>
        </>
      )}

      {seats && (
        <>
          <h2>使用済み席番号</h2>
          <p>{seats.join(", ")}</p>
        </>
      )}
    </div>
  );
}
