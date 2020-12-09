import React, {Component, Fragment, Suspense} from 'react';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';
import LaunchItem from './LaunchItem';
import MissionKey from "./MissionKey";
import {useQuery} from '@apollo/react-hooks';
import {render} from "@testing-library/react";


const LAUNCHES_QUERY = gql`
query LaunchesQuery{
    launches{
    flight_number
    mission_name
    launch_date_local
    launch_success
    }
}
`;

function Launches(props) {
    const {data, error, loading} = useQuery(LAUNCHES_QUERY);

    if (loading) return <div>Loading</div>;

    if (error) return <div>Error! {error.message}</div>;


    return (

        <>
            <h1 className="display-4 my-3">{"Launches"}</h1>
            <MissionKey/>

            {
                data.launches.map(launch => (
                    <LaunchItem key={launch.flight_number} launch={launch}/>
                ))
            }

        </>

    );
}


export default Launches;