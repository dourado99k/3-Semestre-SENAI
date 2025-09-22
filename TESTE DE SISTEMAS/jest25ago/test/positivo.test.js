import { positivo } from "../src/positivo";

test("Retorne true para um numero positivo", () => {
    expect(positivo(4)).toBe(true)
})

test("Retorne false para um numero positivo", () => {
    expect(positivo(-1)).toBe(false)
})