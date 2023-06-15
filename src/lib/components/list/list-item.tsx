import { Slot, component$ } from "@builder.io/qwik";
import { Icon } from "../icon";

const ListItem = component$(() => {
    return (
        <li>
            <Icon.Circle size={1} />
            <Slot />
        </li>
    );
});

export default ListItem;
