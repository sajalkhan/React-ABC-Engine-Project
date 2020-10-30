import React from 'react';
import { Link } from 'react-router-dom';
import InputText from '../inputTextComponent/input';
import { Context } from '../../App';

import './step1.css';

const StepOne = () => {

    return (

        <Context.Consumer>
            {(value) => (
                <div className="container">
                    <div className="main">
                        <div className="label">
                            Step 1
                        </div>
                        <div className="form">

                            <InputText label="Project Name:" name="name" value={value.name} onChange={(e)=> value.updateValue(e)} />
                            <InputText label="Project Description:" name="description" value={value.description} onChange={(e)=> value.updateValue(e)} />
                            <InputText label="Client:" name="client" value={value.client} onChange={(e)=> value.updateValue(e)} />
                            <InputText label="Constructor:" name="constructor" value={value.constructor} onChange={(e)=> value.updateValue(e)} />

                        </div>
                        <Link to="/step2" className="btn-continue"> Continue </Link>
                    </div>
                </div>
            )}
        </Context.Consumer>
    )
}

export default StepOne;