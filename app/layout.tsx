import React from 'react';
import NextImage from 'next/image';

import '../styles/font.scss';
import '../styles/globals.scss';

import EnimeIcon from '@/public/icons/64x64.png';
import GithubIcon from '@/public/icons/github.png';
import DiscordIcon from '@/public/icons/discord.png';

import styles from './app.module.scss';
import classNames from 'classnames';
import TopNavigation from '@/components/navigation/top';
import { getSession } from '@/lib/auth';
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    const session = await getSession();

  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </head>
      <body>
        <div className="bg-black text-white flex flex-col">
          <TopNavigation />
          <div className="flex-grow w-screen p-0 m-0 mt-10 mb-10">{children}</div>
          <footer className="bg-[#222] py-10">
            <div className={classNames(styles["foot-cont"], "flex flex-row content-between")}>
              <div className={styles.disclaimer}>
                <div className="flex flex-row items-center mb-3">
                  <NextImage src={EnimeIcon} alt="Enime Icon" className="w-6 mr-2"/>
                  <h1 className="text-2xl">Inime</h1>
                </div>
                <p className={styles["gray-text"]}>
                  PureReader's Anime section (Inime) is not affiliated with or endorsed by any of the
                  anime studios behind the creation of the anime presented on
                  this site. This website is only an user interface
                  presenting/linking various self-hosted files across the
                  internet by other third-party providers for easy access.
                  <br />© thesonofdevilhunter {new Date().getFullYear()} | Also sidenote , Laksh is a dumbass
                </p>
              </div>
              <div className="flex-1 flex items-center justify-end">
                <a target="_blank" href="https://github.com/NeptuneDevelopment-IN">
                  <NextImage className="w-7 mr-5" src={GithubIcon} alt="Github Icon"/>
                </a>
                <a target="_blank" href="https://discord.io/neptunedevelopment">
                  <NextImage className="w-7" src={DiscordIcon} alt="Discord Icon"/>
                </a>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
