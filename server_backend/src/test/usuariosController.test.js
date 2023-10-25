const { FindAllUser, CreateUser } = require("../repository/UserRepository");
const { Response } = require("../utils/Response");
const { findAll, create } = require("../controllers/UsuariosController");
const { mockRequest, mockResponse } = require("../test/mocks/mocks");

jest.mock("../repository/UserRepository.js");

const returnUsers = {
  status: 200,
  message: "Registros Encontrados",
  result: [
    {
      _id: "651dc5e8016dc5b14c0bdda5",
      password: "$2a$10$zRiVr9OjycUc/YcDWXF/4elHo7dJglBEAfrJKhfWQ/9rJ252KGP/W",
      nombres: "stiven",
      apellidos: "barajas",
      email: "brayan@gmail.com",
      usuario: "stiven",
    },
    {
      _id: "6507ac64016dc5badc0bd4ad",
      password: "$2a$10$qPeMksU6eH7952T1sChsBOEJSvNYGsoPl8YXCbq62WsUxix9GtOd2",
      nombres: "juan",
      apellidos: "quiroga",
      email: "mq137267@gmail.com",
      usuario: "quiroguin",
    },
    {
      _id: "65369802016dc5360d0bde9d",
      password: "$2a$10$YujMM0xWAx9ms16R9/3C1./bAfWW/YL1l3XTL6ySIsKhV5Jo4LwxG",
      nombres: "juan",
      apellidos: "quiroga",
      email: "mq137267@gmail.co",
      usuario: "juan",
    },
  ],
};

const requestUser = {
    body: {
  password: "123",
  nombres: "stiven",
  apellidos: "barajas",
  email: "brayan@gmail.com",
  usuario: "stiven",
}};
describe("Test Users Controller", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should data to Controller Users", async () => {
    let req = mockRequest();
    const res = mockResponse();
    FindAllUser.mockReturnValueOnce(returnUsers);

    await findAll(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
  });

  it("should data to Controller Create Fail Users", async () => {
    let req = mockRequest();
    req.params.password= "123";
    req.params.nombres= "stiven";
    req.params.apellidos= "barajas";
    req.params.email= "brayan@gmail.com";
    req.params.usuario= "stiven";

    const res = mockResponse();
    Response.message = returnUsers.message;
    Response.status = returnUsers.status;
    Response.result = returnUsers.result;

    CreateUser.mockReturnValueOnce(returnUsers);

    const data = await create(req, res);
    console.log(data)
    expect(res.status).toHaveBeenCalledWith(404);
  });
});

// let req = mockRequest();
//         req.params.fecha = '2023-02-02';
//         const res = mockResponse();
//         findAllCitas.mockReturnValueOnce({
//             status: 200, message: 'fetch success all', result: [{idPaciente: '123456'}]
//         })

//         await CitasMedicasController.listAllCitasFecha(req, res);
//         expect(res.status).toHaveBeenCalledWith(200);
