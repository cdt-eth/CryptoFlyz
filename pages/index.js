/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>CryptoFlyz</title>
        <meta
          name="description"
          content="Mint CryptoFlyz For Toadz Holders Only"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="px-10 py-4">
        <div className="flex justify-end mb-6">
          <img
            src="/connect-wallet-button.png"
            alt="wallet"
            className="xs:w-1/4 sm:w-1/12 cursor-pointer"
          />
        </div>

        <div className="">
          <div className="parent ">
            <img src="/BG-image.png" className="image1" />
            <img src="mint button.gif" className="image2" />
          </div>
        </div>

        <div id="stay" className="text-center">
          <p id="subtitle" className="xs:pt-4 sm:pt-10">
            CryptoFlyz are small, randomly generated companions for your
            CrypToad.<br></br>
            For every one toad in your wallet, you can claim one Fly.<br></br>
            <br></br>1 Toad = 1 Fly. 2 Toadz = 2 Flyz and so on.<br></br>
            <br></br>
            The Flyz are free to claim (you just pay gas) and come with a range
            of traits:<br></br>
            some based on classic Toad traits, some brand new, some common, and
            some less common.<br></br>
            <br></br>
            The mint period will last for two weeks until October 24th, and
            <br></br>
            after that, we will decide how to best distribute any left over Flyz
            to the community.<br></br>
            <br></br>
            Finally, enormous thanks and eternal respect to<br></br>
            Gremplin and the CrypToadz team.<br></br>
            <br></br>
            !vibe
            <br></br>
            <hr></hr>
          </p>
        </div>

        <div id="stay2" className="pt-4 text-white">
          <p className=" scratchy text-center text-2xl pb-6">Made By:</p>

          <div className=" flex justify-around sm:w-1/2 m-auto pb-10">
            <figure id="fig1" className="">
              <img src="/mason-pfp.png" width="125px"></img>
              <figcaption id="subtitle2">
                Mason London<br></br>(the pictures)
              </figcaption>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/masonlondon"
              >
                <img className="twitterPng" src="twitter-icon.png"></img>
              </a>
            </figure>

            <figure id="fig2" className="">
              <img src="/klee-pfp.png" width="125px"></img>
              <figcaption id="subtitle2">
                Klee<br></br>(the code)
              </figcaption>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/kevlee97"
              >
                <img className="twitterPng" src="twitter-icon.png"></img>
              </a>
            </figure>
          </div>
        </div>
      </main>
    </div>
  );
}
