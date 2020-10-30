import React from 'react';
import { Link } from 'react-router-dom';
import InputText from '../inputTextComponent/input';
import { Context } from '../../App';
import './step2.css';

import { CSVReader } from 'react-papaparse';
const buttonRef = React.createRef();

const StepTwo = () => {


    const handleOpenDialog = (e) => {
        // Note that the ref is set async, so it might be null at some point
        if (buttonRef.current) {
            buttonRef.current.open(e)
        }
    }

    return (

        <Context.Consumer>
            {(value) => (
                <div className="container">
                    <div className="main">
                        <div className="label">
                            Step 2
                        </div>
                        <div className="form">

                            <InputText label="Project Name:" name="name" value={value.name} readOnly onChange={() => { }} />
                            <InputText label="Project Description:" name="description" value={value.description} readOnly onChange={() => { }} />
                            <InputText label="Client:" name="client" value={value.client} readOnly onChange={() => { }} />
                            <InputText label="Constructor:" name="constructor" value={value.constructor} readOnly onChange={() => { }} />

                        </div>
                        <Link to="/" className="btn"> Continue </Link>
                        <Link to="/" className="btn-back"> Back </Link>
                    </div>
                    <br />
                    <hr />

                    <div className="main" style={{ marginTop: 10, marginBottom: 20 }}>
                        <div className="label">
                            Step 3
                        </div>
                        <div className="form">
                            <InputText label="* Max-X" name="max_x" value={value.max_x.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')} onChange={(e) => value.updateValue(e)} />
                            <InputText label="* Min-X" name="min_x" value={value.min_x.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')} onChange={(e) => value.updateValue(e)} />
                            <InputText label="* Max-Y" name="max_y" value={value.max_y.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')} onChange={(e) => value.updateValue(e)} />
                            <InputText label="* Min-Y" name="min_y" value={value.min_y.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')} onChange={(e) => value.updateValue(e)} />

                            <CSVReader
                                ref={buttonRef}
                                onFileLoad={(e) => value.handleOnFileLoad(e)}
                                onError={() => value.handleOnError}
                                noClick
                                noDrag>
                                {({ file }) => (
                                    <aside
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            justifyContent: 'flex-end',
                                            marginBottom: 10
                                        }}>

                                        <button
                                            className="fileUpload"
                                            type='button'
                                            onClick={handleOpenDialog}>
                                            Upload file
                                        </button>

                                        <div className="fileUpload_div"
                                            style={{
                                                borderWidth: 1,
                                                borderStyle: 'solid',
                                                borderColor: '#ccc',
                                                width: '60%'
                                            }}>
                                            {file && file.name}
                                        </div>
                                    </aside>
                                )}
                            </CSVReader>
                        
                        </div>
                        
                    </div>

                </div>
            )}
        </Context.Consumer>
    )
}

export default StepTwo;