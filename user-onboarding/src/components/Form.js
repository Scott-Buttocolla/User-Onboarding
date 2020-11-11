import React from 'react';

export default function Form(props){
const {
    values,
    submit,
    inputChange,
    errors,
    disabled,
} = props

const onSubmit = event => {
    event.preventDefault()
    submit()
}

const onInputChange = event => {
    const { name, value, } = event.target
    inputChange( name, value )
}
return(
    <div>
        <h1>New User Onboarding</h1>
    <div>
    <form onSubmit = {onSubmit}>
        <div className = "errors">
            {/* calling all errors form formSchema */}
            <div>{errors.name}</div>
            <div>{errors.email}</div>
            <div>{errors.password}</div>
            <div>{errors.position}</div>
            <div>{errors.title}</div>
            <div>{errors.termsOfService}</div>
        </div>
        <div>
            <label>
                <strong>Name: </strong>
                <input 
                    value={values.name}
                    onChange={onInputChange}
                    name="name"
                    type="text"
                />
                <br />
            </label>
            <label>
                <strong>Email: </strong>
                <input 
                    value={values.email}
                    onChange={onInputChange}
                    name="email"
                    type="email"
                />
                <br />
            </label>
            <label>
                <strong>Password: </strong>
                <input
                    value={values.password}
                    onChange={onInputChange}
                    name="password" 
                    type="password"
                />
                <br />
            </label>
            <label>
                <strong>Position: </strong>
                <select 
                    id="position" 
                    name="position"
                    onChange={onInputChange}
                    value={values.position}
                >
                    <option value="Default Option">--Select One--</option>
                    <option value="Team Leader">Team Leader</option>
                    <option value="Frontend Engineer">Frontend Engineer</option>
                    <option value="Backend Engineer">Backend Engineer</option>
                    <option value="UI/UX Designer">UI/UX Designer</option>
                </select>
                <br />
            </label>
            <label>
                <strong>Title: </strong>
                Mr.
                <input 
                    type="radio"
                    name="title"
                    value="Mr."
                    checked={values.title === "Mr."}
                    onChange={onInputChange}
                />
                Mrs.
                <input 
                    type="radio"
                    name="title"
                    value="Mrs."
                    checked={values.title === "Mrs."}
                    onChange={onInputChange}
                />
                Ms.
                <input 
                    type="radio"
                    name="title"
                    value="Ms."
                    checked={values.title === "Ms."}
                    onChange={onInputChange}
                />
                Dr.
                <input 
                    type="radio"
                    name="title"
                    value="Dr."
                    checked={values.title === "Dr."}
                    onChange={onInputChange}
                />
                <br />
                </label>
                    <label>
                    <strong>Terms of Service:</strong>
                        <input 
                            type="checkbox" 
                            name="termsOfService" 
                            onChange={onInputChange}
                        />
                        <br />
                    </label>
                    <button disabled={disabled}>submit</button> 
                    {/* disabled now works */}
                </div>
            </form>
        </div>
    </div>
    )
}