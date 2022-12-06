// Member card component
import React from 'react';
import Link from 'next/link';
import styles from '../../styles/MemberCard.module.css';
import { MemberType } from '../../types/Member';
import { slugify } from "../../utils/slugify";
import Image from "next/image"

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
// Member card component


export const MemberCard = (props: { member: MemberType }) => {
    return (
        <Link href={`/team/${slugify(props.member.name)}`}>
            <div className="flex flex-col items-center justify-center p-4 m-2 bg-white hover:rounded-lg hover:shadow-lg duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 w-72">
                <div className="relative w-full bg-gray-100 rounded-lg shadow-lg">
                    <Image
                        className="object-cover w-72 h-72 rounded-lg shadow-lg"
                        src={props.member.image}
                        alt={props.member.name}
                        width={256}
                        height={256}
                    />

                </div>
                <div className="flex flex-col w-full h-full mt-4 text-left">
                    <h2 className="mt-4 text-2xl font-bold text-gray-900 hubot">{props.member.name}</h2>
                    <h3 className="mt-2 text-xl font-medium text-gray-900">{props.member.title}</h3>
                    <div className="flex flex-wrap mt-4">
                        {props.member.roles.map((role: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined, key: React.Key | null | undefined) => (
                            <span
                                className="px-2 py-1 mr-1 mb-1 text-xs font-medium text-indigo-900 bg-indigo-100 rounded-lg"
                                key={key}
                            >
                            {role}
                        </span>
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    )
}