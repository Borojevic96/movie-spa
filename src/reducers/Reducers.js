import React, {useState, useEffect} from 'react';
import axios from "axios";
import {actions} from "../actions/Actions";

const State = {
    results: []
}
const Reducer = (state = State, action) => {
    const [data, setData] = useState({results: []});
    const fetchData = async (page) => {
        try {
            const result = await axios.get(
                'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=55cb1648d07699027c2a8b6e13e07b3f',
            );
            setData(result.data);
        } catch (error) {
            alert(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    switch (action.type) {
        case actions.NEXT_PAGE:
            return fetchData(action.val)
        case actions.PREV_PAGE:
            return fetchData(action.val)
    }
    return data;
}
export default Reducer;