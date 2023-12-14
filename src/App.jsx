import Header from "./assets/components/Header"
import Dictionary from "./assets/components/Dictionary"
import Noun from "./assets/components/Noun"
import { useEffect, useState } from "react"

export default function App() {

  const [searchWord, setSearchWord] = useState("keyboard")
  const [fetchWord, setFetchWord] = useState()

  console.log(searchWord)
  console.log(fetchWord)

  useEffect(() => {

    async function fetchData() {
      const data = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`).then(r => r.json())
      setFetchWord(data[0])
    }
    fetchData()

  }, [searchWord])

  return (
    <>
      <div className="container">
        <Header />
        <Dictionary searchWord={searchWord} fetchWord={fetchWord} setSearchWord={setSearchWord} />
        <Noun fetchWord={fetchWord} />
      </div>
    </>
  )
}