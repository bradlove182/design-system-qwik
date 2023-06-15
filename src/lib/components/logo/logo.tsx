import { component$ } from "@builder.io/qwik";

export interface LogoProps {
    size?: 1 | 2 | 3 | 4;
}

const Logo = component$(({ size = 2 }: LogoProps) => {
    return (
        <svg
            id="e"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            height={`${size}rem`}
            width={`${size}rem`}
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="square"
            stroke-linejoin="miter"
            style={{
                color: "var(--text-amplified)",
            }}
        >
            <polygon points="4 9 2 9 2 13 4 13 4 11 4 9" />
            <path d="m17,3H2v2h15.32c1.48,0,2.68,1.2,2.68,2.68v.63c0,1.48-1.2,2.68-2.68,2.68h-9.32v2h9c2.76,0,5-2.24,5-5s-2.24-5-5-5Z" />
            <polygon points="4 13 4 11 2 11 2 21 12 21 12 19.97 12 19 4 19 4 13" />
            <path d="m17,11h-9v2h9c1.66,0,3,1.34,3,3s-1.34,3-3,3h-1v2h1c2.76,0,5-2.24,5-5s-2.24-5-5-5Z" />
        </svg>
    );
});

export default Logo;
