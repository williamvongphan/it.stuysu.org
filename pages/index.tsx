import type {NextPage} from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

// Import header
import Header from '../components/Header/Header'
import {Button, Text} from "@nextui-org/react";

import Navigation from "../components/Navigation/Navigation";
import stuyactivitiesMockup from "../public/img/png/stuyactivities mockup.png";
import Footer from "../components/Footer/Footer";
import Link from "next/link";
import anxiousPerson from "../public/img/vector/anxious person.svg";
import React from "react";

const Home: NextPage = () => {
    return (
        <div>
            <Header title="Home" description="This is the home page" />
            <div className={styles.container}>
                <Navigation/>
                <main className={styles.main}>
                    <div className={"container w-8/9 p-4 m-auto flex flex-wrap justify-center mb-8"}>
                            <div className={"w-1/3 min-w-[400px] mb-8"}>
                                <Text
                                    h1
                                    className={"text-7xl font-bold text-center xl:text-left mb-4"}
                                    css={{
                                        textGradient: "45deg, $blue500 -20%, $red500 50%",
                                    }}
                                >
                                    For students, by students.
                                </Text>
                                <Text
                                    p
                                    className={"text-3xl text-center xl:text-left mb-4"}
                                >
                                    StuySU IT is making Stuyvesant a better place to learn and grow as a student and in the community.
                                </Text>
                                <Link href={"/projects"} className={"m-auto"}>
                                    <Button
                                        color="primary"
                                        auto
                                        ghost
                                        className={"m-auto xl:m-0"}
                                    >
                                        Projects
                                    </Button>
                                </Link>
                            </div>
                            <div className={"w-2/3"}>
                                <Image
                                    src={stuyactivitiesMockup}
                                    alt={"People at Work"}
                                    width={3120}
                                    height={1860}
                                    className={""}
                                />
                            </div>
                        </div>
                    <div className={"container w-8/9 p-4 m-auto"}>
                        <Text
                            h1
                            className={"text-7xl font-bold text-center xl:text-left mb-4"}
                            css={{
                                textGradient: "-210deg, $blue400 0%, $green500 100%",
                            }}
                        >
                            By the numbers
                        </Text>
                        <div className={"flex flex-wrap xl:justify-start justify-center"}>
                            <div className={"w-[30%] mb-4 min-w-[300px] sm:mr-4 bg-[#18a2b8] p-4 rounded-lg shadow-lg"}>
                                <Text
                                    h1
                                    className={"text-3xl font-bold text-center xl:text-left"}
                                    css={{
                                        color: "white"
                                    }}
                                >
                                    3000+ students
                                </Text>
                                <Text
                                    p
                                    className={"text-xl text-center xl:text-left"}
                                    css={{
                                        color: "white"
                                    }}
                                >
                                    use StuyActivities, our flagship product
                                </Text>
                            </div>

                            <div className={"w-[30%] mb-4 sm:ml-4 min-w-[300px] sm:mr-4 bg-[#f67c83] p-4 rounded-lg shadow-lg"}>
                                <Text
                                    h1
                                    className={"text-3xl font-bold text-center xl:text-left"}
                                    css={{
                                        color: "white"
                                    }}
                                >
                                    11
                                </Text>
                                <Text
                                    p
                                    className={"text-xl text-center xl:text-left"}
                                    css={{
                                        color: "white"
                                    }}
                                >
                                    team members in our tight-knit team
                                </Text>
                            </div>

                            <div className={"w-[30%] mb-4 min-w-[300px] sm:ml-4 bg-[#6ccd97] p-4 rounded-lg shadow-lg"}>
                                <Text
                                    h1
                                    className={"text-3xl font-bold text-center xl:text-left"}
                                    css={{
                                        color: "white"
                                    }}
                                >
                                    3
                                </Text>
                                <Text
                                    p
                                    className={"text-xl text-center xl:text-left"}
                                    css={{
                                        color: "white"
                                    }}
                                >
                                    major projects we have worked on
                                </Text>
                            </div>
                        </div>


                    </div>
                </main>
                <Footer />
            </div>
        </div>
    )
}

export default Home
