import { component$, Slot, type PropFunction } from "@builder.io/qwik";

import style from "./index.module.css";

export interface ButtonBaseProps {
    size?: "default" | "small";
    icon?: boolean;
    disabled?: boolean;
    onClick?: PropFunction<() => void>;
    as?: "button" | "span";
    expand?: boolean;
}

export interface ButtonOnlyIconProps extends ButtonBaseProps {
    icon: true;
    size?: "default" | "small";
    variant?: never;
    expand?: never;
}

export interface ButtonNormalProps extends ButtonBaseProps {
    icon?: never;
    size?: never;
    variant?: "brand" | "transparent" | "outline" | "gradient";
    expand?: boolean;
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
        expand = false,
    }: ButtonProps) => {
        const Component = as;
        return (
            <Component
                class={[
                    style.button,
                    style[variant],
                    icon ? style.icon : undefined,
                    icon ? style[`size-${size}`] : undefined,
                    expand ? style.expand : undefined,
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
