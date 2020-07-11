import makeFakeRun from '../../../__test__/fixtures/run';
import makeRun from './index';

describe('run', () => {
    it('must have a valid id', () => {
        const run = makeFakeRun({ id: null });
        expect(() => makeRun(run).toThrow('Run must have a valid id.'));
    });
    it('can have an id', () => {
        const run = makeFakeRun({ id: 'invalid' });
        expect(() => makeRun(run).toThrow('Run must have a valid id.'));
        const noId = makeFakeRun({ id: undefined });
        expect(() => makeRun(noId)).not.toThrow();
    });
});
