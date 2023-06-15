import { component$, Slot, type PropFunction } from "@builder.io/qwik";

import style from "./index.module.css";

export interface ButtonBaseProps {
    size?: "default" | "small";
    icon?: boolean;
    disabled?: boolean;
    onClick?: PropFunction<() => void>;
    as?: "button" | "span";
}

export interface ButtonOnlyIconProps extends ButtonBaseProps {
    icon: true;
    size?: "default" | "small";
    variant?: never;
}

export interface ButtonNormalProps extends ButtonBaseProps {
    icon?: never;
    size?: never;
    variant?: "brand" | "transparent" | "outline" | "gradient";
}

export type ButtonProps = ButtonOnlyIconProps | ButtonNormalProps;

const Button = component$(
    ({
        variant = "brand",
        size = "default",
        icon,
        disabled = false,
        onClick,
        as = "button",
    }: ButtonProps) => {
        const Component = as;
        return (
            <Component
                class={[
                    style.button,
                    style[variant],
                    icon ? style.icon : undefined,
                    icon ? style[`size-${size}`] : undefined,
                ]}
                disabled={disabled}
                type="button"
                role="button"
                onClick$={onClick}
            >
                <Slot />
            </Component>
        );
    }
);

export default Button;
