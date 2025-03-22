"use client";

import { MotionDiv, MotionH1, MotionP } from '../lib/motion'
import RotatingText from '../utils/RotatingText'
import { EmailBtn } from './EmailBtn'



export const Hero = () => {
  return (
    <section id="home">
      <MotionDiv className="mx-auto max-w-5xl">
        <div className="flex h-screen flex-col items-center justify-center gap-4">
          <MotionH1
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.7,
              duration: 0.3
            }}
            className="text-center text-8xl font-bold md:text-7xl sm:text-5xl"
          >
            {/* Jay Ganesh jay dada<span className="text-target">.</span> */}
            Urvish Patel<span className="text-target">.</span>
          </MotionH1>
          <MotionDiv
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 1,
              duration: 0.3
            }}
           className="flex items-center justify-center gap-3 text-3xl sm:text-3xl"
          >
            <RotatingText
              texts={['Full-stack developer', 'React developer','UI/UX Designer' ]} // ✅ Ensure texts prop is provided
              mainClassName="px-6 sm:px-2 md:px-3  text-target overflow-hidden py-3 sm:py-1 md:py-2 justify-center rounded-sm"
              staggerFrom='last'
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}

            />
            {/* <span className="font-bold text-target">Full-stack</span> */}
          </MotionDiv>
          <MotionDiv
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1.3, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 1.2,
              duration: 0.3
            }}
            className="mt-4"
          >
            <EmailBtn />
          </MotionDiv>
        </div>
      </MotionDiv>

    </section>
  )
}
