import type {NextPage} from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

// Import header
import Header from '../components/Header/Header'
import React from "react";
import Link from "next/link";
import { Text } from "@nextui-org/react";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import thankYou from "../public/img/vector/thank you.svg";

const Home: NextPage = () => {
    return (
        <div>
            <Header title="Credits" description="Giving credit where credit is due (and some more)" />
            <div className={styles.container}>
                <Navigation/>
                <main className={styles.main}>
                    <div className={"container w-8/9 p-4 m-auto flex flex-wrap justify-center"}>
                        <div className={"w-3/5 min-w-[400px] mb-8"}>
                            <Text
                                h1
                                className={"text-7xl font-bold text-center xl:text-left"}
                                css={{
                                    textGradient: "45deg, $blue400 0%, $red800 50%",
                                }}
                            >
                                Credits
                            </Text>
                            <Text
                                p
                                className={"text-3xl text-center xl:text-left"}
                            >
                                This page is dedicated to all the people who helped make this website possible. We wanted to express our gratitude to all the people who helped us along the way, and we hope that you will check out their work as well.
                            </Text>
                            <Text
                                p
                                className={"text-l text-center xl:text-left"}
                            >
                                <b>Stuyvesant Student Union</b> - For giving us the opportunity to work on this project, and for providing us with the resources to do so.
                            </Text>
                            <Text
                                p
                                className={"text-l text-center xl:text-left"}
                            >
                                <Link href={"https://pennlabs.org"} className={"text-blue-500"}><b>Penn Labs</b></Link> - For creating an awesome homepage that we borrowed design elements from.
                            </Text>
                        </div>
                        <div className={"w-2/5"}>
                            <Image
                                src={thankYou}
                                alt={"People at Work"}
                                width={3120}
                                height={1860}
                                className={""}
                            />
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </div>
    )
}

export default Home
