const AnimatedNumber = ({ end, duration = 2000 }) => {
    const [currentNumber, setCurrentNumber] = React.useState(0);
    const [hasAnimated, setHasAnimated] = React.useState(false);
    const elementRef = React.useRef(null);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    let start = 0;
                    const startTime = performance.now();

                    const animate = (currentTime) => {
                        const elapsedTime = currentTime - startTime;
                        const progress = Math.min(elapsedTime / duration, 1);
                        const value = Math.floor(progress * end);
                        
                        setCurrentNumber(value);

                        if (progress < 1) {
                            requestAnimationFrame(animate);
                        } else {
                            setCurrentNumber(end);
                        }
                    };

                    requestAnimationFrame(animate);
                    observer.disconnect(); // Disconnect after animating once
                }
            },
            {
                root: null, // relative to document viewport
                rootMargin: '0px',
                threshold: 0.1 // trigger when 10% of the element is visible
            }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => observer.disconnect();
    }, [end, duration, hasAnimated]);

    return React.createElement('span', { ref: elementRef }, currentNumber);
};