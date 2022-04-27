// this test is just a demo to show how we can mock only
// a subset of the module, and leave the rest as it is

import defaultExport , { foo, bar } from './mockPartial';

jest.mock('./mockPartial', () =>{
    const originalModule = jest.requireActual('./mockPartial');
    return {
        __esModule: true, // be aware is double underscore (__) not (_)
        ...originalModule,
        default: jest.fn(() => "mocked baz"), // here I mokc the default export
        foo: "mocked foo", // here I mock the foo export
    };
});

test('should do a partial mock', () => {
    const defaultExportResult = defaultExport();
    expect(defaultExportResult).toBe('mocked baz');
    expect(defaultExport).toHaveBeenCalled();
  
    expect(foo).toBe('mocked foo');
    expect(bar()).toBe('bar');
});