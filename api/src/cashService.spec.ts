import { describe, expect, test } from '@jest/globals';
import { currentDollarValue, insertCoin } from './cashService';

describe('cash service', ()=> {

    test('current dollar value returns zero when no money has been inserted', async () => {
        expect(currentDollarValue()).toEqual("$0.00")
    });

    test('current dollar value returns $0.25 when a quarter has been inserted', async () => {
        const quarter = {
            weightInGrams: 50,
            radiusInInches: .5
        }

        insertCoin(quarter)

        expect(currentDollarValue()).toEqual("$0.25")
    });

    test('current dollar value returns $0.50 when two quarters has been inserted', async () => {
        const quarter = {
            weightInGrams: 50,
            radiusInInches: .5
        }

        insertCoin(quarter)
        insertCoin(quarter)

        expect(currentDollarValue()).toEqual("$0.50")
    });
});