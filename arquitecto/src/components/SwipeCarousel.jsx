import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import rogelio1 from '../assets/photography/urban/rogelio1.png'
import rogelio2 from '../assets/photography/urban/rogelio2.png'
import rogelio3 from '../assets/photography/urban/rogelio3.png'
import rogelio4 from '../assets/photography/urban/rogelio4.png'
import rogelio5 from '../assets/photography/urban/rogelio5.png'
import rogelio6 from '../assets/photography/urban/rogelio6.png'
import rogelio7 from '../assets/photography/urban/rogelio7.png'
import rogelio8 from '../assets/photography/urban/rogelio8.png'
import rogelio9 from '../assets/photography/urban/rogelio9.png'
import rogelio10 from '../assets/photography/urban/rogelio10.png'
import rogelio11 from '../assets/photography/urban/rogelio11.png'
import rogelio12 from '../assets/photography/urban/rogelio12.png'
import rogelio13 from '../assets/photography/urban/rogelio13.png'
import rogelio14 from '../assets/photography/urban/rogelio14.png'
import rogelio15 from '../assets/photography/urban/rogelio15.png'
import rogelio16 from '../assets/photography/urban/rogelio16.png'
import rogelio17 from '../assets/photography/urban/rogelio17.png'
import rogelio18 from '../assets/photography/urban/rogelio18.png'
import rogelio19 from '../assets/photography/urban/rogelio19.png'
import rogelio20 from '../assets/photography/urban/rogelio20.png'
import rogelio21 from '../assets/photography/urban/rogelio21.png'
import rogelio22 from '../assets/photography/urban/rogelio22.png'
import rogelio23 from '../assets/photography/urban/rogelio23.png'




const imgs = [
  rogelio1, rogelio2, rogelio3, rogelio4, rogelio5, rogelio6, rogelio7, rogelio8, rogelio9, rogelio10, rogelio11, rogelio12, rogelio13, rogelio14, rogelio15, rogelio16, rogelio17, rogelio18, rogelio19, rogelio20, rogelio21, rogelio22, rogelio23


];

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

export const SwipeCarousel = () => {
  const [imgIndex, setImgIndex] = useState(0);

  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setImgIndex((pv) => {
          if (pv === imgs.length - 1) {
            return 0;
          }
          return pv + 1;
        });
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, []);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  return (
    <div className="relative overflow-hidden bg-gray-default dark:bg-corbeau-default py-8 h-screen w-full">
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${imgIndex * 100}%`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex cursor-grab items-center active:cursor-grabbing "
      >
        <Images imgIndex={imgIndex} />
      </motion.div>

      <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
      <GradientEdges />
    </div>
  );
};

const Images = ({ imgIndex }) => {
  return (
    <>
      {imgs.map((imgSrc, idx) => {
        return (
          <motion.div
            key={idx}
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            animate={{
              scale: imgIndex === idx ? 0.95 : 0.85,
            }}
            transition={SPRING_OPTIONS}
            className="aspect-video w-screen shrink-0 rounded-xl object-cover"
          />
        );
      })}
    </>
  );
};

const Dots = ({ imgIndex, setImgIndex }) => {
  return (
    <div className="mt-4 flex w-full justify-center gap-2">
      {imgs.map((_, idx) => {
        return (
          <button
            key={idx}
            onClick={() => setImgIndex(idx)}
            className={`h-3 w-3 rounded-full transition-colors ${idx === imgIndex ? "bg-neutral-50 dark:bg-neutral-500" : "bg-neutral-500 dark:bg-corbeau-default"
              }`}
          />
        );
      })}
    </div>
  );
};

const GradientEdges = () => {
  return (
    <>
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-[10vw] max-w-[100px] " />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-[10vw] max-w-[100px] " />
    </>
  );
};

