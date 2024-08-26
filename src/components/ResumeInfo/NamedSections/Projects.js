import React from 'react';
import Section from '../SectionTemplate';
import SectionCard from '../SectionCard';
import { listStyles } from '../SectionCard';
import BubbleWrapper from '@/components/AsciiLogos/BubbleWrapper';


const Projects = () => {
    const PillPal = ['React Native', 'Express.js', 'MongoDB', 'Node.js', 'Google Cloud APIs', 'OpenAI APIs'];
    const InfoInsight = ['Flask', 'beautifulsoup4', 'HTML/CSS', 'JavaScript'];
    const SheetMusicScanner = ['Flask', 'OpenCV', 'MongoDB', 'HTML/CSS', 'JavaScript'];
    const BadApple = ['Computer Architecture', 'Logic Simulator', 'Compiler Design', 'ffmpeg'];
    const SDEs = ['Python', 'Stochastic Calculus', 'numpy', 'pandas', 'matplotlib', 'scipy', 'MATLAB'];
    return (
        <Section header="Projects">
            <SectionCard title="Stochastic Differential Equations @CUNY DRP 2024" description="Studied Stochastic Differential Equations under the guidance of a PhD mentor, creating Python simulations of SDEs to analyze their behavior and presenting the topic"
                date={"January 2024 - May 2024"} link={'https://sites.google.com/view/cunydrp/past-semesters/2024'} skills={SDEs}>
            </SectionCard>

            <SectionCard title="PillPall @SBU Hacks Spring 2024" description="Assemble a mobile health app using the MERN stack to provide users with tailored information regarding medication, dosage, and frequency based on user medical info and history. Won hackathon award for best use of Google Cloud API" 
                date={"February 2024"} link={'https://devpost.com/software/pillpal-airu2d'} skills={PillPal}>
            </SectionCard>

            <SectionCard title="InfoInsight @HackHarvard Fall 2023" description="Created web extension to inform users of fradulent media and media bias through integration of mini-infographics into user browsing experience"
                date={"October 2023"} link={'https://devpost.com/software/infoinsight-navigate-news-with-confidence'} skills={InfoInsight}>
            </SectionCard>

            <SectionCard title="Sheet Music Scanner @HackPrinceton Spring 2023" description="Provided a music sheet processing service for parsing MIDI data from user-input image files, serving dynamic website pages to track saved scores and provide audio playback."
                date={"April 2023"} link={'https://devpost.com/software/sheet-music-scanner'} skills={SheetMusicScanner}>
            </SectionCard>

            <SectionCard title="Bad Apple @StuyHacks January 2022" description="Created a virtual computer to play videos on an LED array, designing a circuit in a logic simulator and writing a compiler to convert mp4 file to machine OPCode."
                date={"January 2022"} link={'https://devpost.com/software/making-a-computer-to-play-bad-apple'} skills={BadApple}>
            </SectionCard>

        </Section>    
    );
}

export default Projects;