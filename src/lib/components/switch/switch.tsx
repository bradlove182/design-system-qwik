import { PropFunction, QwikChangeEvent, component$ } from "@builder.io/qwik";
import { Label } from "../label";
import style from "./index.module.css";

export interface SwitchProps {
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

const Switch = component$(
    ({ id, label, checked, onChange, disabled = false }: SwitchProps) => {
        return (
            <div class={style.switch}>
                <input
                    type="checkbox"
                    id={id}
                    onChange$={onChange}
                    checked={checked}
                    disabled={disabled}
                />
                {label ? <Label id={id}>{label}</Label> : undefined}
            </div>
        );
    }
);

export default Switch;
