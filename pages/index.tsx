import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>willys.dev</title>
                <meta name="description" content="My Personal Website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <div>Oi, eu sou o Willys</div>
                <div className={styles.links}>
                    <a target="_blank" href="https://www.linkedin.com/in/willysvarela" rel="noreferrer">linkedin</a>
                    <a target="_blank" href="https://www.github.com/willysvarela" rel="noreferrer">github</a>
                    <a target="_blank" href="https://www.twitter.com/willysvarela" rel="noreferrer">twitter</a>
                    <a href="/daily">daily</a>
                    <a href="/blog">blog</a>
                </div>
            </main>

            <footer></footer>
        </div>
    );
};

export default Home;
