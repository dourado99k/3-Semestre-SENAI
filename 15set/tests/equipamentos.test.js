import jsonServer from "json-server"

let server;
const baseUrl = "http://localhost:4000"

beforeAll((done) => {
    const app = jsonServer.create();
    const router = jsonServer.router("db.json");
    const middlewares = jsonServer.defaults();

    app.use(middlewares);
    app.use(router);

    server = app.listen(4000, done);
});

afterAll((done) => {
    server.close(done)
});

// GET
test("GET /equipamentos retorna 200", async ( ) => {
    const res = await fetch(`${baseUrl}/equipamentos`);
    expect(res.status).toEqual(200);
});

// GET POR ID 
test("GET /equipamentos retorna 1", async( ) => {
    const res = await fetch(`${baseUrl}/equipamentos/1`);
    const data = await res.json();
    expect(data).toHaveProperty("id", 1)
});

// POST
test("POST /equipamentos criados", async ( ) => {
    const novoEquipamento = { title: "Makita", views: 230}
    const res = await fetch(`${baseUrl}/equipamentos`, {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(novoEquipamento)
    });
    const data = await res.json();
    expect(data.title).toBe("Makita")
})

// PUT``
test("PUT /equipamentos atualizados", async ( ) => {
    const res = await fetch(`${baseUrl}/equipamentos/1`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            id: 1, 
            title: "Makita Atualizada",
            views: 200
        })
    });
    const data = await res.json();
    expect(data.title).toBe("Makita Atualizada")
})

//PATCH
test("PATCH /equipamentos/1 ", async ( ) => {
    const res = await fetch(`${baseUrl}/equipamentos/1`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({title: "Novo título"}),
    })
    const data = await res.json();
    console.log(data)
    expect(data.title).toBe("Novo título");
});

//DELETE
test("DELETE /equipamentos/1 exclui equipamentos", async () => {
    await fetch(`${baseUrl}/users/1`, { method: "DELETE" });
    const res = await fetch(`${baseUrl}/equipamentos/1`);
    expect(res.status).toBe(200);
});