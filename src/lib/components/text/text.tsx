import { Slot, component$ } from "@builder.io/qwik";
import style from "./index.module.css";

export interface TextProps {
    as?:
        | "h1"
        | "h2"
        | "h3"
        | "h4"
        | "h5"
        | "h6"
        | "p"
        | "strong"
        | "em"
        | "span";
    variant?: "default" | "gradient";
    size?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
}

const Text = component$(
    ({ as = "p", variant = "default", size }: TextProps) => {
        const Component = as;
        return (
            <Component
                class={[
                    style[variant],
                    style[as],
                    size ? style[`size-${size}`] : "",
                ]}
            >
                <Slot />
            </Component>
        );
    }
);

export default Text;
