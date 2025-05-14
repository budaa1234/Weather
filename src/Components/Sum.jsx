export const Sum = () => {
  return (
    <div className="flex items-center justify-center w-[140px] h-[140px] bg-[#F3F4F6] rounded-full gap-x-4">
         <div className="relative">
          <div className="absolute -top-[114px] left-[67px] w-10 h-14 bg-[#F3F4F6]"></div>
          <div className="absolute -top-[117px] left-[67px] w-20 h-16 bg-[#0F141E] rounded-bl-full"></div>
        </div>
      <img src="sumb.png" />
      <img src="sumz.png" />
       <div className="relative">
          <div className="absolute -bottom-[114px] right-[27px] w-10 h-14 bg-[#F3F4F6]"></div>
          <div className="absolute -bottom-[117px] right-[-13px] w-20 h-16 bg-[#0F141E] rounded-tl-full"></div>
        </div>
    </div>
  );
};
