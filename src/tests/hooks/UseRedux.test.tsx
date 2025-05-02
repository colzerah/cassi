import { renderHook } from "@testing-library/react";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { useDispatch, useSelector } from "react-redux";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe("Custom Hooks - useRedux", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("useAppDispatch should return dispatch correctly", () => {
    const mockDispatch = jest.fn();
    (useDispatch as unknown as jest.Mock).mockReturnValue(mockDispatch);

    const { result } = renderHook(() => useAppDispatch());

    expect(result.current).toBe(mockDispatch);
    expect(useDispatch).toHaveBeenCalledTimes(1);
  });

  it("useAppSelector should return the correct value of useSelector", () => {
    const mockState = { cassiState: { user: { name: "Dyego" } } };
    (useSelector as unknown as jest.Mock).mockImplementation((selectorFn) =>
      selectorFn(mockState)
    );

    const { result } = renderHook(() =>
      useAppSelector((state) => state.cassiState.user)
    );

    expect(result.current).toEqual({ name: "Dyego" });
    expect(useSelector).toHaveBeenCalledTimes(1);
  });
});
