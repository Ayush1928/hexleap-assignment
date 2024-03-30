"use client"
import * as React from 'react';
import { Switch } from './ui/switch';
import { Label } from './ui/label';
import { useTheme } from 'next-themes';

interface IHeaderProps {
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
    const { resolvedTheme, theme, setTheme } = useTheme()

    const toggleTheme = () => {
        if (resolvedTheme === 'light') {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }

    return (
        <div className='py-4 flex justify-center w-full'>
            <div className="flex items-center space-x-2">
                <Label className='text-md'>Theme</Label>
                <Switch aria-label='Theme Toggle Button' onCheckedChange={toggleTheme} className='bg-white' checked={theme === 'light' ? false : true} />
            </div>
        </div>
    );
};

export default Header;
