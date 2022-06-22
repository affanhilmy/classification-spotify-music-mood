import { useState } from 'react'
import axios from "axios";
import { useHistory } from 'react-router-dom';
 
const AddDataset = () => {
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [dancebility, setDancebility] = useState('');
    const [tempo, setTempo] = useState('');
    const [energy, setEnergy] = useState('');
    const [valance, setValance] = useState('');
    const [mood, setMood] = useState('');
    const history = useHistory();
 
    const saveDataset = async (e) => {
        if(energy < 0.5 && valance < 0.5) {
            setMood('Sedih')
        }else if(energy < 0.5 && valance > 0.5) {
            setMood('Santai')
        }else if(energy > 0.5 && valance < 0.5) {
            setMood('Marah')
        }else if(energy > 0.5 && valance > 0.5) {
            setMood('Senang')
        }
        e.preventDefault();
        await axios.post('http://localhost:5000/dataset',{
            title: title,
            artist: artist,
            dancebility: dancebility,
            tempo: tempo,
            energy: energy,
            valance: valance,
            mood: mood
        });
        history.push("/");
    }
 
    return (
        <div>
            <form onSubmit={ saveDataset }>
                <div className="field">
                    <label className="label">Title</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Title"
                        value={ title }
                        onChange={ (e) => setTitle(e.target.value) }
                    />
                </div>
 
                <div className="field">
                    <label className="label">Artist</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Artist"
                        value={ artist }
                        onChange={ (e) => setArtist(e.target.value) }
                    />
                </div>
 
                <div className="field">
                    <label className="label">Dancebility</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Dancebility"
                        value={ dancebility }
                        onChange={ (e) => setDancebility(e.target.value) }
                    />
                </div>
 
                <div className="field">
                    <label className="label">Tempo</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Tempo"
                        value={ tempo }
                        onChange={ (e) => setTempo(e.target.value) }
                    />
                </div>
 
                <div className="field">
                    <label className="label">Energy</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Energy"
                        value={ Energy }
                        onChange={ (e) => setEnergy(e.target.value) }
                    />
                </div>
 
                <div className="field">
                    <label className="label">Valance</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Valance"
                        value={ valance }
                        onChange={ (e) => setValance(e.target.value) }
                    />
                </div>
 
                <div className="field">
                    <button className="button is-primary">Save</button>
                </div>
            </form>
        </div>
    )
}
 
export default AddDataset