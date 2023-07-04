import {
    Slot,
    component$,
    useContextProvider,
    type Component,
} from "@builder.io/qwik";
import RadioItem from "./radio-item";
import style from "./index.module.css";
import { RadioContext } from "./context";

export interface RadioProps {
    name: string;
    direction?: "column" | "row";
}

export interface RadioComponent<T extends {}> extends Component<T> {
    Item: typeof RadioItem;
}

const Radio = component$(({ name, direction = "column" }: RadioProps) => {
    useContextProvider(RadioContext, { name });
    return (
        <div
            role="radiogroup"
            class={[style["radio-group"], style[`direction-${direction}`]]}
            style={{
                "--radio-direction": direction,
            }}
        >
            <Slot />
        </div>
    );
});

export default Object.assign(Radio, {
    Item: RadioItem,
}) as RadioComponent<RadioProps>;
