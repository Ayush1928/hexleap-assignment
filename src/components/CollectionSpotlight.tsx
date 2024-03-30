import * as React from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import collection1 from "../../public/home/collection1.png"
import collection2 from "../../public/home/collection2.png"
import CollectionSpotlightCard from './CollectionSpotlightCard';

interface ICollectionSpotlightProps {
}

const collectionData = [
    {
        name: "Las Vegas Aviators",
        dateTime: "OCT 15 | SUN | 4:30 PM",
        location: "Las Vegas Ballpark, Las Vegas, Nevada",
        img: collection1,
        ticket: "Take Flight Collection",
    },
    {
        name: "Sacramento River Cats",
        dateTime: "OCT 15 | SUN | 4:30 PM",
        location: "Sutter Health Park, Sacramento, California",
        img: collection2,
        ticket: "Orange Collection",
    },
    {
        name: "Las Vegas Aviators",
        dateTime: "OCT 15 | SUN | 4:30 PM",
        location: "Las Vegas Ballpark, Las Vegas, Nevada",
        img: collection1,
        ticket: "Take Flight Collection",
    },
    {
        name: "Sacramento River Cats",
        dateTime: "OCT 15 | SUN | 4:30 PM",
        location: "Sutter Health Park, Sacramento, California",
        img: collection2,
        ticket: "Orange Collection",
    },
    {
        name: "Las Vegas Aviators",
        dateTime: "OCT 15 | SUN | 4:30 PM",
        location: "Las Vegas Ballpark, Las Vegas, Nevada",
        img: collection1,
        ticket: "Take Flight Collection",
    },
    {
        name: "Sacramento River Cats",
        dateTime: "OCT 15 | SUN | 4:30 PM",
        location: "Sutter Health Park, Sacramento, California",
        img: collection2,
        ticket: "Orange Collection",
    },
]

const CollectionSpotlight: React.FunctionComponent<ICollectionSpotlightProps> = (props) => {
    return (
        <div className='bg-gradient-to-b from-[#F9F8FF] to-[#F3F9FF] dark:from-[#18282A] dark:to-[#221A2C] sm:py-12 py-6 flex flex-col lg:mt-12 mt-8 rounded-sm shadow-sm lg:gap-y-8 gap-y-5 items-center'>
            <h1 className='font-bold lg:text-5xl sm:text-4xl text-3xl mx-auto text-center px-4'>Collection Spotlight</h1>
            <p className='flex text-center font-medium lg:px-36 sm:px-16 px-8 max-lg:text-sm max-sm:text-[10px]'>Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!</p>
            <div className='xl:px-28 sm:px-14 px-0 max-w-[70vw]'>
                <Carousel>
                    <CarouselContent className='flex h-full items-stretch -ml-8'>
                        {collectionData.map((collection, index) => (
                            <CarouselItem className="xll:basis-1/3 2md:basis-1/2 basis-full pl-8" key={index}>
                                <div className='h-full flex justify-center'>
                                    <CollectionSpotlightCard dateTime={collection.dateTime} img={collection.img} location={collection.location} name={collection.ticket} ticket={collection.ticket} />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className='rounded-sm border-2 lg:px-1 lg:py-2 px-0 py-1 border-[#2C9CF0] font-[#2C9CF0] sm:h-auto sm:w-auto h-6 w-6 bg-transparent' />
                    <CarouselNext className='rounded-sm border-2 lg:px-1 lg:py-2 px-0 py-1 border-[#2C9CF0] font-[#2C9CF0] sm:h-auto sm:w-auto h-6 w-6 bg-transparent' />
                </Carousel>
            </div>
        </div>
    );
};

export default CollectionSpotlight;
