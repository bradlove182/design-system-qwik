import { PropFunction, Slot, component$ } from "@builder.io/qwik";
import style from "./index.module.css";

export interface ModalProps {
    id: string;
    ref?: PropFunction<(el: Element) => void>;
}

const Modal = component$(({ id, ref }: ModalProps) => {
    return (
        <div class={style.modal}>
            <label for={id} class={style["modal-close"]} />
            <input
                class={style.input}
                type="checkbox"
                hidden
                ref={ref}
                id={id}
            />
            <div class={style["modal-box"]}>
                <Slot />
            </div>
        </div>
    );
});

export default Modal;
