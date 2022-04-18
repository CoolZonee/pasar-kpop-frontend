import React from 'react'

interface CardDetails {
    id: string,
    imageName: string,
    category: string,
    title: string,
    uploadedBy: string,
    avatarName: string,
    uploadDateTime: string,
    price: string,
    isIncludePos: boolean,
    group: string[],
    // postage, wm, pm
}

export default CardDetails