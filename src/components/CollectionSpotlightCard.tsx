import * as React from 'react';
import { Card, CardContent } from './ui/card';
import Image, { StaticImageData } from 'next/image';
import { Button } from './ui/button';

interface ICollectionSpotlightCardProps {
    name: string;
    dateTime: string;
    location: string;
    img: StaticImageData;
    ticket: string;
}

const CollectionSpotlightCard: React.FunctionComponent<ICollectionSpotlightCardProps> = ({ name, dateTime, img, location, ticket }) => {
    return (
        <Card className='w-fit p-0'>
            <CardContent className='rounded-sm shadow-lg flex flex-col w-full dark:bg-[#3B3E47] h-full p-0 2md:py-2 py-1'>
                <div className='border-b-2 border-dashed'>
                    <Image src={img} alt={name} width={200} height={300} className='w-full rounded-sm' />
                </div>
                <div className='flex w-full justify-between'>
                    <div className="flex rounded-full w-6 h-6 bg-[#F9F8FF] dark:bg-[#221A2C] -mt-3 -ml-3"></div>
                    <div className="flex rounded-full w-6 h-6 bg-[#F9F8FF] dark:bg-[#221A2C] -mt-3 -mr-3"></div>
                </div>
                <div className='px-4 py-5 gap-y-2 flex flex-col items-center'>
                    <h1 className='sm:text-lg text-base font-semibold'>{name}</h1>
                    <h2 className='sm:text-sm text-[11px] font-semibold'>{dateTime}</h2>
                    <p className='sm:text-sm text-[11px] font-[#525965] text-center dark:text-[#DFDFDF]'>{location}</p>
                    <Button className='rounded-sm dark:bg-black dark:text-white' aria-label='Ticket Explore Button'>{ticket}</Button>
                </div>
            </CardContent>
        </Card>
    );
};

export default CollectionSpotlightCard;
