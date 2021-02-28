const Weather = (props) => {

    //сделал такую проверку потому что была ошибка что weather пустой
    // и понятно почему пустой потому что сначала надо город, а так как без геолокации сделал вот так
    if (!props.weather) return <div>Enter name of the city</div>;
    let iconUrl = `https://openweathermap.org/img/wn/${props.weather.weather[0].icon}@2x.png`;

    return (
        <section className="weather">
            {props.weather &&
            <div className="weather-container">
                <p className="weather-container__name">{props.weather.name}, {props.weather.sys.country}</p>
                <div className="weather-container__block">
                    <img className="weather-container__block_img" src={iconUrl}/>
                    <p className="weather-container__temp">{props.weather.main.temp} °</p>
                </div>
                {
                    props.weather.weather.map(e => <div key={e.id}>
                        <p className="weather-container__item">{e.main}, {e.description}</p>
                    </div>)
                }
                <p className="weather-container__item">Pressure: {props.weather.main.pressure},
                    Humidity: {props.weather.main.humidity}</p>
                <p className="weather-container__item">Wind speed: {props.weather.wind.speed}</p>
            </div>
            }
        </section>
    )
}

export default Weather;
