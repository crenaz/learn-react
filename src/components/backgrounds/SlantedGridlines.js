export default function SlantedGridLines() {
  return (
    <div
      className="absolute top-0 left-0 w-full h-full bg-[#050505]"
      style={{
        backgroundImage: `
            radial-gradient(closest-side, transparent, #050505),
            linear-gradient(to right, #ffffff50 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff50 1px, transparent 1px)
          `,
        backgroundSize: "cover, 50px 50px, 50px 50px",
        backgroundRepeat: "no-repeat, repeat, repeat",
        transform: "scale(2) rotateX(60deg) rotateZ(20deg)",
      }}
    />
  );
}
