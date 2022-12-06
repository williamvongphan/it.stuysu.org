// Team component
// Contains either a list of members or a list of categories
import React from 'react';
import {CategoryType} from '../../types/Category';
import {Text} from "@nextui-org/react";
import Image from "next/image";

export const LeftHero = (props: { image: typeof Image, children: React.ReactNode }) => {
    return (
        <div className={"container w-8/9 p-4 m-auto flex flex-wrap justify-center"}>
            <div className={"w-1/2 min-w-[400px] mb-8"}>
                {props.children}
            </div>
            <div className={"w-1/2 min-w-[400px]"}>
                {props.image}
            </div>
        </div>
    );
};