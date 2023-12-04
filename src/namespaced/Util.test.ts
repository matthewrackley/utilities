import { createKeysUnion } from './Util';

describe('createKeysUnion', () => {
  it('should return the correct key', () => {
    const object = {
      key1: 'value1',
      key2: 'value2',
      key3: 'value3',
    };

    const getKey = createKeysUnion(object);

    expect(getKey('value1')).toBe('key1');
    expect(getKey('value2')).toBe('key2');
    expect(getKey('value3')).toBe('key3');
  });

  it('should return undefined if the value is not found', () => {
    const object = {
      key1: 'value1',
      key2: 'value2',
      key3: 'value3',
    };

    const getKey = createKeysUnion(object);

    expect(getKey('value4')).toBeUndefined();
  });
});
