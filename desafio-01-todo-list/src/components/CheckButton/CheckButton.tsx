import { CheckCircle } from "phosphor-react";
import React from "react";

interface CheckButtonProps {
  active: boolean;
  size?: number;
}

const CheckButton: React.FC<CheckButtonProps> = ({
  active = false,
  size = 16,
}) => {
  return (
    <>
      {!active && (
        <div
          className="rounded-circle"
          style={{
            border: "2px solid",
            width: `${size}px`,
            height: `${size}px`,
          }}
        />
      )}
      {active && <CheckCircle size={size} />}
    </>
  );
};

export default CheckButton;
