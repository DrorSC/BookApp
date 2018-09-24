import { OnlyEnglishLettersPipe } from './only-english-letters.pipe';

describe('OnlyEnglishLettersPipe', () => {
  it('create an instance', () => {
    const pipe = new OnlyEnglishLettersPipe();
    expect(pipe).toBeTruthy();
  });
});
