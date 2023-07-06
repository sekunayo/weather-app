import React from 'react'
import { styles } from './styles'

export const Search = () => {
    return (
        <form onSubmit={() => console.log("aaaa")} className={styles.search}>
            <input type="text" placeholder="search location" />
        </form>
    )
}

