import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/Navigation.module.css'
import {Navbar, Button, Text} from "@nextui-org/react";
// Load navigation information from config file
const config = require('../../config/navigation.json')
import SULogo from '../../public/img/stuysu.png'

// Navigation component
// Contains links to other pages
const Navigation = (props: {}) => {
    return (<Navbar className={styles.navbar} variant={"floating"}>
            <Navbar.Brand>
                <Link href="/" className={"flex items-center"}>
                    <Image
                        src={SULogo}
                        alt="StuySU Logo"
                        width={50}
                        height={50}
                        className={"w-8 h-8"}
                    />
                    <Text b color="inherit" hideIn="xs" className={"pt-1 ml-2"}>
                        StuySU IT
                    </Text>
                </Link>
            </Navbar.Brand>
            <Navbar.Content hideIn="xs">
                {config.map((item: { name: string; link: string; }, key:number) => {
                    return (<Link href={item.link} key={key}>
                        <Text b color="inherit" className={"text-gray-600 hover:text-gray-800 transition-colors duration-200"}>
                            {item.name}
                        </Text>
                    </Link>)
                })}
            </Navbar.Content>
            <Navbar.Toggle aria-label={"Toggle navigation"} showIn={"xs"}/>
            <Navbar.Collapse showIn={"xs"}>
                {config.map((item: { name: string; link: string; }, key: number) => {
                    return (
                        <Navbar.CollapseItem key={key}>
                            <Link
                                color="inherit"
                                css={{
                                    minWidth: "100%",
                                }}
                                href={item.link}
                            >
                                {item.name}
                            </Link>
                        </Navbar.CollapseItem>
                    );
                })}
            </Navbar.Collapse>

        </Navbar>)
}

export default Navigation