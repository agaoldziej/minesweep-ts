import React from 'react'
import "./App.scss";
import NumberDisplay from '../NumberDisplay/index';

const App: React.FC = () => {

    return (
        <div className="App">
            <div className="Header">
                <NumberDisplay value={0} />
                <NumberDisplay value={23} />
            </div>
            <div className="Body">Body</div>
        </div>
    )

}

export default App;