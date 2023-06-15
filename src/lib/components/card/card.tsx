import { Component, Slot, component$ } from "@builder.io/qwik";

import style from "./index.module.css";

export interface CardProps {
    elevation?: 0 | 1 | 2 | 3;
}

export interface CardComponent<T extends {}> extends Component<T> {
    Header: typeof CardHeader;
    Body: typeof CardBody;
}

const CardHeader = component$(() => (
    <div class={style.header}>
        <Slot />
    </div>
));

const CardBody = component$(() => (
    <div class={style.body}>
        <Slot />
    </div>
));

const Card = component$(({ elevation = 0 }: CardProps) => {
    return (
        <div class={[style.card, style[`elevation-${elevation}`]]}>
            <Slot />
        </div>
    );
});

export default Object.assign(Card, {
    Header: CardHeader,
    Body: CardBody,
}) as CardComponent<CardProps>;
