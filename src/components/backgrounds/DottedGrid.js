export default function DottedGrid() {
  return (
    <div
      className="absolute top-0 left-0 w-full h-full bg-[#050505]"
      style={{
        backgroundImage: `
            linear-gradient(
              to bottom,
              #050505,
              transparent 40%,
              transparent 60%,
              #050505
            ),
            radial-gradient(circle at center, #ffffff50 1px, transparent 1px)
          `,
        backgroundSize: "100% 100%, 50px 50px",
      }}
    />
  );
}
