import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from './context/ProductContext';
import { BrowserRouter } from 'react-router-dom';


const root = document.getElementById('root');
const el = ReactDOM.createRoot(root);

el.render(
//    <RouterProvider router={router}/>
  
     <Provider>
         <BrowserRouter>
         <App />
         </BrowserRouter>
        
    </Provider>
   
)