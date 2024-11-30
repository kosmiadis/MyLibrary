import { createRoot } from 'react-dom/client'
import './index.css';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './http/http';
import { Provider } from 'react-redux';
import { store } from './store/store.js';
import AppInitializer from './AppInitializer.jsx';

createRoot(document.getElementById('root')).render(
    <QueryClientProvider client={queryClient}>
        <Provider store={store}>
            <AppInitializer />
        </Provider>
    </QueryClientProvider>
)
