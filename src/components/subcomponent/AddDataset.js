import React, { useEffect, useState } from 'react'
// import { Card } from 'react-bootstrap';
import _ from 'lodash';
import { GetAudioFeatures, getTrack, resetDispatch } from '../../actions/result';
import { Button } from 'react-bootstrap';
import { Form, FormGroup, Input, Col, Label } from 'reactstrap';
import { connect } from 'react-redux';
import axios from "axios";
import { useParams } from 'react-router-dom';
import Loader from '../Loader';

export const AddDataset = (props) => {
    const [isLoading, setIsLoading] = useState(false);
    const { isValidSession, history } = props;
    const { features, track } = props;
    const { artists } = track;
    // const artist = artists.map((artist) => artist.name).join(', ')
    const { id } = useParams();
    if(artists){
        console.log(artists[0].name);
    }
        
    console.log(props);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            await props.dispatch(GetAudioFeatures(id))
            .then(() => {
                setIsLoading(false);
            });
        }
        const fetchData2 = async () => {
            await props.dispatch(getTrack(id))
            .then(() => {
                setIsLoading(false);
            });
        }
        if (isValidSession()) {
            fetchData();
            fetchData2();
        } else {
            props.dispatch(resetDispatch());
            history.push({
                pathname: '/',
                state: {
                  session_expired: true
                }
            });
        }  
    }, []);
    
    const saveDataset = async (e) => {
        try{
            e.preventDefault();
            await axios.post('http://localhost:5000/dataset',{
                id: features.id,
                title: track.name,
                artist: artists[0].name,
                dancebility: features.danceability,
                tempo: features.tempo,
                energy: features.energy,
                valance: features.valence,
                mood: features.mood
            });
            
            props.dispatch(resetDispatch());
            
            history.push({
                pathname: '/dataset',
                state: {
                  session_expired: true
                }
            });

        }   catch (error) {
            console.log('error', error);
        }
        
    }
    
    return(
        <React.Fragment>
            <Loader show={isLoading}>Loading...</Loader>
            <h1>Add to Dataset</h1>
            {/* <Button className="button is-primary" variant='success' onClick={saveDataset}>Save</Button> */}
            <hr/>
            <Form>
                <FormGroup row>
                    <Label for="title" sm={2}>Title</Label>
                    <Col sm={10}>
                        {!_.isEmpty(artists) ? (
                            <Input type="text" value={artists.map((artist) => artist.name).join(', ')} name="email" id="title" placeholder="Title" disabled />
                        ) : (
                            <Input type="text" name="email" id="title" placeholder="Title" disabled />
                        )} 
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="artist" sm={2}>Artist</Label>
                    <Col sm={10}>
                        <Input type="text" value={track.name} name="artist" id="artist" placeholder="Artist" disabled />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="dancebility" sm={2}>Dancebility</Label>
                    <Col sm={10}>
                        <Input type="text" value={features.danceability} name="dancebility" id="dancebility" placeholder="dancebility" disabled />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="tempo" sm={2}>Tempo</Label>
                    <Col sm={10}>
                        <Input 
                            type="text" value={features.tempo} name="tempo" id="tempo" placeholder="tempo" disabled />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="energy" sm={2}>Energy</Label>
                    <Col sm={10}>
                        <Input type="text" value={features.energy} name="energy" id="energy" placeholder="energy" disabled />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="valence" sm={2}>Valence</Label>
                    <Col sm={10}>
                        <Input type="text" value={features.valence} name="valence" id="valence" placeholder="valence" disabled />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="mood" sm={2}>Mood</Label>
                    <Col sm={10}>
                        <Input type="text" value={features.mood} name="mood" id="mood" placeholder="mood" disabled/>
                    </Col>
                </FormGroup>
                <FormGroup check row>
                <Col sm={{ size: 10, offset: 2 }}>
                    <Button onClick={saveDataset}>Submit</Button>
                </Col>
                </FormGroup>
            </Form>
        </React.Fragment>
    )
 
}

const mapStateToProps = (state) => {
    return {
      features: state.tracks,
      track: state.artists
    };
  };
 
export default connect(mapStateToProps)(AddDataset);