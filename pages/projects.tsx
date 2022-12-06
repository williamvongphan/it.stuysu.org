import type {NextPage} from 'next'
import styles from '../styles/Home.module.css'

// Import header
import Header from '../components/Header/Header'
import React from "react";
import {Button, Text} from "@nextui-org/react";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import Link from "next/link";
import Image from "next/image";
import productMockups from "../public/img/png/product mockups.png";
import {ProductHero} from "../components/Hero/ProductHero";

import stuyactivitiesOnPhone from "../public/img/png/stuyactivities on phone.png";
import todayOnPhone from "../public/img/png/today on phone.png";
import opportunitiesOnPhone from "../public/img/png/opportunities on phone.png";

const Projects: NextPage = () => {
    return (
        <div>
            <Header title="Credits" description="Giving credit where credit is due (and some more)" />
                <Navigation/>
                <main className={styles.main}>
                    <div className={"container w-8/9 p-4 m-auto flex flex-wrap justify-center mb-8"}>
                        <div className={"w-3/5 min-w-[400px] mb-8"}>
                            <Text
                                h1
                                className={"text-7xl font-bold text-center xl:text-left mb-4 hubot"}
                                css={{
                                    textGradient: "45deg, $blue500 -20%, $red500 50%",
                                }}
                            >
                                Products
                            </Text>
                            <Text // @ts-ignore
                                p
                                className={"text-3xl text-center xl:text-left mb-4"}
                            >
                                We&apos;ve been creating websites and software for as long as we can remember, but our work for Stuyvesant has had special places in our hearts. We use the most modern technologies and new packages to ensure that our products are always on the bleeding edge of what can be dreamt of.
                            </Text>
                        </div>
                        <div className={"w-2/5"}>
                            <Image
                                src={productMockups}
                                alt={"People at Work"}
                                width={3120}
                                height={1860}
                                className={""}
                            />
                        </div>
                    </div>
                    <div className={"snap-y"}>
                        <ProductHero className={"snap-center"} image={
                            <Image
                                src={stuyactivitiesOnPhone}
                                alt={"StuyActivities on Phone"}
                                width={651}
                                height={1080}
                                className={"m-auto"}
                            />
                        }>
                            <Text // @ts-ignore
                                h1
                                className={"xl:text-7xl md:text-5xl text-4xl font-bold text-center mb-4 hubot"}
                                css={{
                                    textGradient: "45deg, $blue500 -20%, $red500 50%",
                                }}
                            >
                                StuyActivities
                            </Text>
                            <Text // @ts-ignore
                                p
                                className={"text-xl text-center mb-4"}
                            >
                                Our flagship product, StuyActivities is a website that allows students to find and join clubs, and for clubs to advertise their events and recruit new members. It&apos;s a one-stop shop for all things Stuyvesant clubs.
                            </Text>
                            <div className={"w-full flex justify-center"}>
                                <Link href={"https://stuyactivities.org"}>
                                    <Button
                                        auto
                                        className={"m-2"}
                                    >
                                        Visit
                                    </Button>
                                </Link>
                                <Link href={"https://github.com/stuysu/stuyactivities.org"}>
                                    <Button
                                        auto
                                        className={"m-2"}
                                    >
                                        Source Code
                                    </Button>
                                </Link>
                            </div>
                        </ProductHero>
                        <ProductHero className={"snap-center"} image={
                            <Image
                                src={todayOnPhone}
                                alt={"Today on Phone"}
                                width={651}
                                height={1080}
                                className={"m-auto"}
                            />
                        }>
                            <Text // @ts-ignore
                                h1
                                className={"xl:text-7xl md:text-5xl text-4xl font-bold text-center mb-4 hubot"}
                                css={{
                                    textGradient: "45deg, $blue500 -20%, $red500 50%",
                                }}
                            >
                                Today at Stuy
                            </Text>
                            <Text // @ts-ignore
                                p
                                className={"text-xl text-center mb-4"}
                            >
                                Today at Stuy is a website that allows students to see what&apos;s happening at Stuyvesant today, whether its the bell schedule, testing dates, or even daily announcements. No more need to ask your friends what cycle it is!
                            </Text>
                            <div className={"w-full flex justify-center"}>
                                <Link href={"https://today.stuysu.org"}>
                                    <Button
                                        auto
                                        className={"m-2"}
                                    >
                                        Visit
                                    </Button>
                                </Link>
                                <Link href={"https://github.com/stuysu/today.stuysu.org"}>
                                    <Button
                                        auto
                                        className={"m-2"}
                                    >
                                        Source Code
                                    </Button>
                                </Link>
                            </div>
                        </ProductHero>
                        <ProductHero className={"snap-center"} image={
                            <Image
                                src={opportunitiesOnPhone}
                                alt={"Opportunities on Phone"}
                                width={651}
                                height={1080}
                                className={"m-auto"}
                            />
                        }>
                            <Text // @ts-ignore
                                h1
                                className={"xl:text-7xl md:text-5xl text-4xl font-bold text-center mb-4 hubot"}
                                css={{
                                    textGradient: "45deg, $blue500 -20%, $red500 50%",
                                }}
                            >
                                Opportunities Bulletin
                            </Text>
                            <Text // @ts-ignore
                                p
                                className={"text-xl text-center mb-4"}
                            >
                                Appreciate the content in Mr. Blumm&apos;s Opportunities Bulletinm but don&apos;t want to scroll through 5,000 pages? Well, now you can access these opportunities much more easily! The Opportunities Bulletin is a website that allows students to see all the opportunities that are available to them, whether its scholarships, internships, or even jobs.
                            </Text>
                            <div className={"w-full flex justify-center"}>
                                <Link href={"https://opportunities.stuysu.org"}>
                                    <Button
                                        auto
                                        className={"m-2"}
                                    >
                                        Visit
                                    </Button>
                                </Link>
                                <Link href={"https://github.com/stuysu/opportunities.stuysu.org"}>
                                    <Button
                                        auto
                                        className={"m-2"}
                                    >
                                        Source Code
                                    </Button>
                                </Link>
                            </div>
                        </ProductHero>
                    </div>
                    <Footer />
                </main>
        </div>
    )
}

export default Projects