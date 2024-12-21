const Tree = () => {
  const generateSwingLineStyle = (i) => ({
    height: `calc(100vh * ((${i + 4}) / (128 + 4)))`,
    animationDelay: `calc(-4s * (${i} / (128 / 7)))`,
  });

  return (
    <div>
      <ul className="absolute top-[33vh] left-1/2 w-4 h-4 -translate-x-1/2 -translate-y-1/2 z-50">
        {[...Array(5)].map((_, i) => (
          <li
            key={i}
            className="absolute w-0 h-0 border-[8px] border-transparent border-b-[#FFCE54]"
            style={{
              transformOrigin: "8px 16px",
              transform: `rotate(${i * 72}deg)`,
            }}
          />
        ))}
      </ul>
      <ul className="p-0">
        {[...Array(64)].map((_, i) => (
          <li
            key={i}
            className={`swing-line`}
            style={generateSwingLineStyle(i + 1)}
          />
        ))}
      </ul>
    </div>
  );
};

export default Tree;
