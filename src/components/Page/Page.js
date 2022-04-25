import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Page.css';

const Page = ({ name, currentPage, children }) => {
    const nav = useNavigate();
    const pageRef = useRef(null);

    const callback = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.intersectionRatio > 0) {
                if (name) {
                    nav('/' + name, { replace: true });
                } else {
                    nav('/', { replace: true });
                }
            } else {
                if (name === currentPage) {
                    pageRef.current.scrollIntoView();
                }
            }
        });
    };

    useEffect(() => {
        let options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.6,
        };

        const ref = pageRef.current;

        let observer = new IntersectionObserver(callback, options);
        observer.observe(ref);
        return () => {
            observer.unobserve(ref);
        };
        // eslint-disable-next-line
    }, []);

    return (
        <div ref={pageRef} id={name} className="Page">
            {children}
        </div>
    );
};

export default Page;
