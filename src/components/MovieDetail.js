import React, {useState} from "react";
import { Button, Modal } from "react-bootstrap";

function MovieDetail({ selected, closeDetail}) {
    const [modal, setModal] = useState(false)

    const handleClose = ()=>{
        setModal(false)
    }
    
    return (
        <>
        <section className="detail">
            <a className="close"  onClick={closeDetail}>
                Back to Home
            </a>
            <div className="content">
                <div style={{ display: 'flex' }}>
                    <img className="poster-image" style={{marginTop:'5%', opacity:0.75}} src={selected.posterurl} alt="" onClick={()=> setModal(true)}/>
                    <table style={{marginLeft:'2%', marginTop:'5%'}}>
                        <h2 style={{ whiteSpace: 'nowrap' }} >{selected.title}({selected.year})</h2>
                        <tbody>
                            <tr>
                                <td>Imdb Rating</td>
                                <td>{selected.imdbRating}</td>
                            </tr>
                            <tr>
                                <td>Content Rating</td>
                                <td>{selected.contentRating}</td>
                            </tr>
                            <tr>
                                <td>Average Rating</td>
                                <td>{selected.imdbRating}</td>
                            </tr>
                            <tr>
                                <td>Duration</td>
                                <td>{selected.duration}</td>
                            </tr>
                            <tr>
                                <td>Genres</td>
                                <td>{selected.genres.join(', ')}</td>
                            </tr>
                            <tr>
                                <td>Actors</td>
                                <td>{selected.actors.join(', ')}</td>
                            </tr>
                            <tr>
                                <td>Release Date</td>
                                <td>{selected.releaseDate}</td>
                            </tr>
                            <tr>
                                <td>Storyline</td>
                                <td>{selected.storyline}</td>
                            </tr>

                        </tbody>
                    </table>
                </div>

            </div>
        </section>

        <Modal show={modal} onHide={handleClose}>
            <Button className="closeButton" onClick={handleClose}>
               X
            </Button>
            <Modal.Body>
                <img src={selected.posterurl}/>
            </Modal.Body>
        </Modal>
        </>
    );
}

export default MovieDetail;