import React from 'react';
import {Hero} from "react-daisyui";

export default function QuoteMessage() {
    return (
        <Hero className="bg-base-200">
            <Hero.Overlay className="bg-opacity-60" />
            <Hero.Content className="text-center">
                <div className="max-w-md mx-auto">
                    <h1 className="text-5xl font-bold">Harry Potter Database</h1>
                    <p className="py-6 text-xl">An API-based database of Harry Potter characters, movies, and potions for all your Harry Potter needs!</p>
                </div>
            </Hero.Content>
        </Hero>
    );
}
