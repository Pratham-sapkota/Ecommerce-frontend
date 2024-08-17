import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from './context/ProductContext';

const root = document.getElementById('root');
const el = ReactDOM.createRoot(root);

el.render(
    <Provider>
        <App />
    </Provider>
)