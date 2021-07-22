import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { act, renderHook, cleanup } from '@testing-library/react-hooks';
import axios from 'axios';
import { useATM } from '../../hooks/useVaccine';

describe('TEST USE ATM HOOK CAPABILITIES', () => {

    beforeEach(() => {
        const fakeResponse = {
            'data': {
                'location': 'gurgaon',
                'slots': 50,
                'isAvailable': true
            }
        };
        axios.get = jest.fn(() => Promise.resolve(fakeResponse));
        const mockFetchPromise = Promise.resolve({
            json: () => fakeResponse.data,
        });
        global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);
    });

    //Clear mocks after each execution.
    afterEach(() => {
        getNotes.mockClear();
        global.fetch.mockClear();
        delete global.fetch;
    });

    afterEach(() => {
        cleanup();
        global.fetch.mockClear();
        delete global.fetch;
    });

    test('VERIFY WHEN VALUE IS EMPTY', async () => {
        /**
         * result array should be empty.
         * error message should not be empty.
         * minimum notes dispensed should be 0.
         */
        const { result, waitForNextUpdate } = renderHook(() => useATM());
        await waitForNextUpdate();
        act(() => {
            result.current.getVaccines('');
        });
        expect(result.current.result).toHaveLength(0);
        expect(result.current.result).toEqual(expect.any(Array));
        expect(result.current.totalVaccinesAvailable).toBe(0);
        expect(result.current.errorMessage).not.toHaveLength(0);
    });

    
});
