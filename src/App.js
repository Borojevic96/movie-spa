import React, {useState, useEffect} from 'react';
import Card from './components/Card/card';
import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer";
import './style/app.scss';
import dateFormat from 'dateformat';
import {useDispatch, useSelector} from "react-redux";
import {actions} from "./actions/Actions";


const App = () => {
    const dispatch = useDispatch();
    const next = () => dispatch({type: actions.NEXT_PAGE, val: 1});
    const prev = () => dispatch({type: actions.PREV_PAGE, val: -1});

    const storedResults = useSelector(data => data.results);

    // const [data, setData] = useState({results: []});

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const result = await axios.get(
    //                 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=55cb1648d07699027c2a8b6e13e07b3f',
    //             );
    //             setData(result.data);
    //         } catch (error) {
    //             alert(error);
    //         }
    //     };
    //     fetchData();
    // }, []);

    // const fetchData = async (page) => {
    //     if (page === 0) {
    //         return alert('Error') //fixme
    //     }
    //
    //     const result = await axios(
    //         'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=55cb1648d07699027c2a8b6e13e07b3f&page=' + page,
    //     );
    //     setData(result.data);
    // };

    const toTOp = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

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
                    toTOp();
                    prev();
                }}>PREVIOUS</a>
                <a onClick={() => {
                    toTOp();
                    next();
                }}>NEXT</a>
            </div>
        </div>
        <Footer />
    </div>
}

export default App;
