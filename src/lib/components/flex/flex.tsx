import { Slot, component$ } from "@builder.io/qwik";

import style from "./index.module.css";

export interface FlexProps {
    fullWidth?: boolean;
    gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    direction?: "column" | "column-reverse" | "row" | "row-reverse";
    alignItems?:
        | "baseline"
        | "center"
        | "end"
        | "flex-end"
        | "flex-start"
        | "start"
        | "stretch";
    justifyContent?:
        | "center"
        | "end"
        | "space-around"
        | "space-between"
        | "space-evenly"
        | "start";
    wrap?: "wrap" | "nowrap";
    as?: "div" | "section";
    className?: string;
}

const Flex = component$(
    ({
        alignItems = "center",
        gap = 3,
        direction = "row",
        justifyContent = "start",
        wrap = "nowrap",
        as = "div",
        fullWidth = false,
        className = "",
    }: FlexProps) => {
        const Component = as;
        return (
            <Component
                class={[
                    style.flex,
                    fullWidth ? style["full-width"] : "",
                    className,
                ]}
                style={{
                    "--grid-gap": `var(--spacing-${gap})`,
                    "--flex-wrap": wrap,
                    "--align-items": alignItems,
                    "--justify-content": justifyContent,
                    "--flex-direction": direction,
                }}
            >
                <Slot />
            </Component>
        );
    }
);

export default Flex;
