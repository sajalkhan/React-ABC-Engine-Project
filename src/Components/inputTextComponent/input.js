
const TextInput = (props)=> {
    return(
        <div>
            <label>{props.label}</label><br />
            <input {...props} type="text" name={props.name} />
        </div>
    )
}

export default TextInput;