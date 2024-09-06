import React from 'react';
import Section from '../SectionTemplate';
import SectionCard from '../SectionCard';
import { listStyles } from '../SectionCard';
import BubbleWrapper from '@/components/AsciiLogos/BubbleWrapper';


const WorkXP = () => {
    const ERBuddySkills = ['React Native', 'Express.js', 'PostgreSQL', 'AWS', 'Tesseract.js'];
    const AuristorSkills = ['React', 'Kerberos', 'AFS', 'Nginx', 'Docker', 'Kubernetes'];
    const MenottiSkills = ['Flask', 'DigitalOcean', 'SQLite', 'Quickbooks', 'pandas', 'numpy'];
    const CVLabSkills = ['Python', 'PyTorch', 'NeRF', 'OpenCV','Docker'];
    return (
        <Section header="Work Experience">
            <SectionCard title="Fullstack Developer @ErBuddy" description="Developed React Native health app to help users and their caretakers manage medication, measurements, and health files, and utilize the ERBuddy Smart Pillbox " date={"June 2024 - August 2024"} link={'https://myerbuddy.com/'} skills={ERBuddySkills}>
            </SectionCard>

            <SectionCard title="Software Engineer @Auristor" 
            description="Developed React Dashboard for clients to view, edit, and manage remote Auristor Container Accelerator and Auristor File Server resources." 
                date={"June 2024 - August 2024"} link={'https://www.auristor.com/'} skills={AuristorSkills}>
            </SectionCard>

            <SectionCard title="Software Developer @Menotti Enterprise"
                description="Designed, created, and hosted properity firm software to automate adminstrative processes such as billing and to serve cost-profit analytics."
                date={"June 2022 - August 2024"} link={'https://menottienterprise.com/'} skills={MenottiSkills}>
            </SectionCard>

            {/* <SectionCard title="Undergraduate Research @Hunter CV Lab"
                description="Studied and experimented with Neural Radiance Fields, using the method to synthesize novel viewpoints of target scenes from a limited scene photoset (ex. bannana and cat models)."
                date={"January 2024 - May 2024"} skills={CVLabSkills}>
            </SectionCard> */}
        </Section>    
    );
}

export default WorkXP;