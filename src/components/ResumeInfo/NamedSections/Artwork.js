import React from 'react';
import Section from '../SectionTemplate';
import SectionCard from '../SectionCard';
import { listStyles } from '../SectionCard';
import BubbleWrapper from '@/components/AsciiLogos/BubbleWrapper';
import Image from 'next/image';


const Artwork = () => {
    return (
        <Section header="Artwork">
            <Section header="Ceramics">
                <SectionCard title="Cups" description="Cups thrown on the wheel."
                    date={"Fall 2024"} link={'/cups.jpg'} >
                    <div className='w-[100%]'>
                        <Image src='/cups.jpg' layout='responsive' style={{ width: '100%' }} height={0} width={0} />
                    </div>
                </SectionCard>

                <SectionCard title="Converse" description="Converses created using coil technique."
                    date={"Fall 2024"} link={'/converse.jpg'} >
                    <div className='w-[100%]'>
                        <Image src='/converse.jpg' layout='responsive' style={{ width: '100%' }} height={0} width={0} />
                    </div>
                </SectionCard>

                <SectionCard title="Box" description="Architectural slab project. Box."
                    date={"Fall 2024"} link={'/box.jpg'} >
                    <div className='w-[100%]'>
                        <Image src='/box.jpg' layout='responsive' style={{ width: '100%' }} height={0} width={0} />
                    </div>
                </SectionCard>

                <SectionCard title="Money in the Bag" description="Man asking for money in the bag."
                    date={"Fall 2024"} link={'/money.jpg'}>
                    <div className='w-[100%]'>
                        <Image src='/money.jpg' layout='responsive' style={{ width: '100%' }} height={0} width={0} />
                    </div>
                </SectionCard>

                <SectionCard title="Fish" description="Fish made with pinch pots."
                    date={"Fall 2024"} link={'/fish.jpg'}>
                    <div className='w-[100%]'>
                        <Image src='/fish.jpg' layout='responsive' style={{ width: '100%' }} height={0} width={0} />
                    </div>
                </SectionCard>

                <SectionCard title="Miraak" description="Mask styled after Miraak from Skyrim."
                    date={"Fall 2024"} link={'/miraak.jpg'}>
                    <div className='w-[100%]'>
                        <Image src='/miraak.jpg' layout='responsive' style={{ width: '100%' }} height={0} width={0} />
                    </div>
                </SectionCard>
            </Section>

            <Section header="ARTLA201">
            <SectionCard title="A Hot Cup of Coffee" description="A hot cup of coffee that looked very blue."
                date={"June 2023"} link={'/hot_coffee.jpg'} >
                    <div className='w-[100%]'>
                    <Image src='/hot_coffee.jpg' layout='responsive' style={{ width: '100%'}}  height={0} width={0}/>
                    </div>
            </SectionCard>

            <SectionCard title="Room of Things" description="A bedroom that belongs to a person (me), painted using principles of vanishing points and geometry."
                date={"June 2023"} link={'/bedroom_painting.jpg'} >
                <div className='w-[100%]'>
                    <Image src='/bedroom_painting.jpg' layout='responsive' style={{ width: '100%' }} height={0} width={0} />
                </div>
            </SectionCard>

            <SectionCard title="River" description="Abstractly-styled painting of a scenery."
                date={"June 2023"} link={'/abstract_riverview.jpg'} >
                <div className='w-[100%]'>
                    <Image src='/abstract_riverview.jpg' layout='responsive' style={{ width: '100%' }} height={0} width={0} />
                </div>
            </SectionCard>

            <SectionCard title="Playing with Fire" description="Photograph of playing around with fire."
                date={"July 2023"} link={'/fire.jpg'}>
                <div className='w-[100%]'>
                    <Image src='/fire.jpg' layout='responsive' style={{ width: '100%' }} height={0} width={0} />
                </div>
            </SectionCard>
            </Section> 

        </Section>    
    );
}

export default Artwork;