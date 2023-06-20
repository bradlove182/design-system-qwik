import { component$ } from "@builder.io/qwik";
import type { IconProps } from ".";
import style from "./index.module.css";

const IconLoading = component$(
    ({ variant = "default", size = 3 }: IconProps) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="0"
                stroke-linecap="round"
                stroke-linejoin="round"
                className={style.icon}
                style={{
                    "--icon-size": `var(--icon-size-${size})`,
                    "--icon-color": `var(--text-${variant}, inherit)`,
                }}
            >
                <path
                    fill="currentColor"
                    d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
                    opacity=".25"
                ></path>
                <circle cx="12" cy="2.5" r="1.5" fill="currentColor">
                    <animateTransform
                        attributeName="transform"
                        dur="0.75s"
                        repeatCount="indefinite"
                        type="rotate"
                        values="0 12 12;360 12 12"
                    ></animateTransform>
                </circle>
            </svg>
        );
    }
);

export default IconLoading;
