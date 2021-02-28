import React, {useState} from 'react';
import './style.scss';
import axios from "axios";
import Form from "./components/form";
import Weather from "./components/weather";


function App() {
    const [weather, setWeather] = useState(null);
    const [lang, setLang] = useState('en');
    const [unit, setUnit] = useState('metric');

    //чтобы менять язык и систему мер, она даже работает но каряво,
    // 1) сначала надо выбрать город найти его, будет стандартно цельсиях и метрах и англ
    // 2) потом выбрать например имперскую и русский, нажать снова на поиск и оно обновится
    const switchUnitToF = () => {
        setUnit('imperial');
    }
    const switchUnitToC = () => {
        setUnit('metric');
    }

    const switchLangToEn = () => {
        setLang('en');
    }
    const switchLangToRu = () => {
        setLang('ru');
    }
    const switchLangToUa = () => {
        setLang('ua');
    }

    // я не смог нормально реализовать по локации, это свяно с тем что не понял как их нормально передать в стейт
    const fetchData = async (e) => {
        e.preventDefault();

        const city = e.target.elements.city.value;
        const API_KEY = 'd48cd063853616074f12f86fca3209d6';

        if (city) {
            const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${unit}&lang=${lang}`;
            const response = await axios.get(apiUrl);
            setWeather(response.data);
            console.log(response.data);
        }
    }

    return (
        <section className="App">
            <div className="App-weather">
                <Form cityForm={fetchData}/>
                <Weather weather={weather}/>
            </div>
            <div className="App-unitBtn">
                <button className="App-unitBtn__item"
                        onClick={() => switchUnitToC()}>Metric C°
                </button>
                <button className="App-unitBtn__item"
                        onClick={() => switchUnitToF()}>Imperial F°
                </button>
            </div>
            <div className="App-langBtn">
                <button className="App-langBtn__item"
                        onClick={() => switchLangToEn()}>EN
                </button>
                <button className="App-langBtn__item"
                        onClick={() => switchLangToRu()}>RU
                </button>
                <button className="App-langBtn__item"
                        onClick={() => switchLangToUa()}>UA
                </button>
            </div>
        </section>
    );
}

export default App;



