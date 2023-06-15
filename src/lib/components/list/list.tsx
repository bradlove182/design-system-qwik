import {
    Slot,
    component$,
    type QwikIntrinsicElements,
    Component,
} from "@builder.io/qwik";
import ListItem from "./list-item";

import style from "./index.module.css";

export type UnorderedListProps = QwikIntrinsicElements["ul"] & {
    variant?: "unordered";
};

export type OrderedListProps = QwikIntrinsicElements["ol"] & {
    variant?: "ordered";
};

export type ListProps = UnorderedListProps | OrderedListProps;

interface ListComponent<T extends {}> extends Component<T> {
    Item: typeof ListItem;
}

const List = component$(({ variant = "unordered" }: ListProps) => {
    const Component = variant === "unordered" ? "ul" : "ol";
    return (
        <Component class={[style.list, style[variant]]}>
            <Slot />
        </Component>
    );
});

export default Object.assign(List, {
    Item: ListItem,
});
