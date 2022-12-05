import type {NextPage} from 'next'
import Image from 'next/image'
import styles from '../../styles/Team.module.css'

// Import header
import Header from '../../components/Header/Header'
import Navigation from '../../components/Navigation/Navigation'

// Import all data
import team from '../../config/team.json'

import {Category} from "../../components/Member/Category";

import peopleVector from "../../public/img/vector/people.svg";

import { Text } from "@nextui-org/react";
import Footer from "../../components/Footer/Footer";

const Home: NextPage = () => {
    // @ts-ignore
    return (<div>
            <Header title="Team" description="Team Member"/>
            <div className={styles.container}>
                <Navigation/>

                <main className={styles.main}>
                    <div className={"w-full xl:p-4 p-2 m-auto flex flex-wrap justify-center"}>
                        <div className={"w-2/3 xl:p-4 p-2 min-w-[400px] mb-8"}>
                            <Text
                                h1
                                className={"text-6xl font-bold text-center xl:text-left"}
                                css={{
                                    textGradient: "45deg, $blue500 -20%, $red500 50%",
                                }}
                            >
                                Our Team
                            </Text>
                            <Text
                                h2
                                className={"text-3xl font-bold text-center xl:text-left mb-4"}
                            >
                                Meet the people behind the scenes
                            </Text>
                            <Text // @ts-ignore
                                p
                                className={"text-xl text-center xl:text-left"}
                            >
                                We are a group of students who are passionate about technology and want to make a difference in the world.
                                Together, we are working to make Stuyvesant a better place to learn and grow as a student and in the community.
                                Through a variety of websites and projects, we&amp;apos;re making being a student at Stuyvesant easier, more community-oriented, and more fun.
                                Our tight-knit group is fun, friendly, and laid-back, yet we are also hard-working and dedicated to our mission.
                            </Text>
                        </div>
                        <div className={"w-1/3 max-w-[400px] min-h-100"}>
                            <Image
                                src={peopleVector}
                                alt={"People"}
                                width={512}
                                height={512}
                                className={"h-full"}
                            />
                        </div>
                    </div>
                    <div>
                        {team.map((category, key) => (
                            // @ts-ignore
                            <Category category={category} key={key} />
                        ))}
                    </div>
                    <Footer />
                </main>
            </div>
        </div>)
}

export default Home
