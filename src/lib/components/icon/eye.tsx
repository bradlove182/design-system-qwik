import { component$ } from "@builder.io/qwik";
import type { IconProps } from ".";
import style from "./index.module.css";

const IconEye = component$(
    ({ variant = "default", size = 3, animate = false }: IconProps) => {
        return (
            <svg
                class={style.icon}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                    "--icon-size": `var(--icon-size-${size})`,
                    "--icon-color": `var(--text-${variant}, inherit)`,
                }}
            >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle
                    cx="12"
                    cy="12"
                    r="3"
                    style={
                        animate
                            ? {
                                  strokeDasharray: 24,
                                  strokeDashoffset: "var(--eye, 24)",
                                  transition:
                                      "stroke-dashoffset 0.6s ease var(--eye-delay, 0s)",
                              }
                            : {}
                    }
                ></circle>
                <line
                    x1="1"
                    y1="1"
                    x2="23"
                    y2="23"
                    style={
                        animate
                            ? {
                                  strokeDasharray: 32,
                                  strokeDashoffset: "var(--strike, 0)",
                                  transition:
                                      "stroke-dashoffset 0.45s ease var(--eye-delay, 0s)",
                              }
                            : {}
                    }
                ></line>
            </svg>
        );
    }
);

export default IconEye;
