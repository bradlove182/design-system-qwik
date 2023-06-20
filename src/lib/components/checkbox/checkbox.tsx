import {
    component$,
    type QwikChangeEvent,
    type PropFunction,
} from "@builder.io/qwik";
import { Label } from "../label";
import style from "./index.module.css";

export interface CheckboxProps {
    id: string;
    label?: string;
    checked?: boolean;
    onChange?: PropFunction<
        (
            event: QwikChangeEvent<HTMLInputElement>,
            element: HTMLInputElement
        ) => void
    >;
    disabled?: boolean;
}

const Checkbox = component$(
    ({ id, label, checked, onChange, disabled }: CheckboxProps) => {
        return (
            <div class={style.checkbox}>
                {label ? <Label id={id}>{label}</Label> : undefined}
                <input
                    id={id}
                    type="checkbox"
                    onChange$={onChange}
                    checked={checked}
                    disabled={disabled}
                />
            </div>
        );
    }
);

export default Checkbox;
