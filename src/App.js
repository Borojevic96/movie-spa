import React, {useEffect} from 'react';
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer";
import './style/app.scss';
import dateFormat from 'dateformat';
import {useDispatch, useSelector} from "react-redux";
import axios from 'axios';
import {actions} from "./reducers/Reducers";

const App = () => {
    const dispatch = useDispatch();
    const storedResults = useSelector(state => state.data);
    const page = useSelector(state => state.page);
    const loading = useSelector(state => state.loading);
    const fetchData = async (page) => {
        dispatch({type: actions.FETCH_DATA})
        try {
            const result = await axios.get(
                `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=55cb1648d07699027c2a8b6e13e07b3f&page=${page}`,
            );
            dispatch({type: actions.STORE_DATA, payload: result.data})
        } catch (error) {
            alert(error);
            dispatch({type: actions.FETCH_DATA_FAILED})
        }
    };

    useEffect(() => {
        fetchData(page);
    }, [useSelector(state => state.page)]);

    const toTOp = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }
    if (loading) return <div className='loading'>
        <h1>Loading...</h1>
    </div>

    return <div className='App'>
        <Header />
        <div className='content'>
            <h1>Most popular movies in this year:</h1>
            <div className='MovieBox'>
                {storedResults.map(item => (
                    <Card id={item.id}
                          name={item.title}
                          date={dateFormat(item.release_date, "mmmm dS, yyyy")}
                          img={item.poster_path} />
                ))}
            </div>
            <div className="Pagination">
                <a onClick={() => {
                    dispatch({type: actions.PREV_PAGE})
                    toTOp();
                }}>PREVIOUS</a>
                <a onClick={() => {
                    dispatch({type: actions.NEXT_PAGE})
                    toTOp();
                }}>NEXT</a>
            </div>
        </div>
        <Footer />
    </div>
}

export default App;
