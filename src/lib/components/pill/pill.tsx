import { Slot, component$ } from "@builder.io/qwik";
import style from "./index.module.css";

export interface PillProps {
    variant?: "brand" | "default" | "info" | "success" | "error" | "warning";
}

const Pill = component$(({ variant = "default" }: PillProps) => {
    return (
        <span class={[style.pill, style[variant]]}>
            <Slot />
        </span>
    );
});

export default Pill;
