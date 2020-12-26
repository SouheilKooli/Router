import React from 'react'
import {Link} from 'react-router-dom'
import {movieContainer} from './Movie-Container'
import { Button } from 'react-bootstrap';
import "./Modal/Modal.css";
import "material-components-web";


export default function MovieTrailer({match}){
    // const el = movieContainer.find(({ id }) => id === match.params.id);
    return(
        <div className="movietrl">
            <div >
                {movieContainer.map((el) => el.id === match.params.id ?
                <div className="movietrldetail">
                    <h3>Description:</h3>
                    <p>{el.description}</p>
                    <span className="material-icons">
                        <a href={el.trailer}>Trailer</a>
                    </span>
                </div> :null)}
            </div>
            <Link to="/">
          <Button className="btr"> Go Back </Button>
          </Link>
        </div>
    )
}