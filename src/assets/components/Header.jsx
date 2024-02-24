import { useEffect } from "react";

export default function Header({ fontType, setFontType}) {

    function handleFont() {
        document.body.style.fontFamily = fontType;
    }
    
    useEffect(() =>  {
    handleFont()
    }, [fontType])


    return (
        <div className="header">
            <div className="dictionaryIcon">
                <img src="/images/iconoir_book.svg" alt="Dictionary Icon" />
            </div>

            <div className="headerLeftSide">
                <div className="fontStyle">
                    <div className="selectStyle">

                        <select onChange={e => setFontType(e.target.value)} name="fontType" className="FontSelect">
                            <option value="Inter">Sans Serif</option>
                            <option value="Lora">Serif</option>
                            <option value="Inconsolata">Mono</option>
                        </select>

                    </div>
                </div>
                <div className="lightDark">
                    <div onClick={()=> document.body.classList.toggle("dark-theme")} className="switchContainer">
                        <img src="/images/ellipse-10.svg" />
                    </div>
                    <img className="moon" src="/images/fluent_weather-moon-16-regular.svg" alt="Dark Mode Icon" />
                </div>
            </div>
        
        
        </div>
    )
}