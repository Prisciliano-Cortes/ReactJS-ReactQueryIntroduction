// import { useState, useEffect, useReducer } from 'react';
import './App.css'
import { useRandom } from './hooks/useRandom';

export const App = () => {
    const query = useRandom()
    
    return (
        <div>
            {
                query.isFetching ? 
                <h3> Loading... </h3>
                :
                <h2>Random number: { query.data } </h2>
            }

            {
                !query.isLoading && query.isError && <h3> { `${ query.error }` } </h3>
            }

            <button onClick={ () => query.refetch() } disabled={ query.isFetching }>
                {
                    query.isFetching ? '...' : 'New number'
                }
            </button>
        </div>
    )
}