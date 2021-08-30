import React, {useEffect} from 'react';
import FlightsTable from "../../components/FlightsTable/FlightsTable";
import {useDispatch, useSelector} from "react-redux";
import {fetchFlightRequest} from "../../store/actions/action";
import {RootState} from "../../index";
import Spinner from "../../components/UI/Spinner/Spinner";
import {RouteComponentProps} from 'react-router-dom';


const Flights: React.FC<RouteComponentProps> = ({match}) => {

    const dispatch = useDispatch()
    const data = useSelector((state: RootState) => state.appReducer);

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(fetchFlightRequest())
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    let admin = false;

    if (match.path === '/admin') {
        admin = true;
    }


    return (
        <>
            {data.loading ? <Spinner/> : <FlightsTable data={data.flights} admin={admin}/>}
        </>
    );
};

export default Flights;