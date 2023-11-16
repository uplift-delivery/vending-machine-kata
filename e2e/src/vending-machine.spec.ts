import { describe, expect, test } from '@jest/globals';

describe('vending machine kata', ()=> {
    test('Health check', async () => {
        const result = await fetch('http://localhost:3000/healthcheck');
        const jsonResult = await result.json();
        expect(jsonResult.test).toEqual(true)
    });

    test('Get Display Text returns INSERT COIN when no coins inserted', async () => {
        const result = await fetch('http://localhost:3000/displayText');
        const jsonResult = await result.json();
        expect(jsonResult.text).toEqual("INSERT COIN")
    })

    test('Get Display Text returns value of inserted coins when coin after coin is inserted', async () => {
        const quarter = {
            weightInGrams: 50,
            radiusInInches: .5
        }

        await fetch('http://localhost:3000/coin', {
            method: "POST",
            body: JSON.stringify(quarter)
        });

        
        const result = await fetch('http://localhost:3000/displayText');
        const jsonResult = await result.json();
        expect(jsonResult.text).toEqual("$0.25");
    })
});