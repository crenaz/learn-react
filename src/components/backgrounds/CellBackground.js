import { useState, useEffect } from "react";

const COLORS = ["#FFD980", "#FF8480", "#81FF80", "#80EAFF"];

export default function CellBackground() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Initial check
    setIsDark(document.documentElement.classList.contains("dark"));

    // Create observer to watch for class changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          setIsDark(document.documentElement.classList.contains("dark"));
        }
      });
    });

    // Start observing
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Cleanup
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="absolute top-0 left-0 w-full h-full grid transition-colors duration-200"
      style={{
        gridTemplateColumns: "repeat(auto-fill, 32px)",
        gridTemplateRows: "repeat(auto-fill, 32px)",
        background: isDark ? "#1f2937" : "white", // dark:bg-gray-800
      }}
    >
      {[...Array(3000)].map((_, i) => (
        <Cell key={i} isDark={isDark} />
      ))}
    </div>
  );
}

function Cell({ isDark }) {
  const [tempActive, setTempActive] = useState(false);
  const [color] = useState(
    () => COLORS[Math.floor(Math.random() * COLORS.length)]
  );

  return (
    <div
      onMouseEnter={() => {
        setTempActive(true);
        setTimeout(() => setTempActive(false), 1000);
      }}
      className="w-8 h-8 border transition-colors duration-200"
      style={{
        background: tempActive ? `${color}33` : isDark ? "#1f2937" : "white",
        border: `solid ${
          tempActive
            ? `1px ${color}`
            : `0.5px ${isDark ? "#ffffff20" : "#20202099"}`
        }`,
      }}
    />
  );
}
