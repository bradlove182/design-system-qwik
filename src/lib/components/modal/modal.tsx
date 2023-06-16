import { type Signal, Slot, component$, useSignal } from "@builder.io/qwik";
import style from "./index.module.css";

export interface ModalProps {
    id: string;
    ref?: Signal<HTMLInputElement | undefined>;
}

const Modal = component$(({ id, ref }: ModalProps) => {
    const modalRef = useSignal<HTMLInputElement | undefined>(undefined);
    ref = modalRef;
    return (
        <div class={style.modal}>
            <label for={id} class={style["modal-close"]} />
            <input
                class={style.input}
                type="checkbox"
                hidden
                ref={modalRef}
                id={id}
            />
            <div class={style["modal-box"]}>
                <Slot />
            </div>
        </div>
    );
});

export default Modal;
