import {
    $,
    PropFunction,
    component$,
    useSignal,
    useTask$,
} from "@builder.io/qwik";
import style from "./index.module.css";
import { Label } from "../label";
import { adjustSlider } from "./utils";

export interface RangeProps {
    id: string;
    label?: string;
    onChange?: PropFunction<(value: number) => void>;
    value?: number;
    disabled?: boolean;
    min?: number;
    max?: number;
    step?: number;
}

const Range = component$(
    ({
        id,
        label,
        onChange,
        value = 50,
        disabled = false,
        min = 0,
        max = 100,
        step,
    }: RangeProps) => {
        const range = useSignal<number>(value);
        const fill = useSignal<string>("");

        const handleOnChange = $((event: Event, element: HTMLInputElement) => {
            range.value = parseFloat(element.value);
            if (onChange) {
                onChange(range.value);
            }
        });

        useTask$(({ track }) => {
            const rangeValue = track(() => range.value);
            fill.value = adjustSlider(rangeValue, min, max, disabled);
        });

        return (
            <div class={style.range}>
                {label ? <Label id={id}>{label}</Label> : undefined}
                <input
                    onInput$={handleOnChange}
                    id={id}
                    type="range"
                    disabled={disabled}
                    value={value}
                    min={min}
                    max={max}
                    step={step}
                    style={{
                        "--track-background": `${fill.value}`,
                    }}
                />
            </div>
        );
    }
);
export default Range;
