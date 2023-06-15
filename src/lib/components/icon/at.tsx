import { component$ } from "@builder.io/qwik";
import type { IconProps } from ".";
import style from "./index.module.css";

const IconAt = component$(
    ({ variant = "default", size = 3, animate = false }: IconProps) => {
        return (
            <svg
                class={style.icon}
                style={{
                    "--icon-size": `var(--icon-size-${size})`,
                    "--icon-color": `var(--text-${variant}, inherit)`,
                }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <circle
                    cx="12"
                    cy="12"
                    r="4"
                    style={
                        animate
                            ? {
                                  strokeDasharray: 30,
                                  strokeDashoffset: "var(--at-sign-circle, 4)",
                                  transition:
                                      "stroke-dashoffset 0.6s ease var(--at-sign-delay, 0.3s)",
                              }
                            : {}
                    }
                ></circle>
                <path
                    d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"
                    style={
                        animate
                            ? {
                                  strokeDasharray: 107,
                                  strokeDashoffset: "var(--at-sign, 227)",
                                  transition:
                                      "stroke-dashoffset 0.8s ease var(--at-sign-delay, 0.3s)",
                              }
                            : {}
                    }
                ></path>
            </svg>
        );
    }
);

export default IconAt;
