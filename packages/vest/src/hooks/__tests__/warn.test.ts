import { faker } from '@faker-js/faker';

import { ErrorStrings } from 'ErrorStrings';
import * as vest from 'vest';

const { create, test, warn } = vest;

function asVestTest(t: unknown): vest.IsolateTest {
  return t as vest.IsolateTest;
}

describe('warn hook', () => {
  describe('When currentTest exists', () => {
    it('Should set warns to true', () => {
      let t;
      create(() => {
        t = test(faker.lorem.word(), faker.lorem.sentence(), () => {
          warn();
        });
      })();

      expect(asVestTest(t).warns()).toBe(true);
    });
  });

  describe('Error handling', () => {
    it('Should throw error when currentTest is not present', () => {
      const done = jest.fn();
      create(() => {
        expect(warn).toThrow(ErrorStrings.WARN_MUST_BE_CALLED_FROM_TEST);
        done();
      })();
      expect(done).toHaveBeenCalled();
    });

    it('Should throw error when no suite present', () => {
      expect(warn).toThrow(ErrorStrings.HOOK_CALLED_OUTSIDE);
    });
  });
});
