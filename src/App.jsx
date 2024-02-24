import Header from "./assets/components/Header"
import Dictionary from "./assets/components/Dictionary"
import Noun from "./assets/components/Noun"
import { useEffect, useState } from "react"
import NotFound from "./assets/components/NotFound"

export default function App() {

  const [searchWord, setSearchWord] = useState("keyboard")
  const [fetchWord, setFetchWord] = useState()
  const [fontType, setFontType] = useState("Inter")
  const [isNotFound, setNotFound] = useState(false)


  useEffect(() => {

    // async function fetchData() {
    //   const data = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`).then(r => r.json())
    //   setFetchWord(data[0])
    // }
    // fetchData()

    async function fetchData() {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`)
      console.log(response)
      let data;
      if (response.ok) {
        data = await response.json()
        setFetchWord(data[0])
        setNotFound(false)
      } else {
        setNotFound(true);
        setFetchWord(null)
      }

    }
    fetchData()


  }, [searchWord])


  
  return (
    <>
      <div className="container">
        <Header fontType={fontType} setFontType={setFontType} />
        <Dictionary searchWord={searchWord} fetchWord={fetchWord} setSearchWord={setSearchWord} />
        {
          isNotFound ? 
            <NotFound />
            :
            <Noun setSearchWord={setSearchWord} fetchWord={fetchWord} />
        }
      </div>
    </>
  )
}