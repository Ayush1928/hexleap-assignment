import Image, { StaticImageData } from 'next/image';
import * as React from 'react';
import { Card, CardContent } from './ui/card';

interface IAdvertisementCardProps {
    title: string;
    image: StaticImageData;
    description: string;

}

const AdvertisementCard: React.FunctionComponent<IAdvertisementCardProps> = ({ title, image, description }) => {
    return (
        <Card className="max-xll:hidden p-3 rounded-sm shadow-lg bg-white dark:bg-[#3B3E47] max-w-[250px] w-[18vw]">
            <CardContent className='w-full p-0 flex flex-col gap-y-6 dark:bg-[#3B3E47]'>
                <div className='relative'>
                    <Image src={image} alt={'Advertisement'} width={200} height={300} className='w-full rounded-sm' />
                    <div className='absolute right-0 top-0 py-2 px-4 bg-black text-white rounded-sm text-sm'>Ad</div>
                </div>
                <div className='flex flex-col gap-y-2'>
                    <h1 className='text-xl font-medium text-center'>{title}</h1>
                    <p className='text-sm text-[#525965] dark:text-[#DFDFDF]'>{description}</p>
                </div>
            </CardContent>
        </Card>
    );
};

export default AdvertisementCard;
