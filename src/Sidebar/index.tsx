import React from 'react'
import { Search } from '../components/Search';
import { ReactComponent as Close } from '../assets/icons/close.svg';
import Button from '../components/Button';
import useToggle from '../hooks/useToggle';
import { styles } from './styles';

interface SidebarProps {
    handleToggle: () => void;
}

export const Sidebar = ({ handleToggle }: SidebarProps) => {
    return (
        <div className={styles.sidebar}>
            <button className={styles.sidebarClose} type="button" onClick={handleToggle} >
                <Close />
            </button>
            <div className={styles.sidebarSearchContainer}>
                <Search />
                <Button variant='secondary' type="button">Search</Button>
            </div>
        </div>
    )
}

