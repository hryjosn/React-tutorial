import './App.css';
import { Link } from 'react-router-dom';

function App() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/Counter">Counter</Link>
                </li>
            </ul>
        </nav>
    );
}

export default App;
