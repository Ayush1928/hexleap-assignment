"use client"
import * as React from 'react';
import sport1 from "../../public/home/sport1.png"
import sport2 from "../../public/home/sport2.png"
import sport3 from "../../public/home/sport3.png"
import SportsCard from './SportsCard';
import { Button } from './ui/button';
import ad from "../../public/home/ad.png"
import AdvertisementCard from './AdvertisementCard';
interface ISportsProps {
}

export const sportsData = [
    {
        name: "Sacramento River Cats",
        totalEvents: "48",
        sport: "Baseball",
        image: sport1
    },
    {
        name: "Las Vegas Aviators",
        totalEvents: "28",
        sport: "Baseball",
        image: sport2
    },
    {
        name: "New Jersey Devils",
        totalEvents: "15",
        sport: "Ice Hockey",
        image: sport3
    },
    {
        name: "Las Vegas Aviators",
        totalEvents: "28",
        sport: "Baseball",
        image: sport2
    },
]

const Sports: React.FunctionComponent<ISportsProps> = (props) => {
    const [numCardsToShow, setNumCardsToShow] = React.useState(4);

    React.useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth < 1024 && screenWidth > 768) {
                setNumCardsToShow(3);
            } else if (screenWidth <= 768 && screenWidth > 520) {
                setNumCardsToShow(2);
            } else if (screenWidth <= 520) {
                setNumCardsToShow(1);
            } else {
                setNumCardsToShow(4);
            }
        };


        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const visibleSportsData = sportsData.slice(0, numCardsToShow);

    return (
        <div className='flex flex-col w-full items-center justify-stretch'>
            <div className=''>
                <h1 className='sm:text-2xl text-xl font-extrabold border-b-2 border-[#738FFF] w-min py-1 mr-0 text-start'>Sports</h1>
                <div className='flex flex-row gap-x-4 mt-8 items-stretch justify-stretch'>
                    {visibleSportsData.map((sport, index) => (
                        <SportsCard name={sport.name} image={sport.image} sport={sport.sport} totalEvents={sport.totalEvents} key={index} />
                    ))}
                    <AdvertisementCard title='Advertisement title' image={ad} description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' />
                </div>
                <div className='mt-12 flex justify-center'>
                    <Button aria-label='See More Tickets' className='bg-[#2C9CF0] text-white px-10 py-6 rounded-sm hover:bg-blue-500'>
                        See More
                    </Button>
                </div>
            </div>
        </div>
    );
};
export default Sports;
