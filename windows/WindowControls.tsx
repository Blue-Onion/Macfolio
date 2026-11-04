"use client";

import useWindowStore from "@/store/window";
import { Maximize2, Minus, X, XIcon } from "lucide-react";
import { useState, type ReactNode } from "react";
import type { WindowKey } from "@/data";

type WindowControlProps = {
  name: string;
  className: string;
  onClick: () => void;
  icon: ReactNode;
};

const WindowControls = ({ target }: { target: WindowKey }) => {
  const { closeWindow, minimizeWindow, toggleMaximize, windows } = useWindowStore();
  const [focusedControl, setFocusedControl] = useState<string | null>(null);
  const isMaximized = windows[target]?.isMaximized ?? false;

  const renderControl = ({ name, className, onClick, icon }: WindowControlProps) => (
    <button
      key={name}
      type="button"
      className={`${className} flex items-center justify-center p-0 border-0`}
      aria-label={name}
      title={name}
      onClick={onClick}
      onMouseEnter={() => setFocusedControl(name)}
      onMouseLeave={() => setFocusedControl(null)}
      onFocus={() => setFocusedControl(name)}
      onBlur={() => setFocusedControl(null)}
    >
      {focusedControl === name && icon}
    </button>
  );

  return (
    <>
      <div id="window-controls" className="items-center gap-[6px] hidden sm:flex">
        {renderControl({
          name: "Close window",
          className: "close",
          onClick: () => closeWindow(target),
          icon: <X size={10} aria-hidden="true" />,
        })}
        {renderControl({
          name: "Minimize window",
          className: "minimize",
          onClick: () => minimizeWindow(target),
          icon: <Minus size={10} aria-hidden="true" />,
        })}
        {renderControl({
          name: isMaximized ? "Restore window size" : "Maximize window",
          className: "maximize",
          onClick: () => toggleMaximize(target),
          icon: <Maximize2 size={10} aria-hidden="true" />,
        })}
      </div>
      <button
        type="button"
        className="sm:hidden w-xs p-0 border-0 bg-transparent text-black"
        aria-label="Close window"
        title="Close window"
        onClick={() => closeWindow(target)}
      >
        <XIcon size={25} aria-hidden="true" />
      </button>
    </>
  );
};

export default WindowControls;
