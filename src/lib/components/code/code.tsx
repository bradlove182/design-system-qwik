import { Slot, component$ } from "@builder.io/qwik";
import style from "./index.module.css";

const Code = component$(() => {
    return (
        <code class={style.code}>
            <Slot />
        </code>
    );
});

export default Code;
