import React from 'react';
import Section from '../SectionTemplate';
import SectionCard from '../SectionCard';
import { listStyles } from '../SectionCard';
import BubbleWrapper from '@/components/AsciiLogos/BubbleWrapper';
import Image from 'next/image';


const Artwork = () => {
    const cupi = ['Still Life', 'Acrylic Paint'];
    const bedroom = ['Vanishing Point', 'Acrylic Paint'];
    const river = ['Abstract', 'Acrylic Paint'];
    const fire = ['Found Object', 'Photoshop', 'Photography'];
    return (
        <Section header="Artwork">

            <SectionCard title="A Hot Cup of Coffee" description="A hot cup of coffee that looked very blue."
                date={"June 2023"} link={'/hot_coffee.jpg'} skills={cupi}>
                    <div className='w-[100%]'>
                    <Image src='/hot_coffee.jpg' layout='responsive' style={{ width: '100%'}}  height={0} width={0}/>
                    </div>
            </SectionCard>

            <SectionCard title="Room of Things" description="A bedroom that belongs to a person (me), painted using principles of vanishing points and geometry."
                date={"June 2023"} link={'/bedroom_painting.jpg'} skills={bedroom}>
                <div className='w-[100%]'>
                    <Image src='/bedroom_painting.jpg' layout='responsive' style={{ width: '100%' }} height={0} width={0} />
                </div>
            </SectionCard>

            <SectionCard title="River" description="Abstractly-styled painting of a scenery."
                date={"June 2023"} link={'/abstract_riverview.jpg'} skills={river}>
                <div className='w-[100%]'>
                    <Image src='/abstract_riverview.jpg' layout='responsive' style={{ width: '100%' }} height={0} width={0} />
                </div>
            </SectionCard>

            <SectionCard title="Playing with Fire" description="Photograph of playing around with fire."
                date={"July 2023"} link={'/fire.jpg'} skills={fire}>
                <div className='w-[100%]'>
                    <Image src='/fire.jpg' layout='responsive' style={{ width: '100%' }} height={0} width={0} />
                </div>
            </SectionCard>

        </Section>    
    );
}

export default Artwork;