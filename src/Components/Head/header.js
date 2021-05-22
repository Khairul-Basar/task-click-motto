import React from 'react';
import cover from '../../img/bcbe654484b887659a17f19df0391cbc.jpg'

const Header = () => {
    return (
        <>
            <div className="max-w-full h-full m-2 relative">
                <img className="h-full w-full bg-cover" src={cover} alt="Cover"/>
                <div className="opacity-0 opacity-100  absolute inset-0 z-10 max-w-md mx-auto flex justify-center justify-items-center">

                    <div className="flex max-w-9 flex items-center">
                        <input type="text" className=" h-8 w-96 rounded-full text-center"
                           placeholder="Search Photo and Videos..."/>

                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 opacity-0 opacity-100 inset-0 z-10 m-1 text-yellow-500 font-bold" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                        </svg>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;