import {
    PropFunction,
    QwikChangeEvent,
    component$,
    useContext,
} from "@builder.io/qwik";
import { Label } from "../label";
import { RadioContext } from "./context";
import style from "./index.module.css";

export interface RadioItemProps {
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

const RadioItem = component$(
    ({ id, onChange, checked, disabled, label }: RadioItemProps) => {
        const radioContext = useContext(RadioContext);
        return (
            <div class={style["radio-item"]}>
                <input
                    type="radio"
                    id={id}
                    onChange$={onChange}
                    checked={checked}
                    disabled={disabled}
                    role="radio"
                    name={radioContext.name}
                />
                {label ? <Label id={id}>{label}</Label> : undefined}
            </div>
        );
    }
);
export default RadioItem;
