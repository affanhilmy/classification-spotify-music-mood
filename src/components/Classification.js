import React, { useEffect, useState } from 'react'
import _ from 'lodash';
import { GetAudioFeatures, getTrack, resetDispatch } from '../actions/result';
import { Card, ModalBody } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import axios from "axios";
import { useParams } from 'react-router-dom';
import music from '../images/music.jpeg';
import Loader from './Loader';


export const Classification  = (props) => {
    const [isLoading, setIsLoading] = useState(false);
    const [Mood, setMood] = useState([]);
    const { isValidSession, history } = props;
    const { features, track } = props;
    const { artists, album } = track;
    const { id } = useParams();
    const {danceability, tempo, energy, valence} = features;
    const datatest = {tempo, danceability, energy, valence};
    
    const getDataset = async () => {
        const response = await axios.get('http://localhost:5000/dataset');
        console.log(response);
        const copy = response.data
        copy.map((copy)=> {
            delete copy.artist
            delete copy.title
            delete copy.id
        })
        return copy;
    }

    const fuzzyMamdani = async () => {
        setIsLoading(true);
        const datalatih = await getDataset();

        const max = {
            danceability: Math.max(...datalatih.map(o => o.dancebility)),
            tempo: Math.max(...datalatih.map(o => o.tempo)),
            energy: Math.max(...datalatih.map(o => o.energy)),
            valance: Math.max(...datalatih.map(o => o.valance))
        }

        const min = {
            danceability: Math.min(...datalatih.map(o => o.dancebility)),
            tempo: Math.min(...datalatih.map(o => o.tempo)),
            energy: Math.min(...datalatih.map(o => o.energy)),
            valance: Math.min(...datalatih.map(o => o.valance))
        }

        console.log(max,min);
        console.log(datatest);

        //Fuzzification
        const fuzzy = {
            valance_min: (max.valance-datatest.valence)/(max.valance-min.valance),
            valance_max: (datatest.valence-min.valance)/(max.valance-min.valance),
            energy_min: (max.energy-datatest.energy)/(max.energy-min.energy),
            energy_max: (datatest.energy-min.energy)/(max.energy-min.energy),
            danceability_min: (max.danceability-datatest.danceability)/(max.danceability-min.danceability),
            danceability_max: (datatest.danceability-min.danceability)/(max.danceability-min.danceability),
            tempo_min: (max.tempo-datatest.tempo)/(max.tempo-min.tempo),
            tempo_max: (datatest.tempo-min.tempo)/(max.tempo-min.tempo)
        }

        console.log(fuzzy);

        const check_valance = check => {if(check<0.5) {return fuzzy.valance_min} else return fuzzy.valance_max}
        const check_energy = check => {if(check<0.5) {return fuzzy.energy_min} else return fuzzy.energy_max}
        const check_danceablity = check => {if(check<0.5) {return fuzzy.danceability_min} else return fuzzy.danceability_max}
        const check_tempo = check => {if(check<70) {return fuzzy.tempo_min} else return fuzzy.tempo_max}

        const rulesDefuzzification = datalatih.map(o => ({ ...o, 
            valance: check_valance(o.valance),  
            energy: check_energy(o.energy),
            dancebility: check_danceablity(o.dancebility),
            tempo: check_tempo(o.tempo)
        }));
        
        const maxRules = rulesDefuzzification.map(o => ({ ...o,
            value: Math.min(o.dancebility, o.valance, o.energy, o.tempo)
        }))
        
        console.log(rulesDefuzzification);
        console.log(maxRules);

        //Defuzzification
        var defuzzification = Object.values(maxRules.reduce(function(r, e) {
            if(!r[e.mood]) r[e.mood] = e;
            else if(e.value > r[e.mood].value) r[e.mood] = e;
            return r;
        }, {}))
        
        console.log(defuzzification);
        
        const verdict = Math.max(...defuzzification.map(o => o.value))
        const prediction= [];
        defuzzification.forEach((item, index) => item.value === verdict ? prediction.push(item.mood): null);

        // console.log(verdict);
        // console.log(prediction);
        setMood(prediction[0]);    


        setIsLoading(false);
    }

    
    useEffect(() => {
        const fetchFeatures = async () => {
            setIsLoading(true);
            await props.dispatch(GetAudioFeatures(id))
            .then(() => {
                setIsLoading(false);
            });
        }
    
        const fetchTrack = async () => {
            await props.dispatch(getTrack(id))
            .then(() => {
                setIsLoading(false);
            });
        }
        if (isValidSession()) {
            fetchTrack();
            fetchFeatures()
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

    return(
        <React.Fragment>
            <Loader show={isLoading}>Loading...</Loader>
            <h1>Classification</h1>
            <hr/>
            <Card style={{
                padding: '1em',
                display: 'flex',
                'flex-direction': 'row',
                'max-width': '60%',
                height: 'auto',
                'border-radius': '10px'
            }}>
                {!_.isEmpty(album) ? (
                        <Card.Img src={album.images[0].url} />
                      ) : (
                        <img src={music} alt="" />
                      )}
                <Card.Body>
                <Card.Title>
                    {!_.isEmpty(artists) ? (
                        artists.map((artist) => artist.name).join(', ')
                    ):(
                        artists
                    )}
                    
                </Card.Title>
                <Card.Text>
                    <small>
                        {track.name}
                    </small>
                </Card.Text>
                <Button variant='success' style={{'flex-direction': 'column'}} onClick={fuzzyMamdani} > 
                    {!_.isEmpty(Mood) ? (
                        Mood
                    ):(
                        'Click to Determine Classification'
                    )} 
                </Button>
                </Card.Body>
            </Card>
        </React.Fragment>
    )
 
}

const mapStateToProps = (state) => {
    return {
      features: state.tracks,
      track: state.artists
    };
  };

 
export default connect(mapStateToProps)(Classification);