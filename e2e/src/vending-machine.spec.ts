import { describe, expect, test } from '@jest/globals';

describe('vending machine kata', ()=> {
    test('Health check', async () => {
        const result = await fetch('http://localhost:3000/healthcheck');
        const jsonResult = await result.json();
        expect(jsonResult.test).toEqual(true)
    });
});