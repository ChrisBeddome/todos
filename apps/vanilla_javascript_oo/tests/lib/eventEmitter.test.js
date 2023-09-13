import EventEmitter from "../../src/lib/eventEmitter.js"

const testEventName = "testing testing 123";

class Emitter extends EventEmitter {
  test() {
    this._emit(testEventName);
  }
}

describe("EventEmitter", () => {
  let emitter

  beforeEach(() => {
    emitter = new Emitter();
  });

  describe("on", () => {
    it("throws error when given non-string value for eventName", () => {
      expect(() => emitter.on(true, () => {}).toThrow());
    });

    it("throws error when given non-function value for fn", () => {
        expect(() => emitter.on("test", true).toThrow());
    });

    it("does not throw error when given string for eventName and function for fn", () => {
      expect(() => emitter.on("test", () => {}).not.toThrow());
    });

    it("should register event callbacks", () => {
      let counter = 0;
      emitter.on(testEventName, () => { counter++ })
      expect(counter).toEqual(0);
      emitter.test();
      expect(counter).toEqual(1);
      emitter.test();
      expect(counter).toEqual(2);
    });
  });

  describe("off", () => {
    it("throws error when given non-string value for eventName", () => {
      expect(() => emitter.off(true, () => {}).toThrow());
    });

    it("throws error when given non-function value for fn", () => {
        expect(() => emitter.off("test", true).toThrow());
    });

    it("does not throw error when given string for eventName and function for fn", () => {
      expect(() => emitter.off("test", () => {}).not.toThrow());
    });

    it("should unregister event callbacks", () => {
      let counter = 0;
      let fn = () => { counter ++ }
      emitter.on(testEventName, fn)
      expect(counter).toEqual(0);
      emitter.test();
      expect(counter).toEqual(1);
      emitter.test();
      expect(counter).toEqual(2);
      emitter.off(testEventName, fn)
      emitter.test();
      expect(counter).toEqual(2);
    });
  });
});

