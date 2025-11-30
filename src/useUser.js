import { useState } from "react";

export default function useLocalStorage(key, initialValue) {
  // LocalStorage’dan qiymatni olish
  const savedValue = localStorage.getItem(key);

  // Agar localStorage’da qiymat bo‘lsa, uni olamiz, bo‘lmasa initialValue
  const [value, setValue] = useState(savedValue || initialValue);

  // Qiymatni yangilash va localStorage’ga yozish
  const setStoredValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, newValue);
  };

  return [value, setStoredValue];
}