// Team component
// Contains either a list of members or a list of categories
import React from 'react';
import {CategoryType} from '../../types/Category';
import {Text, Row, Col, Card, Button    } from "@nextui-org/react";
import Image from "next/image";

export const ProductHero = (props: { image: any, children: React.ReactNode, className: string }) => {
    return (
        // A product hero is a block with some elements, and the top 50% of an image
        <div className={"container w-8/9 h-[100%] min-w-[350px] m-auto flex flex-wrap justify-center xl:pt-4 xl:pr-4 xl:pl-4 m:pt-2 m:pr-2 m:pl-2 pr-1 pl-1 pt-1 mb-8 rounded-lg shadow-lg " + props.className}>
            <div>
                <Card.Body css={{ p: 0 }}>
                    <div className={"w-full h-full mb-6"}>
                        {props.children}
                    </div>
                    <div className={"overflow-hidden h-min"}>
                        {props.image}
                    </div>
                </Card.Body>
            </div>
        </div>
    );
};