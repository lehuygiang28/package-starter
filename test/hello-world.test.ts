import { helloWorld, helloWorldAsync } from '../src/hello-world';

describe('helloWorld', () => {
    it('should return "Hello World!"', () => {
        expect(helloWorld()).toBe('Hello World!');
    });
});

describe('helloWorldAsync', () => {
    it('should return "Hello World async!" after 1 second', async () => {
        const result = await helloWorldAsync();
        expect(result).toBe('Hello World async!');
    });
});
