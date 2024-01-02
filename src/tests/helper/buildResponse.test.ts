import buildResponse from '../../helper/buildResponse';
import { Response } from 'express';

describe('test buildResponse function', () => {
  test('test success', () => {
    const result: Response = {
      status: jest.fn(),
      send: jest.fn(),
    };

    buildResponse(result, 200, 'success');

    expect(result.status).toHaveBeenCalled();
    expect(result.send).toHaveBeenCalled();
    expect(result.status).toHaveBeenCalledWith(200);
    expect(result.send).toHaveBeenCalledWith('success');
  });
});
