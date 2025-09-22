const baseUrl = "http://localhost:3000";

test("GET /usuarios retorna 200", async () => {
    const res = await fetch(`${baseUrl}/usuarios`);
    expect(res.status).toBe(200);
});
