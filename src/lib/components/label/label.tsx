import { Slot, component$ } from "@builder.io/qwik";
import style from "./index.module.css";

export interface LabelProps {
    id: string;
}

const Label = component$(({ id }: LabelProps) => {
    return (
        <label class={style.label} for={id}>
            <Slot />
        </label>
    );
});

export default Label;
