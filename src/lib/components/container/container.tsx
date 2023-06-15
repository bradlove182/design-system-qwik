import { Slot, component$ } from "@builder.io/qwik";

import style from "./index.module.css";

export interface ContainerProps {
    size?: 1 | 2 | 3 | 4;
}

const Container = component$(({ size = 4 }: ContainerProps) => {
    return (
        <div class={[style.container, style[`container-size-${size}`]]}>
            <Slot />
        </div>
    );
});

export default Container;
