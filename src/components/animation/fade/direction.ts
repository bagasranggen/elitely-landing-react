import { FadeInDirectionItemProps, FadeInDirectionProps } from "@/components/animation/fade/fadeIn.tsx";

export const FADE_IN_DIRECTION: Record<FadeInDirectionProps, FadeInDirectionItemProps> = {
    left: {
        direction: 'x',
        x: -100
    },
    right: {
        direction: 'x',
        x: 100
    },
    up: {
        direction: 'y',
        y: 50
    },
    down: {
        direction: 'y',
        y: -50
    },
};