import React from 'react'
import { styles } from './styles'


interface ProgressBarProps {
    currentValue: number;
}
export const ProgressBar = ({ currentValue }: ProgressBarProps) => {
    return (
        <div className={styles.progressBarContainer}>
            <div className={styles.progressBarRange}><span className={styles.progressBarRangeValue}>0</span><span className={styles.progressBarRangeValue}>50</span><span className={styles.progressBarRangeValue}>100</span></div>

            <div className={styles.progressBar}>
                <div className={styles.progressBarCurrent(currentValue.toString())}></div>
            </div>

            <div className={styles.progressBarUnit}><p className={styles.progressBarUnitValue}>%</p></div>
        </div>
    )
}

