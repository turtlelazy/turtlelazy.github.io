import React from 'react';
import Section from '../SectionTemplate';
import SectionCard from '../SectionCard';
import { listStyles } from '../SectionCard';
import BubbleWrapper from '@/components/AsciiLogos/BubbleWrapper';
import Image from 'next/image';


const Education = () => {
    const HunterSkills = ['Data Structures & Algorithms', 'Computer Architecture','Computational Vision', 'Big Data', 'Real Analysis', 'Differential Equations', 'Linear Algebra'];
    const AuristorSkills = ['React', 'Kerberos', 'AFS', 'Nginx', 'Docker', 'Kubernetes'];
    const ANYSkills = ['Professionalism', 'Communication', 'Emotional Inteligence', 'Leadership', 'Networking'];
    const CVLabSkills = ['Python', 'PyTorch', 'NeRF', 'OpenCV','Docker'];
    const SDEs = ['Python', 'Stochastic Calculus', 'numpy', 'pandas', 'matplotlib', 'scipy', 'MATLAB'];

    return (
        <Section header="Education and Extracurriculars">

            <SectionCard 
                title="Computer Science and Mathematics @Hunter College" 
                description="Pursuing a double major Bachelor's degree in Computer Science and Mathematics. Took various upper level CS and math coursework." 
                date={"GPA: 4.0 | Graduation Date: May 2026"} skills={HunterSkills}>
            </SectionCard>

            <SectionCard title="Fellow @America Needs You Fellowship"
                description="Selected as one of 150 first-generation college students in NY to serve in ANY&apos;s 2-year career development and leadership training program."
                date={"June 2024 - May 2026"} link={'https://americaneedsyou.org/'} skills={ANYSkills}>
            </SectionCard>

            <SectionCard title="Undergraduate Research @Hunter CV Lab"
                description="Studied and experimented with Neural Radiance Fields, using the method to synthesize novel viewpoints of target scenes from a limited scene photoset (ex. bannana and cat models)."
                date={"January 2024 - May 2024"} skills={CVLabSkills}>
                <div className='flex flex-wrap'>
                    <Image src='/Bannana.gif' width={300} height={300} />
                    <Image src='/Cat.gif' width={300} height={300} className="pl-5" />
                </div>
                
            </SectionCard>

            <SectionCard title="Stochastic Differential Equations @CUNY DRP 2024" description="Studied Stochastic Differential Equations under the guidance of a PhD mentor, creating Python simulations of SDEs to analyze their behavior and presenting the topic"
                date={"January 2024 - May 2024"} link={'https://sites.google.com/view/cunydrp/past-semesters/2024'} skills={SDEs}>
            </SectionCard>

        </Section>    
    );
}

export default Education;