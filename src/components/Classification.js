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
// import { RandomForest } from './randomForest';
// import { RandomForestClassifier as RFClassifier } from 'ml-random-forest';
// import {
//     getClasses,
//     getClassesAsNumber,
//     getCrossValidationSets,
//     getDataset,
//     getDistinctClasses,
//     getNumbers,
//   } from 'ml-dataset-iris';

export const Classification  = (props) => {
    const [isLoading, setIsLoading] = useState(false);
    const [Mood, setMood] = useState([]);
    const { isValidSession, history } = props;
    const { features, track } = props;
    const { artists, album } = track;
    const { id } = useParams();
    const {danceability, tempo, energy, valence} = features;
    const datatest = {tempo, danceability, energy, valence};
    
    
    // const datauji = [
    //     {
    //         "length":5.3,
    //         "width":5.5,
    //         "petal_length":2,
    //         "petal_width":1.9,
    //     }
    // ]

    const fs = require('fs'),
        RandomForestClassifier = require('random-forest-classifier').RandomForestClassifier;
    
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

    const randomForest = async () => {
        setIsLoading(true);
        const datalatih = await getDataset();
        const newDatatest = [datatest];

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

        // console.log(max,min);
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

        // const defuzzification = [datalatih];

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

        // const defuzzification = [];

        var defuzzification = Object.values(maxRules.reduce(function(r, e) {
            if(!r[e.mood]) r[e.mood] = e;
            else if(e.value > r[e.mood].value) r[e.mood] = e;
            return r;
        }, {}))
        // maxRules.forEach(function(item){
        //     var i = defuzzification.findIndex(x => x.mood == item.mood && x.value );
        //     if(i <= -1){
        //       defuzzification.push({valance: item.valance, energy: item.energy, danceability: item.dancebility, tempo: item.tempo, mood: item.mood});
        //     }
        // });

        console.log(defuzzification);
        
        const verdict = Math.max(...defuzzification.map(o => o.value))
        const prediction= [];
        defuzzification.forEach((item, index) => item.value === verdict ? prediction.push(item.mood): null);

        console.log(verdict);
        console.log(prediction);
        setMood(prediction[0]);


        
        
        //karpathy rf
        // const trainingSet = getNumbers();
        // const predictions = getClasses().map((elem) =>
        //     getDistinctClasses().indexOf(elem)
        // );
        // const datalatih3 = datalatih2
        // const dataPred = datalatih2
        // datalatih3.map((datalatih3)=> {
        //     delete datalatih3.mood
        // })
        // dataPred.map((dataPred)=> {
        //     delete dataPred.danceability
        //     delete dataPred.energy
        //     delete dataPred.tempo
        //     delete dataPred.valence
        // })
        // console.log(datalatih3);
        // console.log(dataPred);
        // data is 2D array of size NxD. Labels is 1D array of length D
        // RandomForest.train(datalatih3, dataPred); 
        // testData is 2D array of size MxD. Returns array of probabilities of length M
        // const labelProbabilities = RandomForest.predict(trainingSet);

        //ml rf
        // const trainingSet = getNumbers();
        // let predictions = getClasses();
        // const datalatih3 = datalatih2
        // const dataPred = datalatih2
        // datalatih3.map((datalatih3)=> {
        //     delete datalatih3.mood
        // })

        // console.log(datalatih3);
        // console.log(predic);
        // const options = {
        //     seed: 4,
        //     maxFeatures: 0.8,
        //     replacement: true,
        //     nEstimators: 10
        // };
          
        // const classifier = new RFClassifier(options);
        // classifier.train(datalatih3, predic);
        // const result = classifier.predict(datalatih);
        // setMood(result);
        
        
        //jessfraz rf
        // const rf = new RandomForestClassifier({
        //     n_estimators: 25
        // });
        // console.log('datatest');
        // console.log(newDatatest); 
        // rf.fit(datalatih, [energy], 'mood', function(err, trees){
        //     console.log(JSON.stringify(trees, null, 4));
        //     var pred = rf.predict(newDatatest, trees);
        //     // console.log('pred');
        //     console.log(datalatih);
        //     console.log(datalatih2);
        //     console.log(pred);
        //     console.log(err);
        //     setMood(pred);
        // });       
        


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
            // randomForest()
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
                <Button variant='success' style={{'flex-direction': 'column'}} onClick={randomForest} > 
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