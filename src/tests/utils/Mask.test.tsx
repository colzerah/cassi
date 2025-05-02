import { maskPhone } from "@/utils/Mask";

describe("maskPhone", () => {
  it("retorna apenas os dígitos quando tem até 2 caracteres", () => {
    expect(maskPhone("6")).toBe("6");
    expect(maskPhone("61")).toBe("61");
    expect(maskPhone("(61)")).toBe("61");
  });

  it("mascara números com 3 a 6 dígitos", () => {
    expect(maskPhone("6198")).toBe("(61) 98");
    expect(maskPhone("619812")).toBe("(61) 9812");
  });

  it("mascara números com 7 a 10 dígitos", () => {
    expect(maskPhone("61981234")).toBe("(61) 9812-34");
    expect(maskPhone("6198123456")).toBe("(61) 9812-3456");
  });

  it("mascara números com 11 dígitos (padrão celular completo)", () => {
    expect(maskPhone("61981234567")).toBe("(61) 98123-4567");
  });

  it("limita a 11 dígitos mesmo com entrada maior", () => {
    expect(maskPhone("61981234567890")).toBe("(61) 98123-4567");
  });
});
