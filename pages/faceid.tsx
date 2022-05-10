import Head from 'next/head'
import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import Image from 'next/image'

import Logo from '../components/Logo'
import Title from '../components/Title'
import {
  baseSpringTranstion,
  baseEaseTranstion,
  DELAY,
  DURATION,
} from '../configs/animation'

export default function FaceIDPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#1A1A20] py-2 text-[#E1E1E7]">
      <Head>
        <title>OneKey</title>
      </Head>

      <main className="flex h-full w-full flex-col items-center justify-center">
        <motion.div
          animate={{
            opacity: 1,
            transition: {
              delay: DELAY + DURATION,
              ...baseSpringTranstion,
            },
          }}
          initial={{ opacity: 0 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform"
        >
          <Image
            src="/faceid.png"
            width={158}
            height={158}
            alt=""
            className="h-full w-full"
          />
        </motion.div>
        {/* Input */}
        <motion.div
          animate={{
            y: '-190px',
            height: '16px',
            opacity: 1,
            transition: {
              delay: DELAY + DURATION,
              ...baseSpringTranstion,
              opacity: {
                delay: DELAY + DURATION / 2,
                duration: DURATION,
                ...baseEaseTranstion,
              },
            },
          }}
          initial={{ y: '0', x: '-50%', opacity: 0 }}
          className="absolute top-1/2 left-1/2 h-[56px] w-[326px] -translate-x-1/2 transform"
        >
          <div className="h-full w-full appearance-none rounded-[16px] border-2 border-[#4D4E5B] bg-[#2A2B34] px-4 text-base leading-tight focus:border-[#4CB13C] focus:outline-none"></div>
        </motion.div>
        {/* Logo with Header */}
        <motion.div
          animate={{
            y: '-24vh',
            transition: {
              delay: DELAY,
              ...baseSpringTranstion,
            },
          }}
          initial={{ y: 0 }}
          className="flex flex-col items-center justify-center gap-8 px-20 text-center"
        >
          <motion.div
            animate={{
              translateY: [0, -3, 0],
              y: '100px',
              rotateX: '-60deg',
              transition: {
                delay: DELAY + DURATION,
                ...baseSpringTranstion,
                translateY: {
                  delay: DELAY + DURATION,
                  repeat: Infinity,
                  repeatType: 'mirror',
                },
              },
            }}
            initial={{ y: 0, rotateX: 0, translateY: 0 }}
          >
            <Logo />
          </motion.div>

          <motion.div
            animate={{
              opacity: 0,
              transition: {
                delay: DELAY,
                duration: DURATION,
                ...baseEaseTranstion,
              },
            }}
            initial={{ opacity: 1 }}
          >
            <Title />
          </motion.div>
        </motion.div>
        <motion.p
          animate={{
            opacity: 1,
            transition: {
              delay: DELAY,
              duration: DURATION,
              ...baseEaseTranstion,
            },
          }}
          initial={{ opacity: 0 }}
          className="absolute bottom-8 text-sm text-[#4CB13C]"
        >
          忘记密码？
        </motion.p>
      </main>
    </div>
  )
}
