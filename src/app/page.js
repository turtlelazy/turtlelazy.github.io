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
  const navRef = useRef(null);


  const [highlight, setHighlight] = useState("projects");

  const [renderedEl, setRenderedEl] = useState({
    "aboutCard" : true,
  });
  const [scrollPosition, setScrollPosition] = useState(0);
  // default to a desktop width on the server to avoid hydration mismatch
  const [width, setWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1024);
  const [isClient, setIsClient] = useState(false);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    setIsClient(true);
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  const isMobile = width <= 768;

  function handleNavClick(name){
    setHighlight(name);
    // Poll until the section is visible (mounted and not display:none), then scroll smoothly
    const tryScroll = (attempt = 0) => {
      let el = null;
      if (name === 'projects') el = projectsRef.current;
      else if (name === 'workxp') el = workxpRef.current;
      else if (name === 'education') el = education.current;
      else if (name === 'artwork') el = artworkRef.current;

      if (!el) {
        if (attempt < 10) return setTimeout(() => tryScroll(attempt + 1), 50);
        return;
      }

      // If element still hidden (display:none) offsetParent will be null or offsetHeight 0
      if ((el.offsetParent === null || el.offsetHeight === 0) && attempt < 10) {
        return setTimeout(() => tryScroll(attempt + 1), 50);
      }

      const navHeight = navRef.current?.offsetHeight || 0;
      const rect = el.getBoundingClientRect();
      const targetY = rect.top + window.scrollY - navHeight - 8;

      // Custom smooth scroll for a gentler transition
      const startY = window.scrollY;
      const distance = targetY - startY;
      const duration = 600; // ms
      let startTime = null;

      function easeInOutQuad(t){
        return t<0.5 ? 2*t*t : -1 + (4-2*t)*t;
      }

      function step(timestamp){
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = easeInOutQuad(progress);
        window.scrollTo(0, startY + (distance * eased));
        if (elapsed < duration) {
          requestAnimationFrame(step);
        }
      }

      requestAnimationFrame(step);
    };

    requestAnimationFrame(() => tryScroll(0));
  }


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
    <main style={{ cursor: 'url(cursor.png),auto', fontFamily:'monospace' }} className='p-0 pt-24 md:pt-0'>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Mobile top bar to select section (fixed, full-width, responsive) */}
      <div ref={navRef} className="md:hidden fixed top-0 left-0 right-0 w-full grid grid-cols-2 gap-2 px-2 py-2 bg-gray-900 text-white z-50">
        <button onClick={() => handleNavClick("projects")} className={`w-full text-xs md:text-sm px-3 py-2 rounded text-center leading-tight ${highlight == "projects" ? "bg-green-400 text-black" : ""}`}>
          projects
        </button>
        <button onClick={() => handleNavClick("workxp")} className={`w-full text-xs md:text-sm px-3 py-2 rounded text-center leading-tight ${highlight == "workxp" ? "bg-green-400 text-black" : ""}`}>
          work_experience
        </button>
        <button onClick={() => handleNavClick("artwork")} className={`w-full text-xs md:text-sm px-3 py-2 rounded text-center leading-tight ${highlight == "artwork" ? "bg-green-400 text-black" : ""}`}>
          artwork
        </button>
        <button onClick={() => handleNavClick("education")} className={`w-full text-xs md:text-sm px-3 py-2 rounded text-center leading-tight ${highlight == "education" ? "bg-green-400 text-black" : ""}`}>
          education
        </button>
      </div>

      {/* <Banner /> */}
      <div className="flex flex-col md:flex-row p-4 relative" ref={aboutCard}>
        <div className="w-full md:w-[45%] md:fixed">
          <InputOutput rendered={renderedEl["aboutCard"]} inputText={"whoami"}>
            <p className="text-4xl md:text-6xl pb-4">ishraq_mahid</p>
          </InputOutput>
          
          <InputOutput rendered={renderedEl["aboutCard"]} inputText={"cat about_me.txt"} typingSpeed={225}>
            <p style={{ fontSize: "14px" }}>
              Hey, I&apos;m Ishraq Mahid! I&apos;m a senior at Hunter College currently triple majoring in Computer Science, Mathematics, and Studio Art. I first started coding in high school after joining my robotics team. Ever since then, I&apos;ve been exploring what I love by attending hackathons, working as a software and data engineer, and doing undergraduate research.
              <br></br><br></br>
              Now, I enjoy creating everything from robots and cool mobile apps, to machine-learning models, alongside exploring technical and complex mathematics. In my spare time, I enjoy art, working out, sewing, playing the piano, and baking.
            </p>
          </InputOutput>
          <div className="hidden md:block md:pt-3 md:pb-3">
            <InputOutput rendered={true} inputText={"ls /home"}>
              <div className='flex flex-col'>
                <Link> <span style={{ cursor: 'url(cursor-open.png),auto', color: "#6b42f6", fontSize: 25, fontFamily: 'monospace', ...(highlight == "projects") ? { backgroundColor: '#00FF00' } : {} }} onClick={() => { handleNavClick("projects") }}>projects</span></   Link>
                
                <Link> <span style={{ cursor: 'url(cursor-open.png),auto', color: "#6b42f6", fontSize: 25, fontFamily: 'monospace', ...(highlight == "workxp") ? { backgroundColor: '#00FF00' } : {} }} onClick={() => { handleNavClick("workxp") }}>work_experience</span></Link>

                <Link> <span style={{ cursor: 'url(cursor-open.png),auto', color: "#6b42f6", fontSize: 25, fontFamily: 'monospace', ...(highlight == "artwork") ? { backgroundColor: '#00FF00' } : {} }} onClick={() => { handleNavClick("artwork") }}>artwork</span></   Link>

                <Link> <span style={{ cursor: 'url(cursor-open.png),auto', color: "#6b42f6", fontSize: 25, fontFamily: 'monospace', ...(highlight == "education") ? { backgroundColor: '#00FF00' } : {} }} onClick={() => { handleNavClick("education") }}>education</span></Link>


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

          {isClient && isMobile ? (
            <InputOutput rendered={true} inputText={""} typingSpeed={50} skipInput={true}>
              <div ref={education} className={highlight === "education" ? "" : "hidden"}>
                <Education />
              </div>

              <div ref={workxpRef} id="workxp" className={highlight === "workxp" ? "" : "hidden"}>
                <WorkXP />
              </div>

              <div ref={projectsRef} className={highlight === "projects" ? "" : "hidden"}>
                <Projects />
              </div>

              <div ref={artworkRef} className={highlight === "artwork" ? "" : "hidden"}>
                <Artwork />
              </div>

            </InputOutput>
          ) : (
            <InputOutput rendered={renderedEl["aboutCard"]} inputText={`cat ${highlight}/info.txt`} typingSpeed={50}>
              {highlight === "education" && (
                <div ref={education}>
                  <Education />
                </div>
              )}

              {highlight === "workxp" && (
                <div ref={workxpRef} id="workxp">
                  <WorkXP />
                </div>
              )}

              {highlight === "projects" && (
                <div ref={projectsRef}>
                  <Projects />
                </div>
              )}

              {highlight === "artwork" && (
                <div ref={artworkRef}>
                  <Artwork />
                </div>
              )}

            </InputOutput>
          )}
          

        </div>
      </div>
    </main>
  );
}
