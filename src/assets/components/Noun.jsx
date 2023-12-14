export default function Noun({ fetchWord }) {
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
                                            <p key={index}>{x}</p>
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
                                    <>
                                        {x.definition && <li key={index}>{x.definition}</li>}
                                        {x.example && <p key={index + 100} className="keyb">{`"${x.example}"`}</p>}
                                    </>
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