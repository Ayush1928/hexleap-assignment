import Image, { StaticImageData } from 'next/image';
import {
    Card,
    CardContent
} from "@/components/ui/card"
import * as React from 'react';

interface ISportsCardProps {
    name: string;
    totalEvents: string;
    sport: string;
    image: StaticImageData;
}

const SportsCard: React.FunctionComponent<ISportsCardProps> = ({ name, image, sport, totalEvents }) => {
    return (
        <Card className="flex flex-col p-3 rounded-sm shadow-lg bg-white dark:bg-[#3B3E47]">
            <CardContent className='w-full p-0 flex flex-col gap-y-4 dark:bg-[#3B3E47] h-full'>
                <Image src={image} alt={name} width={200} height={300} className='w-full rounded-sm' />
                <div className='flex flex-col justify-between h-full gap-y-2'>
                    <p className='max-xl:text-[14px] font-medium'>{name}</p>
                    <div className='flex bg-[#F7F7F8] dark:bg-[#292B32] p-2 rounded-sm'>
                        <div className='flex flex-col w-1/2'>
                            <p className='lg:text-xs text-[10px] text-[#525965] dark:text-[#DFDFDF]'>Total Events</p>
                            <p className='lg:text-sm text-xs font-medium'>{totalEvents} Events</p>
                        </div>
                        <div className='flex flex-col w-1/2'>
                            <p className='lg:text-xs text-[10px] text-[#525965] dark:text-[#DFDFDF]'>Sport</p>
                            <p className='lg:text-sm text-xs font-medium'>{sport}</p>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default SportsCard;