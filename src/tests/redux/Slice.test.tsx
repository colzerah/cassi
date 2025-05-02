import reducer, { cassiActions, initialState } from "@/redux/cassi/slice";

describe("cassi reducer", () => {
  it("must return the initial state", () => {
    expect(reducer(undefined, { type: "" })).toEqual(initialState);
  });

  it("should handle setConfirmOpening", () => {
    const action = cassiActions.setConfirmOpening(true);
    const state = reducer(initialState, action);
    expect(state.confirmOpening).toBe(true);
  });

  it("should handle setRecognizeNIP", () => {
    const action = cassiActions.setRecognizeNIP(true);
    const state = reducer(initialState, action);
    expect(state.recognizeNIP).toBe(true);
  });

  it("should handle setRecognizeInterlocutor", () => {
    const action = cassiActions.setRecognizeInterlocutor(false);
    const state = reducer(initialState, action);
    expect(state.recognizeInterlocutor).toBe(false);
  });

  it("should handle setUpdateUser", () => {
    const newUser = {
      phone: 11988887777,
      email: "novo@email.com",
    };

    const action = cassiActions.setUpdateUser(newUser);
    const state = reducer(initialState, action);
    expect(state.user.phone).toBe(newUser.phone);
    expect(state.user.email).toBe(newUser.email);
    expect(state.user.name).toBe(initialState.user.name);
  });
});
