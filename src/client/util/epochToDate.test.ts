import { epochToDate } from './';

describe('Epoch Transform', () => {
    it('transforms epoch correctly', () => {
        expect(epochToDate(1600422761)).toEqual(new Date(2020, 8, 18, 9, 52, 41));
        expect(epochToDate(941623500)).toEqual(new Date(1999, 10, 3, 10, 5, 0));
    });
});
