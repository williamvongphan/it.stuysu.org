import React from 'react';
import styles from '../../styles/Footer.module.css'
import {Text} from "@nextui-org/react";

const Footer = () => {
    return (<footer className={styles.footer}>
            <div className={styles.container}>
                <Text // @ts-ignore
                    p
                    className={"text-sm text-center"}
                    css={{
                        color: "$gray700"
                    }}
                >
                    StuySU IT ©️ {new Date().getFullYear()}. Made with ❤️ in New York City.
                </Text>
            </div>
        </footer>)
}

export default Footer