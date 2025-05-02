import { maskPhone } from "@/utils/Mask";

describe("maskPhone", () => {
  it("returns only digits when it has up to 2 characters", () => {
    expect(maskPhone("6")).toBe("6");
    expect(maskPhone("61")).toBe("61");
    expect(maskPhone("(61)")).toBe("61");
  });

  it("masks numbers with 3 to 6 digits", () => {
    expect(maskPhone("6198")).toBe("(61) 98");
    expect(maskPhone("619812")).toBe("(61) 9812");
  });

  it("masks numbers with 7 to 10 digits", () => {
    expect(maskPhone("61981234")).toBe("(61) 9812-34");
    expect(maskPhone("6198123456")).toBe("(61) 9812-3456");
  });

  it("masks 11-digit numbers (full cellular standard)", () => {
    expect(maskPhone("61981234567")).toBe("(61) 98123-4567");
  });

  it("limited to 11 digits even with larger input", () => {
    expect(maskPhone("61981234567890")).toBe("(61) 98123-4567");
  });
});
