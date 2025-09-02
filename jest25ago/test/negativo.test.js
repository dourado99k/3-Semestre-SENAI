import { negativo } from "../src/negativo";

test("Retornar true para um número negativo", () => {
    expect(negativo(-2)).toBe(true)
})
test("Retornar false para um número negativo", () => {
    expect(negativo(2)).toBe(false)
})