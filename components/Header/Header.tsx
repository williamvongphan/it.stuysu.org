import React from 'react'
import Head from 'next/head'

// Load all information except for the title from the config file
const config = require('../../config/header.json')
const siteTitle = config.siteTitle
const author = config.author
const keywords = config.keywords

// Import site logo from static folder
const siteLogo = require('../../public/img/stuysu.png')

// Rest of arguments are passed in from the page
const Header = (props: { title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | null | undefined; description: string | undefined }) => {
    return (<Head>
            <title>{props.title + " | " + siteTitle}</title>
            <link rel="icon" href="img/stuysu.png" type="image/png"/>
            <meta name="title" content={props.title + " | " + siteTitle}/>
            <meta name="og:title" content={props.title + " | " + siteTitle}/>
            <meta name="twitter:title" content={props.title + " | " + siteTitle}/>
            <meta name="description" content={props.description}/>
            <meta name="og:description" content={props.description}/>
            <meta name="twitter:description" content={props.description}/>
            <meta name="og:image" content={siteLogo}/>
            <meta name="twitter:image" content={siteLogo}/>
            <meta name="robots" content="index, follow"/>
            <meta name="charset" content="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
            <meta name="author" content={author}/>
            <meta name="keywords" content={keywords}/>
        </Head>)
}

export default Header