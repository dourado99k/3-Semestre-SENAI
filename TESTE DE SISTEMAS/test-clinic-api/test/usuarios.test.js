const baseUrl = "http://localhost:3000";

test("GET /usuarios retorna 200", async () => {
    const res = await fetch(`${baseUrl}/usuarios`);
    expect(res.status).toBe(200);
});

test("GET/usuarios retorna um array", async () => {
    const res = await fetch(`${baseUrl}/usuarios`);
    const data = await res.json();
    expect(Array.isArray(data)).toBe(true)
});

test("POST /usuarios cria usuario", async () => {
    const novoUsuario = {nome: "Felipe", email: "f2d2133222123123de22czka@gmail.com", senha: "123", cargo: "Relikia" }
    const res = await fetch(`${baseUrl}/usuarios`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(novoUsuario)
    });
    const data = await res.json();
    expect(data.nome).toBe("Felipe");
    
    await fetch(`${baseUrl}/usuarios/1`, { method: "DELETE" });
    // const resDelete = await fetch(`${baseUrl}/users/${data.id}`);
});

test("GET/ usuarios/a321312313@aa.com", async () => {
    const res = await fetch(`${baseUrl}/usuarios/a321312313@aa.com`)
    expect(res.status).toBe(500)
})

test("GET /usuarios/1 retorna usuario válido", async () => {
    const res = await fetch(`${baseUrl}/usuarios/1`);
    const data = await res.json();
    expect(data).toHaveProperty("id", 1);
});

test("PUT /usuarios/1 atualiza nome do usuario", async () => {
    const res = await fetch(`${baseUrl}/usuarios/1`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            nome: "Usuario Atualizado",
        }),
    });
    const data = await res.json();
    expect(data.data.nome).toBe("Usuario Atualizado");
});

// test("DELETE /usuarios/1 exclui usuario", async () => {
//     await fetch(`${baseUrl}/usuarios/1`, { method: "DELETE" });
//     const res = await fetch(`${baseUrl}/usuarios/1`);
//     expect(res.status).toBe(404);
// });

test("GET /usuarios/999 retorna 404", async () => {
    const res = await fetch(`${baseUrl}/usuarios/999`);
    expect(res.status).toBe(404);
});

test("POST cria equipamento e lista não está vazia", async () => {
    const novoUsuario = { nome: "Felipe"};
    await fetch(`${baseUrl}/usuarios`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(novoUsuario),
    });
    const res = await fetch(`${baseUrl}/usuarios`);
    const data = await res.json();
    expect(data.length).toBeGreaterThan(0);
});
