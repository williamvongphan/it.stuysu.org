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
import peopleRow from "../public/img/vector/people row.svg";
import anxiousPerson from "../public/img/vector/anxious person.svg";

const Home: NextPage = () => {
    return (
        <div>
            <Header title="About" description="About the Stuyvesant Student Union IT department" />
                <Navigation/>
                <main className={styles.main}>
                    <div className={"container w-8/9 p-4 m-auto flex flex-wrap justify-center"}>
                        <div className={"w-1/2 min-w-[400px] mb-8 xl:pr-8"}>
                            <Text
                                h1
                                className={"text-7xl font-bold text-center xl:text-left"}
                                css={{
                                    textGradient: "45deg, $blue400 0%, $red800 50%",
                                }}
                            >
                                Our Mission
                            </Text>
                            <Text
                                // @ts-ignore
                                p
                                className={"text-xl text-center xl:text-left"}
                            >
                                The Stuyvesant Student Union Information Technology Department is a group of students who are dedicated to providing the Stuyvesant community with the best technology possible. We maintain core applications such as StuyActivities, and create new applications designed to improve the Stuyvesant experience. We also collaborate with other departments to provide the best possible experience for all students.
                            </Text>
                        </div>
                        <div className={"w-1/2  xl:pl-4"}>
                            <Image
                                src={peopleRow}
                                alt={"People at Work"}
                                width={3120}
                                height={1860}
                                className={""}
                            />
                        </div>
                    </div>
                    <br/>
                    <div className={"container w-8/9 p-4 m-auto flex flex-wrap justify-center"}>
                        <div className={"w-1/2 xl:pl-4"}>
                            <Image
                                src={anxiousPerson}
                                alt={"Anxious Person"}
                                width={1089}
                                height={964}
                                className={""}
                            />
                        </div>

                        <div className={"w-1/2 min-w-[400px] mb-8 xl:pr-8"}>
                            <Text
                                h1
                                className={"text-7xl font-bold text-center xl:text-left"}
                                css={{
                                    textGradient: "-133deg, $blue600 0%, $green500 100%",
                                }}
                            >
                                Founding
                            </Text>
                            <Text // @ts-ignore
                                p
                                className={"text-xl text-center xl:text-left"}
                            >
                                We were founded in (this is random placeholder and will be changed later) by a group of students who wanted to improve the Stuyvesant experience. We have since grown to a team of 10+ students who are dedicated to providing the best technology possible.
                            </Text>
                        </div>
                    </div>
                    <Footer/>
                </main>
        </div>
    )
}

export default Home
