import React, { useState } from 'react'

export default function Dictionary({searchWord, setSearchWord, fetchWord }) {

    const [error, setError] = useState(false)

    function handleSearch(e) {
        e.preventDefault()
        if (e.target.searchInput.value === "") {
            setError(true)
            return
        }
        setSearchWord(e.target.searchInput.value)
        setError(false)
    }

    return (
        <>
            <div className={`searchBar ${error ? 'error' : ''}`}>
                <form onSubmit={handleSearch}>
                    {error ? <input type="text" name="searchInput"  placeholder="Search for any word…" />
                        :
                        <input type="text" name="searchInput"  placeholder="search ..." />
                    }
                    {error && <p className="validation">Whoops, can’t be empty…</p>}
                </form>
            </div>
            <div className="searchWords">
                <div className="words">
                    {
                        fetchWord &&
                        <>
                            <h1>{fetchWord.word}</h1>
                            <p>{fetchWord.phonetic}</p>
                        </>
                    }
                </div>
                <div className="playPronounce">
                    <a href="#"><img src="/images/play-icon.svg" alt="Play Icon" /></a>
                </div>
            </div>
        </>
    )
}