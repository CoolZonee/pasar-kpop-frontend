import React from 'react'

interface CardDetails {
    _id: string,
    imageName: string,
    category: string[],
    title: string,
    creator: string,
    avatarName: string,
    price: string,
    isIncludePos: boolean,
    group: string[],
    createdAt: string,
    // postage, wm, pm
}

export default CardDetails