import React from 'react'
import { HighlightCard } from '../../components/HighlightCard'
import { TempUnit } from '../../components/TempUnit'
import WeatherSummaryCard from '../../components/WeatherSummaryCard'
import { styles } from './styles'

interface WeeklyViewProps {
    data: any;
}

const WeeklyView = ({ data }: WeeklyViewProps) => {
    return (
        <div className={styles.weeklyViewContainer}>
            <div className={styles.weeklyView}>
                <div className={styles.weeklyViewUnit}>
                    <TempUnit unit='celsius' />
                    <TempUnit unit='fahrenheit' />
                </div>
                <div className={styles.weeklyViewSummary}>
                    {
                        data?.forecast?.forecastday?.map?.((element: any, index: number) => {
                            return (
                                <WeatherSummaryCard key={index + 1} fahValue={element?.day?.maxtemp_f} celValue={element?.day?.maxtemp_c} date={element?.date} icon={element?.day?.condition?.icon} />
                            )
                        })
                    }
                </div>

                <div className={styles.weeklyViewHighlights}>
                    <h4 className={styles.weeklyViewHeading}>Today's Highlights</h4>
                    <div className={styles.weeklyViewHighlightsList}>
                        <HighlightCard title='wind status' amount={7} unit="mph" />
                        <HighlightCard title='humidity' amount={84} unit="%" />
                        <HighlightCard title='visibility' amount={6.4} unit="miles" />
                        <HighlightCard title='air pressure' amount={998} unit="mb" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeeklyView