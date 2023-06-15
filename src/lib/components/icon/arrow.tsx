import { component$ } from "@builder.io/qwik";
import type { IconProps } from ".";
import style from "./index.module.css";

export interface IconArrowProps extends IconProps {
    direction?: "up" | "down" | "left" | "right";
}

const IconArrow = component$(
    ({ variant = "default", size = 3, direction = "left" }: IconArrowProps) => {
        return (
            <svg
                className={[style.icon, style[`direction-${direction}`]]}
                style={{
                    "--icon-size": `var(--icon-size-${size})`,
                    "--icon-color": `var(--text-${variant}, inherit)`,
                }}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
            >
                <g
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                >
                    <path
                        stroke-dasharray="20"
                        stroke-dashoffset="20"
                        d="M21 12H3.5"
                    >
                        <animate
                            fill="freeze"
                            attributeName="stroke-dashoffset"
                            dur="0.3s"
                            values="20;0"
                        ></animate>
                    </path>
                    <path
                        stroke-dasharray="12"
                        stroke-dashoffset="12"
                        d="M3 12L10 19M3 12L10 5"
                    >
                        <animate
                            fill="freeze"
                            attributeName="stroke-dashoffset"
                            begin="0.3s"
                            dur="0.2s"
                            values="12;0"
                        ></animate>
                    </path>
                </g>
            </svg>
        );
    }
);

export default IconArrow;
