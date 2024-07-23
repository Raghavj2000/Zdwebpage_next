"use client";

// import { useState, useEffect } from "react";
import PrimaryButton from "../components/PrimaryButton/PrimaryButton";
import hourGlass from "@/public/hourglass.png";
import flowerPot from "@/public/flower_pot.png";
import woodenSofa from "@/public/wooden_Sofa.png";
import woodenChair from "@/public/woodenChair.png";
import tyre from "@/public/tire.png";
import elephant from "@/public/elephant.png";
import Marquee from "react-fast-marquee";
import rightIcon from "@/public/image.png";
import potIcon from "@/public/pot.png";
import rockingChair from "@/public/rockingchair2.png";
import visualize from "@/public/visualize.png";
import upload from "@/public/Upload.png";
import generate from "@/public/generate.png";
import Image from "next/image";
import { motion } from "framer-motion";
import "./home.css";
import RadialBackground from "@/components/RadialBackground/RadialBackground";

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

  const capabiltiesArr = [
    {
      id: 1,
      number: "01",
      title: "Omni-Channel Adoption",
      descprition:
        "Embed product configurators on your website to allow potential buyers to interact with and customize products, boosting engagement and conversion rates. Embed interactive configurators on social media platforms, Partnerships and Third-Party Websites and share links via Email Campaigns to reach potential buyers and leverage high engagement rates Integrate product configurators into mobile apps to provide a seamless and personalized user experience, enhancing customer satisfaction and loyalty.",
      image: hourGlass,
    },
    {
      id: 2,
      number: "02",
      title: "Easy Integration",
      descprition:
        "Easily integrate the ZD viewer by copying the embed code, pasting it into your website's HTML, and publishing Easily integrate the ZD viewer by copying the iframe link, pasting it into your website's HTML, adjusting attributes, and publishing your page.",
      image: rockingChair,
    },

    {
      id: 3,
      number: "03",
      title: "Personalisation",
      descprition:
        "Tailoring your product, content, or services based on your and your customer's preference",
      image: potIcon,
    },
  ];

  const journeyArr = [
    {
      id: 1,
      title: "Visualize The 3D Model",
      descprition:
        "Bring your 3D models to life with our dynamic visualization feature, complete with stunning animations and the ability to swap colors in real-time.",
      image: visualize,
    },
    {
      id: 2,
      title: "Upload 3D Model",
      descprition:
        "Seamlessly upload your 3D models into our system with our platform’s easy upload, preview, and editing capabilities for hassle-free management and deployment.",
      image: upload,
    },
    {
      id: 3,
      title: "Generate 3D Model",
      descprition:
        "If you do not have 3D models, let our skilled ZE team create your 3D model in .GLB format, based on your CAD file or high-resolution images with a tech pack. If you already have 3D models, you can skip this step entirely.",
      image: generate,
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
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
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

        <RadialBackground
          style={{
            width: "55rem",
            height: "20rem",
            top: "-3rem",
          }}
        />
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
            {/*  TODO: the next step i..e it has to open model in a  new page yes */}
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
      <section id="capabilities">
        <h2>
          <span id="heading_span">ZD Viewer</span> Capabilities
        </h2>
        <RadialBackground
          style={{
            width: "50rem",
            height: "20rem",
            top: "-5rem",
          }}
        />

        <div className="capabilities_container">
          {capabiltiesArr.map((item) => {
            return (
              <article className="capabilities_card" key={item.id}>
                <div className="capabilities_text_section">
                  <h3>{item.number}</h3>
                  <h4>{item.title}</h4>
                  <p>{item.descprition}</p>
                </div>
                <div className="capabilities_image_section">
                  <Image
                    src={item.image}
                    alt="hourglass"
                    priority
                    title="Hourglass"
                  />
                </div>
              </article>
            );
          })}
        </div>
      </section>
      <section id="journey_container">
        <h3>We&apos;ve Got You Covered Throughout Your Journey</h3>
        <RadialBackground
          style={{
            width: "45rem",
            height: "20rem",
            top: "-4rem",
          }}
        />

        <div className="journey_card_container">
          <div className="top_left_box"></div>
          <div className="top_right_box"></div>
          <div className="bottom_left_box"></div>
          <div className="bottom_right_box"></div>
          {journeyArr.map((item) => {
            return (
              <>
                <article className="journey_card" key={item.id}>
                  {/* TODO : ADD LINES IN BETWEEN BOXES */}
                  <div className="journey_image_container">
                    <Image src={item.image} />
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.descprition}</p>
                </article>
              </>
            );
          })}
        </div>
      </section>
      <section
        id="transform"
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
        <h4>
          Transform Your Vision Into Reality And Explore The World Of 3D With
          The Easy-To-Use ZD Viewer. Comprehensive Content Management System
          (CMS) With The Platform Offers Powerful Analytics, 3D Model Preview,
          And Easy Editing Capabilities All In One Place. Organize And Showcase
          Your Products With Ease Using The Sophisticated Catalog Platform.
          Analysing Views And Hotspot Clicks For Actionable Analytics.
        </h4>
      </section>
    </main>
  );
}
