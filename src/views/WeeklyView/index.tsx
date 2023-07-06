import React from 'react'
import { HighlightCard } from '../../components/HighlightCard'
import { TempUnit } from '../../components/TempUnit'
import WeatherSummaryCard from '../../components/WeatherSummaryCard'
import { checkIfDateIsTheSame } from '../../utils'
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
                                Boolean(checkIfDateIsTheSame(new Date(element?.date), new Date(data?.current?.last_updated))) === true ? null : <WeatherSummaryCard key={index + 1} fahValue={element?.day?.maxtemp_f} celValue={element?.day?.maxtemp_c} date={element?.date} icon={element?.day?.condition?.icon} />
                            )
                        })
                    }
                </div>

                <div className={styles.weeklyViewHighlights}>
                    <h4 className={styles.weeklyViewHeading}>Today's Highlights</h4>
                    <div className={styles.weeklyViewHighlightsList}>
                        <HighlightCard title='wind status' amount={data?.current?.wind_mph} unit="mph" />
                        <HighlightCard title='humidity' amount={data?.current?.humidity} unit="%" />
                        <HighlightCard title='visibility' amount={data?.current?.vis_miles} unit="miles" />
                        <HighlightCard title='air pressure' amount={data?.current?.pressure_mb} unit="mb" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeeklyView