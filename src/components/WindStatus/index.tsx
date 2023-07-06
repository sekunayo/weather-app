import React from 'react';
import { ReactComponent as Navigation } from '../../assets/icons/navigation_down.svg';
import { styles } from './styles';

export const WindStatus = () => {
    return (
        <div className={styles.windStatusNavigation}>
            <div className={styles.windStatusNavigationIcon}>
                <Navigation />
            </div>
            <p className={styles.windStatusNavigationText}>WSW</p>
        </div>
    )
}
