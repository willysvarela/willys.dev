import { useRef, useEffect } from 'react';
import Typed from 'typed.js';

import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
    const typeEl = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const options = {
            strings: ['Oi!^500 Eu sou o Willys^1000 :)'],
            typeSpeed: 50,
            backSpeed: 50
        };
        if (typeEl.current !== null) {
            const typed = new Typed(typeEl.current, options);
        }
    }, []);

    return (
        <div className={styles.container}>
            <Head>
                <title>willys.dev</title>
                <meta name="description" content="My Personal Website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <div className={styles.title}>
                    <span ref={typeEl}></span>
                </div>
                <br />
                <div className={styles.links}>
                    <a
                        target="_blank"
                        href="https://www.linkedin.com/in/willysvarela"
                        rel="noreferrer"
                    >
                        linkedin
                    </a>
                    <a target="_blank" href="https://www.github.com/willysvarela" rel="noreferrer">
                        github
                    </a>
                    <a target="_blank" href="https://www.twitter.com/willysvarela" rel="noreferrer">
                        twitter
                    </a>
                    <a href="/daily">Mini-Projetos</a>
                    <a href="/blog">blog</a>
                </div>
            </main>

            <footer></footer>
        </div>
    );
};

export default Home;
