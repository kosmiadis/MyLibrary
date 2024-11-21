import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './http/http';
import { Provider } from 'react-redux';
import { store } from './store/store.js';

createRoot(document.getElementById('root')).render(
    <QueryClientProvider client={queryClient}>
        <Provider store={store}>
            <App />
        </Provider>
    </QueryClientProvider>
)
