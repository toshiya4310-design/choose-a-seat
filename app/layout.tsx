export const metadata = {
  title: "2025年 NC事 忘年会",
  description: "席番号ランダム抽選システム",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
