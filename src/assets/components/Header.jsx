export default function Header() {
    return (
        <div className="header">
            <div className="dictionaryIcon">
                <img src="/images/iconoir_book.svg" alt="Dictionary Icon" />
            </div>

            <div className="headerLeftSide">
                <div className="fontStyle">
                    <div className="selectStyle">
                    <p>Sans Serif</p> 
                    <a href="#"><img src="/images/arrow-down.png" alt="Arrow Down" /></a>
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