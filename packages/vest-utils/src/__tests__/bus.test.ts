import { bus } from 'vest-utils';

describe('bus', () => {
  it('should be a function', () => {
    expect(bus.createBus).toBeInstanceOf(Function);
  });

  it('should return a bus', () => {
    const bus = bus.createBus();
    expect(bus).toBeInstanceOf(Object);
    expect(bus.emit).toBeInstanceOf(Function);
    expect(bus.on).toBeInstanceOf(Function);
  });

  it('should emit events', () => {
    const bus = bus.createBus();
    const spy = jest.fn();
    bus.on('test', spy);
    bus.emit('test');
    expect(spy).toHaveBeenCalled();
  });

  it('should emit events with data', () => {
    const bus = bus.createBus();
    const spy = jest.fn();
    bus.on('test', spy);
    bus.emit('test', 'testData');
    expect(spy).toHaveBeenCalledWith('testData');
  });

  it('should emit events with multiple listeners', () => {
    const bus = bus.createBus();
    const spy1 = jest.fn();
    const spy2 = jest.fn();
    bus.on('test', spy1);
    bus.on('test', spy2);
    bus.emit('test');
    expect(spy1).toHaveBeenCalled();
    expect(spy2).toHaveBeenCalled();
  });

  it('should emit events with multiple listeners and data', () => {
    const bus = bus.createBus();
    const spy1 = jest.fn();
    const spy2 = jest.fn();
    bus.on('test', spy1);
    bus.on('test', spy2);
    bus.emit('test', 'test1');
    expect(spy1).toHaveBeenCalledWith('test1');
    expect(spy2).toHaveBeenCalledWith('test1');
  });

  test('on returns an object with an `off` function', () => {
    const bus = bus.createBus();
    const spy = jest.fn();
    const off = bus.on('test', spy);
    expect(off).toBeInstanceOf(Object);
    expect(off.off).toBeInstanceOf(Function);
  });

  test('off should remove a listener', () => {
    const bus = bus.createBus();
    const spy = jest.fn();
    const off = bus.on('test', spy);
    off.off();
    bus.emit('test');
    expect(spy).not.toHaveBeenCalled();
  });

  test('off should only remove specific handler', () => {
    const bus = bus.createBus();
    const spy1 = jest.fn();
    const spy2 = jest.fn();
    const off = bus.on('test', spy1);
    bus.on('test', spy2);
    off.off();
    bus.emit('test');
    expect(spy1).not.toHaveBeenCalled();
    expect(spy2).toHaveBeenCalled();
  });
});
