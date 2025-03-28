const TreeTriangle = () => {  
  const generateSwingLineStyle = (i) => ({
    height: `calc(100vh * ((${i + 4}) / (128 + 4)))`,
    animationDelay: `calc(-4s * (${i} / (128 / 7)))`,
  });

  return (
    <div className="relative w-full h-[400px]">  
      <ul className="absolute top-0 left-1/2 w-8 h-8 -translate-x-1/2 -translate-y-1/2 z-50" style={{marginLeft: '-10px'}}>
        {[...Array(5)].map((_, i) => (
          <li
            key={i}
            className="absolute w-0 h-0 border-[10px] border-transparent border-b-[20px] border-b-[#FFCE54]"
            style={{
              transformOrigin: "10px 20px",
              transform: `rotate(${i * 72}deg)`,
            }}
          />
        ))}
      </ul>
  
      <ul className="absolute top-0 right-0 left-0 w-full p-0">
        {[...Array(64)].map((_, i) => (
          <li
            key={i}
            className="swing-line absolute left-1/2 top-4"
            style={generateSwingLineStyle(i + 1)}
          />
        ))}
      </ul>
    </div>
  );
};
 
export default TreeTriangle;

