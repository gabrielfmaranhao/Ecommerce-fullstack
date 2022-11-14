import AppDataSource from "../../../data-source";
import app from "../../../app";
import { DataSource } from "typeorm";
import  request   from "supertest";
import { userMockAdm } from "../../mock";

describe("Testes para a rota de usuário", () => {
    let connection : DataSource

    beforeAll( async ()=> {
        await AppDataSource.initialize().then( async (dataSource) => {
            connection = dataSource
        }).catch((error) => console.error(error))
    })

    afterAll( async () => await  connection.destroy())

    test("POST /users - É possível criar um usuário ", async () => {
        const response = await request(app).post("/users").send(userMockAdm)

        expect(response.status).toBe(201)
        expect(response.body).toHaveProperty("id")
        expect(response.body).toHaveProperty("name")
        expect(response.body).toHaveProperty("email")
        expect(response.body).toHaveProperty("isAdm")
        expect(response.body).toHaveProperty("image_url")
        expect(response.body).toHaveProperty("isActive")
        expect(response.body).toHaveProperty("createdAt")
        expect(response.body).toHaveProperty("updatedAt")
    })
    test("POST /users - Não é possível criar um usuário com o mesmo email", async () => {
        const user = await request(app).post("/users").send(userMockAdm)
        const response = await request(app).post("/users").send(userMockAdm)

        expect(response.status).toBe(400)
        expect(response.body).toHaveProperty("status")
        expect(response.body).toHaveProperty("message")
    })
})