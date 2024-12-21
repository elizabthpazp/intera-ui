export const generateSnowflakes = (count) => {
    return Array.from({ length: count }, (_, i) => (
      <i key={i} className={`absolute w-[3px] h-[3px] bg-white ${i % 2 === 0 ? 'w-[2px] h-[2px]' : ''}`} 
         style={{
           top: `${Math.random() * 100}%`,
           right: `${Math.random() * 100}%`,
           animation: `fall ${5 + Math.random() * 20}s linear infinite`,
           animationDelay: `${-Math.random() * 5}s`
         }} />
    ));
  };