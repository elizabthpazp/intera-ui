const Tree = () => {
  const lines = [];
  for (let i = 0; i < 256; i++) {
    const t = (6 * 360 * i) / 256;
    const angle =
      (Math.sin((t * Math.PI) / 180) + Math.cos((t * Math.PI) / 540) * 0.1) *
      20;
    lines.push({
      transform: `rotate(${angle}deg)`,
      animationDelay: `${-(i * (4 / 256))}s`,
      color: ["#D8334A", "#FFCE54", "#2ECC71", "#5D9CEC"][i % 4],
    });
  }

  return (
    <div className="relative h-[390px]">
      <ul className="absolute top-0 left-1/2 w-10 h-10 -translate-x-1/2 -translate-y-1/2 z-50">
        {[...Array(5)].map((_, i) => (
          <li
            key={i}
            className="absolute w-0 h-0 border-[12px] border-transparent border-b-[24px] border-b-[#FFCE54]"
            style={{
              transformOrigin: "12px 24px",
              transform: `rotate(${i * 72}deg)`,
            }}
          />
        ))}
      </ul>

      <ul className="p-0">
        {lines.map((line, i) => (
          <li
            key={i}
            className="matrix-line absolute left-1/2 w-[1px] h-[400px]" // Cambia '60vh' por una altura fija en px
            style={{
              transformOrigin: "50% 0%",
              transform: line.transform,
            }}
          >
            <div
              className="absolute bottom-0 w-[3px] h-[3px] rounded-full"
              style={{
                backgroundColor: line.color,
                animation: "fall2 4s linear infinite",
                animationDelay: line.animationDelay,
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tree;
