import { useState } from "react";

export default function Stars() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPos({
      x: (e.clientX / window.innerWidth - 0.5) * 20,
      y: (e.clientY / window.innerHeight - 0.5) * 20,
    });
    console.log(pos);
  };

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none z-10"
      onMouseMove={handleMouseMove}
    >
      {Array.from({ length: 50 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full opacity-70"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            transform: `translate(${pos.x}px, ${pos.y}px)`,
            transition: "transform 0.2s ease-out",
          }}
        />
      ))}
    </div>
  );
}
