import { getFullYear, getFooterCopy } from './App';
import { getLatestNotification } from './Notifications'
describe('Utility functions', () => {
    test('getFullYear returns the correct year', () => {
        const year = new Date().getFullYear();
        expect(getFullYear()).toBe(year);
    });

    test('getFooterCopy returns the correct string when the argument is true', () => {
        expect(getFooterCopy(true)).toBe('Holberton School');
    });

    test('getFooterCopy returns the correct string when the argument is false', () => {
        expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
    });

    test('getLatestNotification returns the correct string', () => {
        expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
    });
});
