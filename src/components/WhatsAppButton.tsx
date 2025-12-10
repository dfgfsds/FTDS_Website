"use client";

import Image from "next/image";

const WhatsAppButton = () => {
  const message = "Hello, can I help you?";

  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = "918768876897";
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-4 left-4 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition duration-300 z-50"
      aria-label="Chat on WhatsApp"
    >
      <Image 
        src="/assets/img/WhatsApp.svg.png"   // ❗ Correct path
        alt="WhatsApp" 
        width={28} 
        height={28}
      />
    </button>
  );
};

export default WhatsAppButton;
