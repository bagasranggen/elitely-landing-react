import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { gsap } from "gsap";

import { createFadeIn } from "@/components/animation";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Init = () => {
    const location = useLocation();

    const initAnimation = () => {
        createFadeIn();
    };

    useEffect(() => {
        const context = gsap.context(initAnimation);

        return () => context.revert();
    }, []);

    initAnimation();

    useEffect(() => {
        const handleStart = () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };

        const handleEnd = () => {
            ScrollTrigger.refresh(true);
            initAnimation();
        };

        handleStart();
        setTimeout(() => handleEnd(), 0);
    }, [ location ]);
};

export default Init;