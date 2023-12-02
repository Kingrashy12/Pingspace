import React from "react";
import { createEffect, createSignal } from "solid-js";

const PasswordStrength = ({ password }) => {
  const [value, setValue] = createSignal("");

  createEffect(() => {
    setValue(password);
    console.log("Setting...");
  });

  const getColor = () => {
    const lengthScore = password.length >= 8 ? 1 : 0;
    const uppercaseScore = /[A-Z]/.test(value) ? 1 : 0;
    const lowercaseScore = /[a-z]/.test(value) ? 1 : 0;
    const digitScore = /\d/.test(value) ? 1 : 0;
    const specialCharaScore = /[@#$^&+=]/.test(value) ? 1 : 0;
    const totalScore =
      lengthScore +
      uppercaseScore +
      lowercaseScore +
      digitScore +
      specialCharaScore;

    if (totalScore === 5) {
      return "Strong"; // Strong password
    } else if (totalScore >= 3) {
      return "Medium"; // Medium password
    } else {
      return "Weak"; // Weak password
    }
  };

  const getIndicatorColor = () => {
    const strength = getColor();

    switch (strength) {
      case "Strong":
        return "green";
      case "Medium":
        return "orange";
      case "Weak":
        return "red";
      default:
        return "black";
    }
  };

  createEffect(() => {
    getColor();
    getIndicatorColor();
    console.log("Fetchinh...");
  });

  return (
    <div
      className=""
      style={{
        color: getIndicatorColor(),
      }}
    >
      <h4 className="flex items-center font-kanit">{getColor()} Password</h4>
    </div>
  );
};

export default PasswordStrength;
