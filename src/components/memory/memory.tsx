'use client'

import Link from 'next/link'
import React, {useState,useEffect} from 'react'
import MemoryCard from './memoryCard'
import { cardData } from './memoryData'

import style from '../../style/memory.module.css'

type cardType = {
    id: number;
    name: string;
    img: string;
    matched: boolean;
}

function createCards() {
    return(
        [...cardData, ...cardData]
        .sort(()=>0.5-Math.random())
        .map((card) => ({...card, id: Math.random()}))

    )
}

export default function Memory() {
    const [cards, setCards] = useState<cardType[]>(createCards)
    const [score, setScore] = useState(0) 
    const [lives, setLives] = useState(5)
    
    // useEffect(()=>{
    //     setCards(()=>createCards())   
    // },[])


    const shuffleCards = () => {
        setCards(()=>createCards())    
    }

    return (
    <div>
           
            <div className='w-f h-f'>

                <Link href={'/'} >
                    <div>Home</div>
                </Link>
                <h1>Magic Match</h1>
                <h3>score: <span id='result'>{score}</span></h3>
                <h3>lives: <span id="lives">{lives}</span></h3>
                <div className={style.grid_wrapper}>
                
                    <div className={style.grid_container}>
                        {cards.map((card)=> (
                            <MemoryCard 
                                
                                key={card.id }
                                card={card}
                            />
                        ))}
                    </div>
                </div>
                <button className={''} onClick={() =>shuffleCards()}>New Game</button>
            </div>        
    </div>
  )
}
