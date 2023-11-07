import { describe, expect, test } from '@jest/globals';

describe('Given ', ()=> {
   test('Should return 200', async () => {
       const result = await fetch('http://localhost:3000');
       const jsonResult = await result.json();
       expect(jsonResult.test).toEqual(true)
   })
});