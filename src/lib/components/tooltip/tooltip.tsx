import { component$, Slot } from "@builder.io/qwik";

import style from "./index.module.css";

export interface TooltipProps {
    tip: string;
    position?: "top" | "bottom" | "left" | "right";
}

const Tooltip = component$(({ tip, position = "bottom" }: TooltipProps) => {
    return (
        <div class={[style.tooltip, style[position]]} data-tooltip={tip}>
            <Slot />
        </div>
    );
});

export default Tooltip;
