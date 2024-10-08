import React, { useState } from "react";

const CustomInput = ({ labelText, type = "text", value, onChange }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className='w-[309px] h-[50px] mb-4 relative'>
      {/* Label that floats when input is focused or input has value */}
      <label
        className={`absolute -translate-y-2 ml-4 px-2 text-[#C4C4C4] bg-[#ffffff] font-medium text-[10px] transition-all duration-200 ease-in-out ${
          isFocused || value ? "" : "hidden"
        }`}
      >
        {labelText}
      </label>

      {/* Input Field */}
      <input
        type={type}
        placeholder={labelText}
        className='w-full h-full pl-6 rounded-md border font-medium border-[#E4E4E4] focus:outline-none focus:placeholder-transparent placeholder-[#C4C4C4] placeholder:font-light'
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(value.length > 0)}
      />
    </div>
  );
};

export default CustomInput;
