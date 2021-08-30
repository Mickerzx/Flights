import React from 'react';
import {Table} from 'reactstrap';
import {NavLink} from "react-router-dom";
import './FlightTable.css'

interface FlightsTableProps {
    data: any;
    admin: boolean;
}

export type dataType = {
    actualArrivalTime: string,
    actualDepartureTime: string,
    aircraftType: string,
    airline: string,
    arrivalCity: string,
    arrivalTime: string,
    comment: string,
    departureCity: string,
    departureTime: string,
    flightNumber: string,
    status: string,
    __v: number,
    _id: string,
}

const FlightsTable: React.FC<FlightsTableProps> = ({data, admin}) => {


    return (
        <div>
            <Table striped className='flight-table mt-3'>
                <thead>
                <tr>
                    <th>Номер рейса</th>
                    <th>Авиакомпания</th>
                    <th>Город вылета</th>
                    <th>Город прилёта</th>
                    <th>Тип самолёта</th>
                    <th>Ожидаемое время вылета</th>
                    <th>Ожидаемое время прилёта</th>
                    <th>Фактическое время вылета</th>
                    <th>Фактическое время прилёта</th>
                    <th>Статус</th>
                    <th>Комментарии</th>
                    {admin ? <th/> : null}
                </tr>
                </thead>
                <tbody>

                {data.map((flight: dataType) => (
                    <tr key={flight._id}>
                        <th scope="row">{flight.flightNumber}</th>
                        <td>{flight.airline}</td>
                        <td>{flight.departureCity}</td>
                        <td>{flight.arrivalCity}</td>
                        <td>{flight.aircraftType}</td>
                        <td>{flight.departureTime}</td>
                        <td>{flight.arrivalTime}</td>
                        <td>{flight.actualDepartureTime}</td>
                        <td>{flight.actualArrivalTime}</td>
                        <td>{flight.status}</td>
                        <td>{flight.comment}</td>
                        {admin ? <td><NavLink to={'/flight/' + flight._id + '/edit'}> Edit</NavLink></td> : null}
                    </tr>))}
                </tbody>
            </Table>
        </div>
    );
};

export default FlightsTable;