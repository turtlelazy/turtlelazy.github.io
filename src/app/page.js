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
import Link from "@/components/Link";
import { useIsVisible } from "@/components/IsVisible";
import Education from "@/components/ResumeInfo/NamedSections/Education";
import Artwork from "@/components/ResumeInfo/NamedSections/Artwork";
export default function Home() {

  const aboutCard = useRef(null);
  const workxpRef = useRef(null);
  const projectsRef = useRef(null);
  const education = useRef(null);
  const artworkRef = useRef(null);


  const [highlight, setHighlight] = useState("education");

  const [renderedEl, setRenderedEl] = useState({
    "aboutCard" : true,
  });
  const [scrollPosition, setScrollPosition] = useState(0);
  const [width, setWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 0);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  const isMobile = width <= 768;


  // const handleScroll = () => {
  //   const position = window.scrollY;
  //   console.log('scroll', position);
  //   console.log('aboutcard', aboutCard.current.getBoundingClientRect().top);
  //   // if(scrollPosition >= workxpRef.current.getBoundingClientRect().top){
  //   //   console.log('workxpref', "inview")
  //   // }
    
  //   if(aboutCard.current.getBoundingClientRect().top < 0){
  //     console.log('aboutcardref', renderedEl["aboutCard"]);
  //     setRenderedEl(
  //       prevRenderedEl => ({
  //         ...prevRenderedEl,
  //         "aboutCard": true,
  //       })
  //     );
  //   }
  //   console.log('workxp', workxpRef.current.getBoundingClientRect().top, workxpRef.current.getBoundingClientRect().bottom);
  //   console.log('projects', projectsRef.current.getBoundingClientRect().top, projectsRef.current.getBoundingClientRect().bottom);
  //   console.log('position', position);

  //   if (education.current.getBoundingClientRect().bottom >= 0) {
  //     console.log('education');
  //     setHighlight("education");
  //   }
  //   else if (workxpRef.current.getBoundingClientRect().bottom >= 0){
  //     console.log('workxp');
  //     setHighlight("workxp");
  //   }
  //   else if (projectsRef.current.getBoundingClientRect().bottom >= 0) {
  //     console.log('projects');
  //     setHighlight("projects");
  //   }


  //   setScrollPosition(position);
  // };

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll, { passive: true });
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);
  return (
    <main style={{ cursor: 'url(cursor.png),auto', fontFamily:'monospace' }} className='p-0'>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Banner /> */}
      <div className="flex flex-col md:flex-row p-4 relative" ref={aboutCard}>
        <div className="w-full md:w-[45%] md:fixed">
          <InputOutput rendered={renderedEl["aboutCard"]} inputText={"whoami"}>
            <p className="text-4xl md:text-6xl pb-4">ishraq_mahid</p>
          </InputOutput>
          
          <InputOutput rendered={renderedEl["aboutCard"]} inputText={"cat about_me.txt"} typingSpeed={225}>
            <p style={{ fontSize: "14px" }}>
              Hey, I&apos;m Ishraq Mahid! I&apos;m a rising junior at Hunter College currently double majoring in computer science and mathematics. I first started coding in high school after joining my robotics team. Ever since then, I&apos;ve been exploring what I love by attending hackathons, working as a software dev, and doing undergraduate research.
              <br></br><br></br>
              Now, I enjoy creating everything from robots and cool mobile apps, to machine-learning models, alongside exploring technical and complex mathematics. In my spare time, I enjoy working out, sewing, playing the piano, and baking.
            </p>
          </InputOutput>
          <div className="hidden md:block md:pt-3 md:pb-3">
            <InputOutput rendered={true} inputText={"ls /home"}>
              <div className='flex flex-col'>
                <Link> <span style={{ cursor: 'url(cursor-open.png),auto', color: "#6b42f6", fontSize: 25, fontFamily: 'monospace', ...(highlight == "education") ? { backgroundColor: '#00FF00' } : {} }} onClick={() => { setHighlight("education") }}>education_and_extracurriculars</span></Link>
                <Link> <span style={{ cursor: 'url(cursor-open.png),auto', color: "#6b42f6", fontSize: 25, fontFamily: 'monospace', ...(highlight == "workxp") ? { backgroundColor: '#00FF00' } : {} }} onClick={() => { setHighlight("workxp") }}>work_experience</span></Link>
                <Link> <span style={{ cursor: 'url(cursor-open.png),auto', color: "#6b42f6", fontSize: 25, fontFamily: 'monospace', ...(highlight == "projects") ? { backgroundColor: '#00FF00' } : {} }} onClick={() => { setHighlight("projects") }}>projects</span></   Link>
                <Link> <span style={{ cursor: 'url(cursor-open.png),auto', color: "#6b42f6", fontSize: 25, fontFamily: 'monospace', ...(highlight == "artwork") ? { backgroundColor: '#00FF00' } : {} }} onClick={() => { setHighlight("artwork") }}>artwork</span></   Link>


              </div>
            </InputOutput>
          </div>
          {/* <Image src='/sign.png' width={150} height={150} /> */}
          <InputOutput rendered={renderedEl["aboutCard"]} inputText={"./DisplayAsciiLinks"} typingSpeed={200}>
            <div className="flex pr-[5%] pl-[5%] pt-5">
              <div className="pr-[15%]"><LinkedIn /> </div>
              <div className="pr-[15%]"> <Github /></div>
              <div className="pr-[15%]"><Email /> </div>
            </div>
          </InputOutput>

        </div>
        {/** Right side of the wall */}
        <div className="w-full md:pl-[50%]">

          <InputOutput rendered={renderedEl["aboutCard"]} inputText={`cat ${highlight}/info.txt`} typingSpeed={50}>
            {(highlight == "education" || isMobile) &&
              <div ref={education}>
                <Education />
              </div>
          }
            

            {(highlight == "workxp" || isMobile) &&
            <div ref={workxpRef}  id="workxp">
              <WorkXP />
            </div>
            }

            {(highlight == "projects" || isMobile) &&
            <div ref={projectsRef}>
              <Projects />
            </div>
          }

            {(highlight == "artwork" || isMobile) &&
              <div ref={artworkRef}>
                <Artwork />
              </div>
            }


          </InputOutput>
          

        </div>
      </div>
    </main>
  );
}
