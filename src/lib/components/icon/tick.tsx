import { component$ } from "@builder.io/qwik";
import type { IconProps } from ".";
import style from "./index.module.css";

const IconTick = component$(
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
                <polyline
                    points="20 6 9 17 4 12"
                    style={
                        animate
                            ? {
                                  strokeDasharray: 30,
                                  strokeDashoffset: "var(--tick, 30)",
                                  transition:
                                      "stroke-dashoffset 0.6s ease var(--tick-delay, 0s)",
                              }
                            : {}
                    }
                ></polyline>
            </svg>
        );
    }
);

export default IconTick;
