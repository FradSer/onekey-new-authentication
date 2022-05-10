import Head from 'next/head'
import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

import Logo from '../components/Logo'
import Title from '../components/Title'
import {
  baseSpringTranstion,
  baseEaseTranstion,
  DELAY,
} from '../configs/animation'

export default function Home() {
  const inputRef = useRef<HTMLDivElement | null>()
  const autoFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }
  useEffect(() => {
    autoFocus()
  }, [])
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
              delay: DELAY + 0.4,
              duration: 0.8,
              ...baseEaseTranstion,
            },
          }}
          initial={{ opacity: 0 }}
          className="absolute top-1/2 left-1/2 h-[56px] w-[326px] -translate-x-1/2 -translate-y-1/2 transform"
        >
          <button className="absolute top-1/2 right-2 h-[40px] w-[80px] -translate-y-1/2 transform rounded-[13px] bg-[#4CB13C]  text-white hover:bg-[#42A832]">
            解锁
          </button>
          <input
            className="h-full w-full appearance-none rounded-[16px] border-2 border-[#4D4E5B] bg-[#2A2B34] px-4 text-base leading-tight focus:border-[#4CB13C] focus:outline-none"
            id="Password"
            type="password"
            placeholder="请输入密码"
            ref={inputRef}
          ></input>
        </motion.div>
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
          <Logo />

          <motion.div
            animate={{
              opacity: 0,
              transition: {
                delay: DELAY,
                duration: 0.8,
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
              duration: 0.8,
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
