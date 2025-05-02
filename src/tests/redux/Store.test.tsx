import { store } from "@/redux/store";

describe("Redux Store", () => {
  let state = {};

  beforeEach(() => {
    state = store.getState();
  });

  it("should have an certidaoState property", () => {
    expect(state).toHaveProperty("cassiState");
  });
});
