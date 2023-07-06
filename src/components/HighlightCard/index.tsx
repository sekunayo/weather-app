import React from 'react'
import { ProgressBar } from '../ProgressBar';
import { WindStatus } from '../WindStatus';
import { styles } from './styles'

interface HighlightCardProps {
    title: string;
    amount: number;
    unit: string
}

export const HighlightCard = ({ title, amount, unit }: HighlightCardProps) => {
    const isWind = title === "wind status"
    const isHumidity = title === "humidity"
    return (
        <div className={styles.hightlightCard}>
            <p className={styles.hightlightCardMeasureTitle}>{title}</p>
            <h2 className={styles.hightlightCardMeasureTitleContent}>{amount}<span className={styles.hightlightCardMeasureTitleContentUnit}>{unit}</span></h2>
            {Boolean(isWind) && <WindStatus />}
            {Boolean(isHumidity) && < ProgressBar currentValue={84} />}
        </div>
    )
}

