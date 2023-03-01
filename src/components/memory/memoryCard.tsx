'use client'

import Image from 'next/image';
import React from 'react'
import style from '../../style/memory.module.css'


type props ={
    card: {
        id: number;
        name: string;
        img: string;
        matched: boolean;
    }
}

export default function MemoryCard({card}:props) {
  return (
    <div className={style.memory_card}>
        <div>
            <img className={style.card_img}  src={card.img} alt={'card.name'} title={card.name} />
        </div>

    </div>
  )
}
