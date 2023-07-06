import React from 'react'
import { styles } from './styles';
import { ReactComponent as Location } from '../../assets/icons/location.svg';
import { ReactComponent as Gps } from '../../assets/icons/gps.svg';
import Button from '../../components/Button';

interface TodayViewProps {
    data: any;
}

const TodayView = ({ data }: TodayViewProps) => {
    return (
        <div className={styles.todayView}>
            <div className={styles.todayViewNavigation}>
                <Button type="button">Search for places</Button>
                <button type="button" className={styles.todayViewNavigationIcon}>
                    <Gps />
                </button>
            </div>
            <p className={styles.todayViewTemperature}>{data?.current?.feelslike_c}<span className={styles.todayViewTemperatureUnit}>&#8451;</span></p>
            <p className={styles.todayViewTitle}>{data?.current?.condition?.text}</p>
            <div className={styles.todayViewDescription}>
                <p className={styles.todayViewDate}><span>Today</span><span>.</span><span>{new Date(data?.current?.last_updated)?.toDateString()}</span></p>
                <p className={styles.todayViewLocationContent}>{data?.location?.name}</p>
            </div>
        </div>
    )
}

export default TodayView