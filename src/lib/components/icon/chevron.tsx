import { component$ } from "@builder.io/qwik";
import type { IconProps } from ".";
import style from "./index.module.css";

export interface IconChevronProps extends IconProps {
    direction?: "up" | "down" | "left" | "right";
}

const IconChevron = component$(
    ({
        variant = "default",
        size = 3,
        direction = "right",
    }: IconChevronProps) => {
        return (
            <svg
                class={[style.icon, style[`direction-${direction}`]]}
                style={{
                    "--icon-size": `var(--icon-size-${size})`,
                    "--icon-color": `var(--text-${variant}, inherit)`,
                }}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
        );
    }
);

export default IconChevron;
