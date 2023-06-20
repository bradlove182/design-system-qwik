import IconArrow from "./arrow";
import IconCross from "./x";
import IconGitHub from "./github";
import IconCircle from "./circle";
import IconEye from "./eye";
import IconAt from "./at";
import IconTick from "./tick";
import IconChevron from "./chevron";
import IconLoading from "./loading";

export interface IconProps {
    variant?:
        | "info"
        | "error"
        | "success"
        | "warning"
        | "default"
        | "subdued"
        | "amplified";
    size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
    animate?: boolean;
}

const Icon = {
    Arrow: IconArrow,
    GitHub: IconGitHub,
    Cross: IconCross,
    Circle: IconCircle,
    Eye: IconEye,
    At: IconAt,
    Tick: IconTick,
    Chevron: IconChevron,
    Loading: IconLoading,
} as const;

export { Icon };
