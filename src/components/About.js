import React, { useEffect } from 'react';
import lottie from 'lottie-web';

const About = () => {
    let whatAnimation;
    useEffect(() => {
        whatAnimation = lottie.loadAnimation({
            container: document.getElementById("what"),
            renderer: 'svg',
            loop: false,
            autoplay: false,
            path: "/what.json"
        });
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
            whatAnimation.destroy();
        }
    })
    const handleScroll = () => {
        if (window.scrollY > 400) {
            whatAnimation.play();
        }
    }
    return (
        <div>
            <div id="what" />
        </div>
    );
};

export default About;