import { motion } from "framer-motion";
import frontPhone from "./assets/phone-front.png"; // Your SVG
import backPhone from "./assets/phone-back.png"; // iPhone back image

export default function PremiumPhone() {
  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden bg-black">

      {/* Background Glow */}
      <div className="absolute w-[700px] h-[700px] rounded-full bg-yellow-500/10 blur-[180px]" />

      {/* Perspective */}
      <div
        className="relative w-[340px] h-[700px]"
        style={{
          perspective: "2200px",
        }}
      >
        {/* Floating */}
        <motion.div
          animate={{
            y: [-12, 12, -12],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0"
        >
          {/* Rotation */}
          <motion.div
            animate={{
              rotateY: 360,
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              transformStyle: "preserve-3d",
            }}
            className="relative w-full h-full"
          >
            {/* FRONT */}
            <div
              className="absolute inset-0"
              style={{
                transform: "translateZ(10px)",
                backfaceVisibility: "hidden",
              }}
            >
              <div className="relative w-full h-full">

                <img
                  src={frontPhone}
                  className="w-full h-full object-contain drop-shadow-[0_40px_60px_rgba(0,0,0,.6)]"
                  alt=""
                />

                {/* Glass Reflection */}
                <motion.div
                  animate={{
                    x: ["-120%", "180%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                    repeatDelay: 1,
                  }}
                  className="absolute inset-0 overflow-hidden rounded-[50px]"
                >
                  <div
                    className="absolute top-0 left-0 w-28 h-full rotate-12 bg-gradient-to-r from-transparent via-white/40 to-transparent blur-xl"
                  />
                </motion.div>

              </div>
            </div>

            {/* BACK */}
            <div
              className="absolute inset-0"
              style={{
                transform: "rotateY(180deg) translateZ(10px)",
                backfaceVisibility: "hidden",
              }}
            >
              <img
                src={backPhone}
                className="w-full h-full object-contain drop-shadow-[0_40px_60px_rgba(0,0,0,.6)]"
                alt=""
              />
            </div>

            {/* LEFT EDGE */}
            <div
              className="absolute left-1/2 top-0 h-full w-[20px] -translate-x-1/2 bg-gradient-to-b from-zinc-500 via-zinc-900 to-zinc-500"
              style={{
                transform:
                  "rotateY(90deg) translateZ(160px)",
              }}
            />

            {/* RIGHT EDGE */}
            <div
              className="absolute left-1/2 top-0 h-full w-[20px] -translate-x-1/2 bg-gradient-to-b from-zinc-500 via-zinc-900 to-zinc-500"
              style={{
                transform:
                  "rotateY(-90deg) translateZ(160px)",
              }}
            />

          </motion.div>
        </motion.div>

        {/* Shadow */}
        <motion.div
          animate={{
            scale: [1, 0.9, 1],
            opacity: [0.35, 0.2, 0.35],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[260px] h-[40px] rounded-full bg-black blur-3xl"
        />
      </div>

      {/* Ambient Lights */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-yellow-400/10 rounded-full blur-[120px]" />

    </section>
  );
}