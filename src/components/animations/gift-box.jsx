export default function GiftBox({
  message = null,
  primaryColor = "#ff7d6d",
  secondaryColor = "#ffb74a",
  secondaryAccentColor = "rgba(255, 206, 84, 1)",
  tertiaryColor = "#ff8168",
  accentColor = "#ff4149",
  shadowColor = "#dd4b4c",
  textColor = "#302E2EFF",
  containerColor = "#ffa69f"
}) {
  return (
    <div className="h-[260px] relative z-60 flex justify-center items-end">
      <section className="absolute bottom-0 w-[150px] left-1/2 transform -translate-x-1/2 z-[12] h-[180px] group">
        <div
          className="absolute w-[120px] font-sans font-extrabold rounded-md shadow p-2.5 text-[15px] left-0 top-[100px] right-0 mx-auto leading-[26px] z-[-1] text-center transition-all duration-600 ease-in-out delay-[100ms] group-hover:top-[-10px] group-hover:delay-[400ms]"
          style={{ backgroundColor: containerColor, color: textColor }}
        >
          {message ?? "ADD YOUR MESSAGE!!"}
        </div>
        <section className="w-full absolute top-0 transition-all duration-600 ease-in-out delay-600 group-hover:top-[-100px] group-hover:delay-300">
          <div
            className="w-[45px] h-[45px] rounded-full absolute right-[30px]"
            style={{ boxShadow: `0 0 0 10px ${secondaryAccentColor} inset` }}
          ></div>
          <div
            className="w-[45px] h-[45px] rounded-full absolute left-[30px]"
            style={{ boxShadow: `0 0 0 10px ${secondaryAccentColor} inset` }}
          ></div>
          <div
            className="h-7 rounded-md top-[45px] absolute w-[150px]"
            style={{ backgroundColor: primaryColor }}
          ></div>
          <div
            className="h-[55px] w-[15px] left-[15px] absolute top-[40px] z-[11] after:content-[''] after:border-[9px] after:border-solid after:border-transparent after:z-[12] after:absolute after:bottom-0 transition-all duration-300 ease-in-out delay-[1000ms] group-hover:h-8 group-hover:delay-0"
            style={{ backgroundColor: secondaryColor }}
          ></div>
        </section>
        <div
          className="w-0.5 bottom-0 absolute right-0 left-0 mx-auto h-[140px] border-r-[6px] border-l-[6px] z-10 transition-all duration-300 ease-in-out delay-[1000ms] group-hover:h-[102px] group-hover:delay-0"
          style={{ backgroundColor: secondaryColor, borderColor: secondaryColor }}
        ></div>
        <div
          className="bottom-0 h-[102px] overflow-hidden right-[7px] absolute w-[136px] rounded-md"
          style={{ backgroundColor: tertiaryColor }}
        >
          {[ -15, 20, 55, 90 ].map((top, index) => (
            <div
              key={index}
              className="absolute right-[-25px] h-3 w-[110px] rotate-45"
              style={{ backgroundColor: accentColor, top: `${top}px` }}
            ></div>
          ))}
        </div>
        <div
          className="h-[5px] w-[136px] right-[7px] absolute bottom-[102px] transition-delay-[1100ms] group-hover:h-0 group-hover:opacity-0 group-hover:transition-all group-hover:duration-300 group-hover:ease-in-out group-hover:delay-400"
          style={{ backgroundColor: shadowColor }}
        ></div>
      </section>
    </div>
  );
}