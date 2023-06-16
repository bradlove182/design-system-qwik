import { PropFunction, QwikChangeEvent, component$ } from "@builder.io/qwik";
import { Label } from "../label";
import style from "./index.module.css";

export interface TextareaProps {
    id: string;
    label?: string;
    value?: string;
    onChange?: PropFunction<
        (
            event: QwikChangeEvent<HTMLTextAreaElement>,
            element: HTMLTextAreaElement
        ) => void
    >;
    placeholder?: string;
    disabled?: boolean;
}

const Textarea = component$(
    ({
        id,
        value,
        label,
        onChange,
        placeholder,
        disabled = false,
    }: TextareaProps) => {
        return (
            <div class={style["text-area"]}>
                {label ? <Label id={id}>{label}</Label> : undefined}
                <textarea
                    id={id}
                    value={value}
                    onChange$={onChange}
                    placeholder={placeholder}
                    disabled={disabled}
                    rows={10}
                />
            </div>
        );
    }
);

export default Textarea;
