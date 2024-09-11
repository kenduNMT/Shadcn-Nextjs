import React, { useState } from "react";

interface OtpInputProps {
  length: number; // Độ dài mã OTP (6 hoặc 8 số)
  onChangeOtp: (otp: string) => void;
}

const OtpInput: React.FC<OtpInputProps> = ({ length, onChangeOtp }) => {
  const [otp, setOtp] = useState(Array(length).fill(""));

  const handleChange = (element: HTMLInputElement, index: number) => {
    const value = element.value;
    if (/^[0-9]$/.test(value)) { // Chỉ cho phép nhập số
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      onChangeOtp(newOtp.join(""));
      
      // Tự động focus vào ô tiếp theo
      if (element.nextSibling && value) {
        (element.nextSibling as HTMLInputElement).focus();
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !otp[index] && e.currentTarget.previousSibling) {
      (e.currentTarget.previousSibling as HTMLInputElement).focus();
    }
  };

  return (
    <div className="flex gap-2 justify-center">
      {otp.map((data, index) => (
        <input
          className="w-10 h-10 text-center border border-gray-300 rounded-md"
          type="text"
          maxLength={1}
          key={index}
          value={otp[index]}
          onChange={(e) => handleChange(e.target, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          style={{ fontSize: "1.5rem" }}
        />
      ))}
    </div>
  );
};

export default OtpInput;
