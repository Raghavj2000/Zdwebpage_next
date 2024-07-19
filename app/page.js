"use client";

// import { useState, useEffect } from "react";
import PrimaryButton from "@/components/primaryButton/PrimaryButton";
import hourGlass from "@/public/hourglass.png";
import flowerPot from "@/public/flower_pot.png";
import woodenSofa from "@/public/wooden_Sofa.png";
import woodenChair from "@/public/woodenChair.png";
import tyre from "@/public/tire.png";
import elephant from "@/public/elephant.png";
import Marquee from "react-fast-marquee";
import rightIcon from "@/public/right-icon.png";
import Image from "next/image";
import { motion } from "framer-motion";
import "./home.css";

export default function Home() {
  // const [ripplePosition, setRipplePosition] = useState({ x: -100, y: -100 });

  // const handleMouseMove = (event) => {
  //   const { clientX, clientY, currentTarget } = event;
  //   const rect = currentTarget.getBoundingClientRect();
  //   const x = clientX - rect.left;
  //   const y = clientY - rect.top;

  //   setRipplePosition({ x, y });
  // };

  const marquee1 = [
    {
      id: 1,
      title: "Hourglass",
      logo: hourGlass,
    },
    {
      id: 2,
      title: "FlowerPot",
      logo: flowerPot,
    },
    {
      id: 3,
      title: "Wooden Sofa",
      logo: woodenSofa,
    },
    {
      id: 4,
      title: "Wooden Chair",
      logo: woodenChair,
    },
  ];

  return (
    <main>
      <section
        id="home"
        // onMouseMove={handleMouseMove}
      >
        {/* <span
          className="ripple"
          style={{
            left: ripplePosition.x,
            top: ripplePosition.y,
          }}
        ></span> */}
        {/*  TODO: Add animation */}
        <video
          width={240}
          autoPlay
          loop
          muted
          style={{
            zIndex: "-1",
          }}
        >
          <source src="/fashion.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <h1 className="home_header">
          Bring Your Product To <span id="heading_span">Life With 3D.</span>
        </h1>
        <PrimaryButton
          label="Get Started"
          role="button"
          style={{
            color: "white",
            border: "1px solid #f2a751",
            borderRadius: "1.5rem",
            backgroundColor: "#191a1d",
          }}
        />
      </section>
      <section id="visualizer">
        <div className="visualizer_heading_container">
          <motion.h2
            initial={{ x: -100, opacity: 0 }}
            // whileInView={{ opacity: 1 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            3D Visualizer
          </motion.h2>
          <motion.h3 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            Enables Perpetual Sales Across All Channels Ensuring Seamless
            <br /> Access To Your Products Or Services At All Times
          </motion.h3>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="marquee_container"
        >
          <Marquee
            autoFill
            pauseOnHover
            speed={"20"}
            gradient
            gradientColor="rgba(0,0,0,0.7)"
          >
            {/*  TODO: the next step i..e it has to open marquee model in a  new page */}
            {marquee1.map((item) => (
              <div className="marquee_item" key={item.id}>
                <Image src={item.logo} alt={item.title} title={item.title} />
              </div>
            ))}
          </Marquee>
          <Marquee
            autoFill
            pauseOnHover
            direction="right"
            speed={"20"}
            gradient
            gradientColor="rgba(0,0,0,0.7)"
          >
            {/*  TODO: the next step i..e it has to open marquee model in a  new page */}
            {marquee1.map((item) => (
              <div className="marquee_item" key={item.id}>
                <Image src={item.logo} alt={item.title} title={item.title} />
              </div>
            ))}
          </Marquee>
        </motion.div>
      </section>
      <section id="immersive">
        <h2>
          Immersive Experience Leads To <br />
          Tangible Outcomes
        </h2>
        <div className="radial_background"></div>
        <div className="immersive_image_container">
          <div className="immersive_card">
            <Image src={hourGlass} alt="hourglass" priority title="Hourglass" />
            {/*  TODO: the next step i..e it has to open model in a  new page */}
            <PrimaryButton
              label="Explore"
              role="button"
              style={{
                color: "black",
                backgroundColor: "white",
                borderRadius: "1.5rem",
              }}
            />
          </div>
          <div className="immersive_card">
            <Image src={elephant} alt="hourglass" priority title="elephant" />
            {/*  TODO: the next step i..e it has to open model in a  new page */}
            <PrimaryButton
              label="Explore"
              role="button"
              style={{
                color: "black",
                backgroundColor: "white",
                borderRadius: "1.5rem",
              }}
            />
          </div>
          <div className="immersive_card">
            <Image src={tyre} alt="hourglass" priority title="tyre" />
            {/*  TODO: the next step i..e it has to open model in a  new page */}
            <PrimaryButton
              label="Explore"
              role="button"
              style={{
                color: "black",
                backgroundColor: "white",
                borderRadius: "1.5rem",
              }}
            />
          </div>
        </div>
        <div className="view_work">
          {/*  TODO: the next step i..e it has to open something in a  new page */}
          <h3>View Our Work</h3>
          <Image src={rightIcon} alt="right" />
        </div>
      </section>
    </main>
  );
}
