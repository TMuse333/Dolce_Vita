import  { ReactNode, useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, motionValue } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
// import laptop from '../../media/laptop.jpg'
import {useGeneralContext} from '../../context/context'
import { Link } from "react-router-dom";
import home1 from '../../media/dv-main-home.png'
import home2 from '../../media/dv-home2.png'
import { text1 } from "../../data/data";

interface ParallaxTextProps {
        image: string;
        subheading: string;
        heading:string;
        destination:string | null;
        text:string;
        description:string
}

export const TextParallaxContentExample: React.FC<ParallaxTextProps>
 = ({image,subheading, heading, destination,
text,description}) => {
  return (
    <div className="relative">
      <TextParallaxContent
        imgUrl={image}
        subheading={subheading}
        heading="We make the best homes"

       
      >
      <TextExample1
      destination="custom-homes"
        title={text1.title}
        description={text1.description}
      />
      </TextParallaxContent>

      <TextParallaxContent
        imgUrl={home2}
        subheading="Working with us is great"
        heading="We also renovate homes"
       
      >
      <TextExample1
            {...text1}
      destination="custom-homes"/>
      </TextParallaxContent>

      
    
    </div>
  );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({
  imgUrl,
  subheading,
  heading,
  children,
 
}: {
  imgUrl: string;
  subheading: string;
  heading: string;
  children?: ReactNode;

}) => {
  return (
    <div
      style={{
        // paddingLeft: IMG_PADDING,
        // paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage 
        imgUrl={imgUrl}
       />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }: { imgUrl: string }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const {textYPosition} = useGeneralContext()

  const motionTextYPosition = motionValue(textYPosition);

  const brightness = useTransform(
    motionTextYPosition,
    [0, -100],  // Range of scrollYProgress values
    [0.2, 1] // Range of brightness values
  );

  const [imgBrightness, setImgBrightness] = useState(0.2)


  useEffect(() => {
    const unsubscribe = brightness.onChange((value) => {
     
      setImgBrightness(value)
    });

    return () => {
      unsubscribe();
    };
  }, [brightness]);



 
  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        // height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        height:'100vh',
        top: IMG_PADDING,
        scale,
        filter: `brightness(${imgBrightness})`,
       
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden  relative"
    >
       
      <motion.div
        className="absolute inset-0 "
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({
    subheading,
    heading,
  }: {
    subheading: string;
    heading: string;
  }) => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
      offset: ["start end", "end start"],
    });

    const { setTextYPosition} = useGeneralContext()
  
    const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
    const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

    // Log the y position
    useEffect(() => {
        const unsubscribe = y.onChange((value) => {
         

          setTextYPosition(value)
        });
        return unsubscribe;
      }, []);



  
    return (
      <motion.div
        style={{
          y,
          opacity,
        }}
        ref={targetRef}
        className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
      >
        <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
          {subheading}
        </p>
        <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
      </motion.div>
    );
  };

  interface TextExampleProps {
    destination: string;
    title: string;
    description: string[];
  }

  const TextExample1: React.FC<TextExampleProps> = ({destination,title,description}) => {

    return (
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12 text-white">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
     {title}
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
        {description[0]}
      </p>
      <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
      {description[1]}
      </p>
      <Link to={destination}>
      
      <button className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit">
        Learn more <FiArrowUpRight className="inline" />
      </button>
      </Link>
    </div>
  </div>
    )
  }
  