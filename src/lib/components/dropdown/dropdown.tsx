import { Slot, component$, type Component } from "@builder.io/qwik";
import style from "./index.module.css";

export interface DropdownProps {
    align?: "left" | "right";
}

export interface DropdownComponent<T extends {}> extends Component<T> {
    Target: typeof DropdownTarget;
    Menu: typeof DropdownMenu;
}

const DropdownTarget = component$(() => (
    <div tabIndex={0} class={style.target}>
        <Slot />
    </div>
));

const DropdownMenu = component$(() => (
    <div tabIndex={0} class={style.menu}>
        <Slot />
    </div>
));

const Dropdown = component$(({ align = "left" }: DropdownProps) => {
    return (
        <div
            class={[
                style.dropdown,
                align === "right" ? style["dropdown-right"] : "",
            ]}
        >
            <Slot />
        </div>
    );
});

export default Object.assign(Dropdown, {
    Target: DropdownTarget,
    Menu: DropdownMenu,
}) as DropdownComponent<DropdownProps>;
