import { renderHook } from "@testing-library/react";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { useDispatch, useSelector } from "react-redux";

// Mocks
jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe("Hooks personalizados - useRedux", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("useAppDispatch deve retornar o dispatch corretamente", () => {
    const mockDispatch = jest.fn();
    (useDispatch as unknown as jest.Mock).mockReturnValue(mockDispatch);

    const { result } = renderHook(() => useAppDispatch());

    expect(result.current).toBe(mockDispatch);
    expect(useDispatch).toHaveBeenCalledTimes(1);
  });

  it("useAppSelector deve retornar o valor correto do useSelector", () => {
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
