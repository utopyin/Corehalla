import { formatTime } from './';

describe('Time Format', () => {
    it('formats time correctly', () => {
        expect(formatTime(1385510)).toEqual('384h 51m 50s');
        expect(formatTime(1313103)).toEqual('364h 45m 3s');
    });
});
