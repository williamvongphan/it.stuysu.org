import type {GetStaticProps, NextPage} from 'next'
import Image from 'next/image'
import styles from '../../styles/Member.module.css'
import Header from '../../components/Header/Header'
import team from '../../config/team.json'
import {Category} from "../../components/Member/Category";
import {slugify} from "../../utils/slugify";
import { Tooltip, Button } from "@nextui-org/react";


import githubIcon from "../../public/img/social/logo-github.svg";
import twitterIcon from "../../public/img/social/logo-twitter.svg";
import discordIcon from "../../public/img/social/logo-discord.svg";
import linkedinIcon from "../../public/img/social/logo-linkedin.svg";
import instagramIcon from "../../public/img/social/logo-instagram.svg";
import youtubeIcon from "../../public/img/social/logo-youtube.svg";
import stackoverflowIcon from "../../public/img/social/logo-stackoverflow.svg";
import tiktokIcon from "../../public/img/social/logo-tiktok.svg";
import facebookIcon from "../../public/img/social/logo-facebook.svg";
import redditIcon from "../../public/img/social/logo-reddit.svg";
import npmIcon from "../../public/img/social/logo-npm.svg";
import twitchIcon from "../../public/img/social/logo-twitch.svg";
import {MemberType} from "../../types/Member";
import React, {Context} from "react";
import Footer from "../../components/Footer/Footer";
import Navigation from "../../components/Navigation/Navigation";


function findMember(target: string) {
    for (const category of team) {
        for (const member of category.members) {
            if (slugify(member.name) === target) {
                return member;
            }
        }
    }
    return null;
}

// Function to map url type to icon
const mapUrlTypeToIcon = (urlType: string) => {
    switch (urlType) {
        case "github":
            return githubIcon;
        case "twitter":
            return twitterIcon;
        case "discord":
            return discordIcon;
        case "linkedin":
            return linkedinIcon;
        case "instagram":
            return instagramIcon;
        case "youtube":
            return youtubeIcon;
        case "stackoverflow":
            return stackoverflowIcon;
        case "tiktok":
            return tiktokIcon;
        case "facebook":
            return facebookIcon;
        case "reddit":
            return redditIcon;
        case "npm":
            return npmIcon;
        case "twitch":
            return twitchIcon;
        default:
            return "";
    }
}

const mapTypeToFormalType = (type: string) => {
    switch (type) {
        case "github":
            return "GitHub";
        case "twitter":
            return "Twitter";
        case "discord":
            return "Discord";
        case "linkedin":
            return "LinkedIn";
        case "instagram":
            return "Instagram";
        case "youtube":
            return "YouTube";
        case "stackoverflow":
            return "Stack Overflow";
        case "tiktok":
            return "TikTok";
        case "facebook":
            return "Facebook";
        case "reddit":
            return "Reddit";
        case "npm":
            return "NPM";
        case "twitch":
            return "Twitch";
        default:
            return "";
    }
}

export const getStaticPaths = async () => {
    const paths = [];
    for (const category of team) {
        for (const member of category.members) {
            paths.push({params: {member: slugify(member.name)}});
        }
    }
    return {
        paths,
        fallback: false,
    };
}

// @ts-ignore
export const getStaticProps: GetStaticProps = async (context) => {
    // @ts-ignore
    const member = findMember(context.params.member as string);
    return {
        props: {
            member,
        }
    }
}

const TeamMember: NextPage = (props, context) => {
    // @ts-ignore
    let member: MemberType = props.member;
    return (
        <div>
            <Header title={member?.name} description={member?.bio} />
            <Navigation />
            <div className={styles.container}>
                <main className={styles.main}>
                    <div className={"w-2/3"}>
                        <div
                            className="flex flex-col md:flex-row rounded-lg shadow-lg overflow-hidden py-4 px-4 md:px-8 w-fit min-w-[400px]">
                            <div
                                className="h-48 w-full md:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden mr-2">
                                <Image
                                    src={member?.image}
                                    alt={member?.name}
                                    className={"rounded-lg shadow-lg w-full h-full object-cover"}
                                    width={300}
                                    height={300}
                                />
                            </div>
                            <div
                                className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-none">
                                <div>
                                    <div className="text-gray-900 font-bold text-4xl mb-2">{member?.name}</div>
                                    <p className="text-gray-700 text-2xl mb-2">{member?.title}</p>
                                    <div className="flex flex-wrap mt-2 mb-2">

                                        {
                                            // @ts-ignore
                                            props.member.roles.map((role: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined, key: React.Key | null | undefined) => (
                                            <span
                                                className="px-2 py-1 mr-2 text-sm font-medium text-indigo-900 bg-indigo-100 rounded-lg"
                                                key={key}
                                            >
                                                {role}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex flex-row flex-wrap mt-4">
                                        {member.socials && member?.socials.map((social, key) => (
                                            <Tooltip content={mapTypeToFormalType(social.type) + ": " + social.name}
                                                     key={key}>
                                                <a
                                                    href={social.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center justify-center w-10 h-10 mr-2 text-gray-900 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors duration-200"
                                                    key={key}

                                                >
                                                    <Image
                                                        src={mapUrlTypeToIcon(social.type)}
                                                        alt={social.type}
                                                        width={20}
                                                        height={20}
                                                    />
                                                </a>
                                            </Tooltip>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 w-full">
                            <div className="text-left w-full">
                                <p className={"text-xl text-gray-700"}>{member?.bio}</p>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </div>
    )
}

export default TeamMember;
