import React,{ useRef } from 'react';
import { Link } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import { Context } from '../../App';

import './step3.css';

class StepThree extends React.Component {

    render() {
        return (

            <Context.Consumer>
                {(value) => (
                    <div>
                        <div className="result-table">
                            <table>
                                <caption>ABC ENGINE RESULT</caption>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Description</th>
                                        <th>Client</th>
                                        <th>Constructor</th>
                                        <th>Max-X</th>
                                        <th>Min-X</th>
                                        <th>Max-Y</th>
                                        <th>Min-Y</th>
                                        <th>Max-Z</th>
                                        <th>Min-Z</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{value.name}</td>
                                        <td>{value.description}</td>
                                        <td>{value.client}</td>
                                        <td>{value.constructor}</td>
                                        <td>{value.max_x}</td>
                                        <td>{value.min_x}</td>
                                        <td>{value.max_y}</td>
                                        <td>{value.min_y}</td>
                                        <td>{value.max_z}</td>
                                        <td>{value.min_z}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </Context.Consumer>
        )
    }
}

const PrintDocument = () => {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    return (
        <div className="container">
            <StepThree ref={componentRef} />
            <Link to="/step2" className="btnBack"> Back </Link>
            <span onClick={handlePrint} className="print fas fa-print fa-2x"><i className="print-tooltip">print</i></span>
        </div>
    );
};

export default PrintDocument;