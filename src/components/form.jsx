const Form = (props) => {
    return (
            <form className="form" onSubmit={props.cityForm}>
                <input className="form-input" type="text" name="city" placeholder="City"  />
                <button className="form-btn">Search</button>
            </form>
    )
}

export default Form;
