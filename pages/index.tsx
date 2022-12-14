import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ProfileImg from '../img/profile.jpg'
import {BsGithub, BsTwitter, BsMailbox} from 'react-icons/bs'

const Home: NextPage = () => {
  return (
    <div className={styles.mainContainer}>
      <Head>
        <title>Jonathon Chambers</title>
        <meta name="description" content="Florida based developer with software testing experience." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className={styles.intro}>
        
      <h1>Hi, I am <span className={styles.name}>Jonathon</span></h1>
      <p>I am a Software/QA Engineer based in Ocala, Fl.</p>
      <div className={styles.socials}>
        <a href="https://github.com/FFCoder" target="_blank" rel="noreferrer">
          <BsGithub />
        </a>
        <a href="https://twitter.com/Chambers_Jon" target="_blank" rel="noreferrer">
          <BsTwitter />
        </a>
        <a href="mailto:jonathon@jonathonchambers.com">
          <BsMailbox />
        </a>
      </div>
        </div>
      <div className={styles.arrowBG}>
      <div className={styles.topBox}>
          <Image src={ProfileImg} alt="profile" width={302/1.2} height={402/1.2} />
       
        </div>
      </div>
    </div>
  )
}

export default Home
