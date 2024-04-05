import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux'
import  configureStore  from "redux-mock-store";
import { describe, it, expect, beforeEach } from 'vitest'; 
import Index from '../Components/index';

const mockStore = configureStore([]);

describe("Index Component", () => {
    let store: any;

    beforeEach(() => {
        store = mockStore({
            todos: [],
        });
    });

    it('renders correctly', async () => {
        render(
            <Provider store={store}>
                <Index />
            </Provider>
        );

        expect(screen.getByText('Redux ToolKit'));
    });
})