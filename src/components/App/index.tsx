import React from 'react'
import "./App.scss";
import NumberDisplay from '../NumberDisplay/index';

const App: React.FC = () => {
    const [cells, setCells] = useState();

    return (
        <div className="App">
            <div className="Header">
                <NumberDisplay value={0} />
                <div className="Face">
                    <span role="img" aria-label="face">
                    </span>
                </div>
                <NumberDisplay value={23} />
            </div>
            <div className="Body">Body</div>
        </div>
    )

}

export default App;