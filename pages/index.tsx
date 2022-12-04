import type {NextPage} from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

// Import header
import Header from '../components/Header'

const Home: NextPage = () => {
    return (
        <div>
            <Header title="Home" description="This is the home page" />
            <p>
                Test
            </p>
        </div>
    )
}

export default Home
