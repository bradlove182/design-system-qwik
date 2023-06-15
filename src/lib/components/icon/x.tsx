import { component$ } from "@builder.io/qwik";
import type { IconProps } from ".";
import style from "./index.module.css";

const IconX = component$(({ variant = "default", size = 3 }: IconProps) => {
    return (
        <svg
            class={style.icon}
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
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
    );
});

export default IconX;
