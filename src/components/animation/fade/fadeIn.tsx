import React from "react";

import { FADE_IN_DIRECTION } from "@/components/animation/fade/direction";

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { createAnimation } from "@/components/animation/helper";

gsap.registerPlugin(ScrollTrigger);

export type FadeInProps = {
    className?: string;
    options?: {
        type?: 'fade-in',
        direction?: FadeInDirectionProps;
        position?: FadeInPositionProps;
        delay?: FadeInDelayProps;
    }
    children?: React.ReactNode;
}

export const FadeIn = ({ className, options, children }: FadeInProps): React.ReactElement => (
    <div
        className={className}
        {...createAnimation(options)}>
        {children}
    </div>
);

export type FadeInDirectionProps = 'left' | 'right' | 'up' | 'down';
export type FadeInDirectionItemProps = {
    direction: 'x' | 'y';
    x?: number;
    y?: number;
}
export type FadeInPositionProps = 'top' | 'center';
export type FadeInDelayProps = number;

export const fadeIn = (element: any) => {
    const dir: FadeInDirectionProps = element?.getAttribute('data-animation-direction');
    const delay: FadeInDelayProps | undefined = element?.getAttribute('data-animation-delay') ? parseFloat(element?.getAttribute('data-animation-delay')) : undefined;
    const isOnTop = element?.getAttribute('data-animation-position') === 'top';

    gsap.timeline({
        scrollTrigger: {
            trigger: element,
            start: `top ${isOnTop ? 'bottom' : '80%'}`,
            // markers: process.env.NEXT_PUBLIC_GSAP_MARKER === '1' && process.env.NODE_ENV === 'development'
        },
        ease: 'Power1.easeIn',
        ...delay ? { duration: delay } : {},
        onComplete: () => {
            gsap.set(element, { clearProps: true });
        }
    }).fromTo(element, {
        opacity: 0,
        ...dir ? { [FADE_IN_DIRECTION[dir].direction]: FADE_IN_DIRECTION[dir][FADE_IN_DIRECTION[dir].direction] } : {}
    }, {
        opacity: 1,
        ...dir ? { [FADE_IN_DIRECTION[dir].direction]: 0 } : {},
        duration: .85
    });
};

export const createFadeIn = () => {
    gsap.utils.toArray('[data-animation="fade-in"]').forEach((fade: any) => fadeIn(fade));
};