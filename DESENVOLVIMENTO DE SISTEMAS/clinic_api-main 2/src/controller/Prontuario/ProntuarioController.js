// Controller

import { prismaClient } from "../../../prisma/prisma.js";

class ProntuarioController {
    constructor() { }

    async pegarTodosProntuario(_, res) {
        try {
            const prontuarios = await prismaClient.prontuario.findMany();
            return res.json(prontuarios)
        } catch (error) {
            console.log(error)
        }
    }
    async pegarProntuarioPorID(req, res) {
        try {
            // const { params } = req;
            const prontuario = await prismaClient.prontuario.findUnique({
                where: {
                    id: Number(req.params.id)
                }
            });
            if (!prontuario) {
                res.status(404).send("Erro ao procurar o prontuario com o id informado")
            }
            return res.json(prontuario)
        } catch (error) {
            console.log(error)
        }
    }
    async criarProntuario(req, res) {
        try {
            const { body } = req
            const bodyKeys = Object.keys(body)
            for (const key of bodyKeys) {
                if (key !== "descricao" &&
                    key !== "data" &&
                    key !== "medico_responsavel_id" &&
                    key !== "paciente_id"
                ) return res.status(404).send("Colunas não existentes")
            }
            const prontuario = await prismaClient.prontuario.create({
                data: {
                    ...body,
                    data: new Date(body.data) // corrigir esse cara no put quando nao se manda ele... TO-DO
                },
            })
            return res.status(201).json(prontuario)
        } catch (error) {
            console.error(error)
        }
    }
    async atualizarProntuario(req, res) {
        try {
            const { body, params } = req
            const bodyKeys = Object.keys(body)
            for (const key of bodyKeys) {
                if (key !== "descricao" &&
                    key !== "data" &&
                    key !== "medico_'responsavel_id" &&
                    key !== "paciente_id"
                ) return res.status(404).send("Colunas não existentes")
            }
            await prismaClient.prontuario.update({
                where: { id: Number(params.id) },
                data: {
                    ...body
                },
            })
            const prontuarioAtualizado = await prismaClient.prontuario.findUnique({
                where: {
                    id: Number(params.id)
                }
            })

            return res.status(201).json({
                message: "Prontuario atualizado!",
                data: prontuarioAtualizado
            })

        } catch (error) {
            if (error.code == "P2025") {
                res.status(404).send("Prontuario não existe no banco")
            }
        }
    }
    async deletarProntuario(req, res) {
        const { params } = req
        try {
            const prontuarioDeletado = await prismaClient.prontuario.delete({
                where: {
                    id: Number(params.id),
                },
            })
            res.status(200).json({
                message: "Prontuario deletado!",
                data: prontuarioDeletado
            })
        } catch (error) {
            if (error.code == "P2025") {
                res.status(404).send("Prontuario não existe no banco")
            }
        }
    }
}

export const prontuarioController = new ProntuarioController()