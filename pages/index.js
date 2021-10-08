import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CryptoFlyz</title>
        <meta name="description" content="Mint CryptoFlyz For Toadz Holders Only" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <input type="image" src="/connect-wallet-button.png" className="connectWallet"/>
        <div className="parent">
          <img src="/BG-image.png" className="image1"/>
          <img src="mint button.gif" className="image2"/>
        </div>
        <div id="stay">
          <p id="subtitle" className={styles.description}>
            CryptoFlyz are small, randomly generated companions for your CrypToad.<br></br>
            For every one toad in your wallet, you can claim one Fly.<br></br>
            <br></br>
            1 Toad = 1 Fly. 2 Toadz = 2 Flyz and so on.<br></br>
            <br></br>
            The Flyz are free to claim (you just pay gas) and come with a range of traits:<br></br>
            some based on classic Toad traits, some brand new, some common, and some less common.<br></br>
            <br></br>
            The mint period will last for two weeks until October 24th, and<br></br>
            after that, we will decide how to best distribute any left over Flyz to the community.<br></br>
            <br></br>
            Finally, enormous thanks and eternal respect to<br></br>
            Gremplin and the CrypToadz team.<br></br>
            <br></br>
            !vibe<br></br>
            <br></br>
            <hr></hr>
            <br></br>
            Made By:
            <br></br>
          </p>
        </div>

        <div id="stay2" className={styles.grid}>
          
          <figure id="fig1">
            <img src="/mason-pfp.png" width="125px"></img>
            <figcaption id="subtitle2">Mason London<br></br>(the pictures)</figcaption>
            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/masonlondon">
              <img className="twitterPng" src="twitter-icon.png"></img>
            </a>
          </figure>

          <figure id="fig2">
            <img src="/klee-pfp.png" width="125px"></img>
            <figcaption id="subtitle2">Klee<br></br>(the code)</figcaption>
            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/kevlee97">
              <img className="twitterPng" src="twitter-icon.png"></img>
            </a>
          </figure>

        </div>

      </main>
    </div>
  )
}
