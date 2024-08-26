"use client";
import Opening from "@/components/Home/Opening";
import Mp4FrameViewer from "@/components/Home/FrameViewer";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Banner from "@/components/Home/Banner";
import InputOutput from "@/components/TerminalAesthetic/InputOutput";
import LinkedIn from "@/components/AsciiLogos/LinkedIn";
import Github from "@/components/AsciiLogos/Github";
import Email from "@/components/AsciiLogos/Email";
import SectionCard from "@/components/ResumeInfo/SectionCard";
import Section from "@/components/ResumeInfo/SectionTemplate";
import { list } from "postcss";
import WorkXP from "@/components/ResumeInfo/NamedSections/WorkXp";
import Projects from "@/components/ResumeInfo/NamedSections/Projects";
import Head from "next/head";
export default function Home() {
  const aboutCard = useRef(null);

  const [renderedEl, setRenderedEl] = useState({
    "aboutCard" : true,
  });
  const [scrollPosition, setScrollPosition] = useState(0);


  const handleScroll = () => {
    const position = window.scrollY;
    console.log('scroll', position);
    console.log('aboutcard', aboutCard.current.getBoundingClientRect().top);
    if(aboutCard.current.getBoundingClientRect().top < 0){
      console.log('aboutcardref', renderedEl["aboutCard"]);
      setRenderedEl(
        prevRenderedEl => ({
          ...prevRenderedEl,
          "aboutCard": true,
        })
      );
    }

    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <main style={{ cursor: 'url(cursor.png),auto', fontFamily:'monospace' }} className='p-0'>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Opening />
      {/* <Banner /> */}
      <div className="flex flex-col md:flex-row p-4" ref={aboutCard}>
        <div className="w-full md:w-[50%]">
          <InputOutput rendered={renderedEl["aboutCard"]} inputText={"whoami"}>                
            <h2 style={{ fontSize: "4.5vw" }}>ishraq_mahid</h2>
          </InputOutput>

          <InputOutput rendered={renderedEl["aboutCard"]} inputText={"cat about_me.txt"} typingSpeed={225}>
            <p style={{ fontSize: "14px" }}>
              Hey, I&apos;m Ish! I&apos;m a rising junior at Hunter College currently double majoring in computer science and mathematics. I first started coding in high school after joining my robotics team. Ever since then, I&apos;ve been exploring what I love by attending hackathons, working as a software dev, and doing undergraduate research.
              <br></br><br></br>
              Now, I enjoy creating everything from robots and cool mobile apps, to machine-learning models, alongside exploring technical and complex mathematics. In my spare time, I enjoy working out, sewing, playing the piano, and baking.
            </p>
          </InputOutput>
          <Image src='/sign.png' width={150} height={150} />
          <InputOutput rendered={renderedEl["aboutCard"]} inputText={"./DisplayAsciiLinks"} typingSpeed={200}>
            <div className="flex pr-[5%] pl-[5%] pt-5">
              <div className="pr-[15%]"><LinkedIn /> </div>
              <div className="pr-[15%]"> <Github /></div>
              <div className="pr-[15%]"><Email /> </div>
            </div>
          </InputOutput>
          
          <InputOutput rendered={renderedEl["aboutCard"]} inputText={"xdg-open Bannana.gif && xdg-open Cat.gif"} typingSpeed={50}>
            <div className="pr-[25%] pl-[5%] pt-10">

            <Image src='/Bannana.gif' width={500} height={500}/>
            <Image src='/Cat.gif' width={500} height={500} className="pt-5 pb-5"/>
            </div>
          </InputOutput>

        </div>
        {/** Right side of the wall */}
        <div className="w-full md:w-[50%]">

          <InputOutput rendered={renderedEl["aboutCard"]} inputText={"cd experiences/ && cat work.txt && cat projects.txt"}>
            <WorkXP />
            <Projects />
          </InputOutput>
          

        </div>
      </div>
    </main>
  );
}
