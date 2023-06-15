import { Slot, component$ } from "@builder.io/qwik";

import style from "./index.module.css";

export interface GridProps {
    gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
    columns?: 1 | 2 | 3 | 4 | 5;
    alignItems?: "baseline" | "center" | "end" | "start" | "stretch";
    justifyContent?: "center" | "end" | "space-between" | "start";
    flow?: "row" | "column" | "dense" | "row dense" | "column dense";
    as?: "div" | "section";
    className?: string;
}

const Grid = component$(
    ({
        gap = 0,
        columns = 1,
        as = "div",
        flow = "row",
        alignItems = "stretch",
        justifyContent,
        className = "",
    }: GridProps) => {
        const Component = as;
        return (
            <Component
                class={[style.grid, className]}
                style={{
                    "--grid-gap": `var(--spacing-${gap})`,
                    "--grid-columns": columns,
                    "--align-items": alignItems,
                    "--justify-content": justifyContent,
                    "--grid-auto-flow": flow,
                }}
            >
                <Slot />
            </Component>
        );
    }
);

export default Grid;
