import React from 'react'
import { TempUnitType } from '../../types/component'
import { styles } from './styles'

interface TempUnitProps {
    unit: TempUnitType
}

export const TempUnit = ({ unit }: TempUnitProps) => {
    return (
        <div className={styles.tempUnit(unit)}>
            <p className={styles.tempUnitContent}>{unit === "celsius" ? <>&#8451;</> : <>&#8457;</>}</p>
        </div>
    )
}

