import React from 'react'
import { styles } from './styles'

interface WeatherSummaryCardProps {
    celValue: number;
    fahValue: number;
    date: any;
    icon: string
}
export const WeatherSummaryCard = ({ icon, celValue, fahValue, date }: WeatherSummaryCardProps) => {
    return (
        <div className={styles.weatherSummaryCard}>
            <h6 className={styles.weatherSummaryCardHeading}>{new Date(date)?.toDateString()}</h6>
            <div className={styles.weatherSummaryCardIcon}>
                <img alt="weather" src={icon} />
            </div>
            <div className={styles.weatherSummaryCardTemp}>
                <p className={styles.weatherSummaryCardCelTemp}>{celValue} <span>&#8451;</span></p>
                <p className={styles.weatherSummaryCardFahTemp}>{fahValue}<span>&#8457;</span></p>
            </div>
        </div>
    )
}

export default WeatherSummaryCard