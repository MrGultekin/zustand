import {useState} from 'react'
import logo from './logo.svg'
import './App.scss'
import InfoBox from "./components/InfoBox";

function App() {
    const [message, setMessage] = useState('')

    return (
        <div className="App">
            <h1>Zustand Demo Site</h1>
            <main>
                <section className="controlArea">
                    <div className="data">
                        <label>Message:</label>
                        <input
                            autoFocus
                            type="text"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        <div>
                            TEST: {message}
                        </div>
                    </div>
                </section>
                
                <section className={'dataArea'}>
                    <InfoBox message={message}/>
                </section>

            </main>
        </div>
    )
}

export default App
