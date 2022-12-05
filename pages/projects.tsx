import type {NextPage} from 'next'
import styles from '../styles/Home.module.css'

// Import header
import Header from '../components/Header/Header'
import React from "react";
import { Text } from "@nextui-org/react";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";

const Projects: NextPage = () => {
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
                                    textGradient: "45deg, $purple600 0%, $red500 25%",
                                }}
                            >
                                Projects
                            </Text>
                            <Text // @ts-ignore
                                p
                                className={"text-3xl text-center xl:text-left"}
                            >
                                Soon
                            </Text>
                        </div>
                        <div className={"w-2/5"}>
                            <Text // @ts-ignore
                                p
                                className={"text-l text-center xl:text-left"}
                            >
                                Soon
                            </Text>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </div>
    )
}

export default Projects