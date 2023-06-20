import {
    component$,
    useSignal,
    $,
    type QwikChangeEvent,
    type PropFunction,
} from "@builder.io/qwik";
import { Label } from "../label";
import { Icon } from "../icon";
import style from "./index.module.css";

export interface InputProps {
    id: string;
    type?: "text" | "password" | "email";
    label?: string;
    value?: string;
    onChange?: PropFunction<
        (
            event: QwikChangeEvent<HTMLInputElement>,
            element: HTMLInputElement
        ) => void
    >;
    placeholder?: string;
    disabled?: boolean;
}

const Input = component$(
    ({
        id,
        value,
        label,
        type = "text",
        onChange,
        placeholder,
        disabled = false,
    }: InputProps) => {
        const showPassword = useSignal<Boolean>(false);

        const handleShowPasswordOnClick = $(
            () => (showPassword.value = !showPassword.value)
        );

        return (
            <div class={style["input-wrapper"]}>
                <div class={style.input}>
                    {type === "email" ? (
                        <div class={style["email-icon"]}>
                            <Icon.At animate />
                            <Icon.Tick animate />
                        </div>
                    ) : undefined}
                    {type === "password" ? (
                        <button
                            class={
                                showPassword.value ? style["show-password"] : ""
                            }
                            onClick$={handleShowPasswordOnClick}
                            disabled={disabled}
                        >
                            <Icon.Eye animate />
                        </button>
                    ) : undefined}
                    {label ? <Label id={id}>{label}</Label> : undefined}
                    <input
                        id={id}
                        type={
                            type === "password" && showPassword.value
                                ? "text"
                                : type
                        }
                        onChange$={onChange}
                        value={value}
                        placeholder={placeholder}
                        disabled={disabled}
                        minLength={1}
                    />
                </div>
            </div>
        );
    }
);

export default Input;
