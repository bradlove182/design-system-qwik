import { createContextId } from "@builder.io/qwik";

export const RadioContext = createContextId<{ name: string }>(
    "bl.radio.context"
);
