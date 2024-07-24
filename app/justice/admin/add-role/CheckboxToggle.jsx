import { useState } from "react";

const CheckboxToggle = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div onClick={handleToggle} style={{ cursor: 'pointer' }}>
      {isChecked ? (
        <svg width="20" height="20" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.5" y="0.5" width="25" height="25" rx="6.5" fill="#F1F7ED"/>
          <rect x="0.5" y="0.5" width="25" height="25" rx="6.5" stroke="#009B07"/>
          <path d="M18.6023 8.79883L10.9023 16.4988L7.40234 12.9988" stroke="#009B07" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      ) : (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.5"
            y="0.5"
            width="19"
            height="19"
            rx="5.5"
            fill="white"
          />
          <rect
            x="0.5"
            y="0.5"
            width="19"
            height="19"
            rx="5.5"
            stroke="#D0D5DD"
          />
        </svg>
      )}
    </div>
  );
};

export default CheckboxToggle;
