import { test, expect } from '@playwright/test';

test('test annotations',async() =>{
    test.fail();
    console.log('this test is fail');
    expect(1).toBe(2);

});