import Head from 'next/head';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.scss';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={`${styles.main} ${inter.className}`}>
                <div className={`${styles.container}`}>
                    <p className={`${styles.title}`}>
                        Which of the below statements about electricity is not true?
                    </p>
                    <ul>
                        <li className={`${styles.question}`}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="29"
                                height="29"
                                viewBox="0 0 29 29"
                                fill="transparent"
                            >
                                <circle
                                    cx="14.5996"
                                    cy="14.7192"
                                    r="12.375"
                                    stroke="#6231EC"
                                    strokeWidth="3"
                                />
                            </svg>
                            Electricity is measured in units called watts
                        </li>
                        <li className={`${styles.question}`}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="29"
                                height="29"
                                viewBox="0 0 29 29"
                                fill="transparent"
                            >
                                <circle
                                    cx="14.5996"
                                    cy="14.7192"
                                    r="12.375"
                                    stroke="#6231EC"
                                    strokeWidth="3"
                                />
                            </svg>
                            Electricity flows at the speed of light
                        </li>
                        <li className={`${styles.question}`}>
                            <svg
                                className={`${styles.correct}`}
                                xmlns="http://www.w3.org/2000/svg"
                                width="29"
                                height="29"
                                viewBox="0 0 29 29"
                                fill="transparent"
                            >
                                <circle
                                    cx="14.5996"
                                    cy="14.7192"
                                    r="12.375"
                                    stroke="#6231EC"
                                    strokeWidth="3"
                                />
                            </svg>
                            Electricity is a primary energy source
                        </li>
                    </ul>
                </div>
            </main>
        </>
    );
}
