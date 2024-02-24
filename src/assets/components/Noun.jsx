import React from 'react';

export default function Noun({ fetchWord, setSearchWord,  }) {

    

    return (
        <>
        
            {
                fetchWord && 
                <>
                    <div className="noun">
                        <h3>noun</h3>
                        <p>Meaning</p>
                        <ul>
                            {fetchWord.meanings[0].definitions.map((x, index) => {
                                return (
                                    <li key={index}>{x.definition}</li>

                                )
                            })}
                        </ul>
                        <div className="synonyms">
                            <p>Synonyms</p>
                            <span>

                                {
                                    fetchWord.meanings[0].synonyms &&
                                    fetchWord.meanings[0].synonyms.map((x, index) => {
                                        return (
                                            <p className='synonymsP' onClick={e => {setSearchWord(e.target.textContent)}} key={index}>{x}</p>
                                        )
                                    })
                                }

                            </span>
                        </div>
                    </div>
                    <div className="verb">
                        <h3>verb</h3>
                        <p>Meaning</p>
                        <ul>
                            {fetchWord.meanings[1] &&
                            
                            fetchWord.meanings[1].definitions.map((x, index) => {
                                return (
                                    <React.Fragment key={index}>
                                        {x.definition && <li>{x.definition}</li>}
                                        {x.example && <p className="keyb">{`"${x.example}"`}</p>}
                                    </React.Fragment>
                                )
                            })}
                        </ul>
                        <div className="source">
                            <p>Source</p>
                            <a href={fetchWord.sourceUrls[0]}>{fetchWord.sourceUrls[0]}</a>
                        </div>
                    </div>
                </>
            }

        </>
    )
}