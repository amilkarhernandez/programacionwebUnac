const {FindAllUser, FindOneUser} = require('../repository/UserRepository');
const {Response} = require("../utils/Response");

jest.mock('../repository/UserRepository.js');

const returnUsers = {
    "status": 200,
    "message": "Registros Encontrados",
    "result": [
      {
        "_id": "651dc5e8016dc5b14c0bdda5",
        "password": "$2a$10$zRiVr9OjycUc/YcDWXF/4elHo7dJglBEAfrJKhfWQ/9rJ252KGP/W",
        "nombres": "stiven",
        "apellidos": "barajas",
        "email": "brayan@gmail.com",
        "usuario": "stiven",
      },
      {
        "_id": "6507ac64016dc5badc0bd4ad",
        "password": "$2a$10$qPeMksU6eH7952T1sChsBOEJSvNYGsoPl8YXCbq62WsUxix9GtOd2",
        "nombres": "juan",
        "apellidos": "quiroga",
        "email": "mq137267@gmail.com",
        "usuario": "quiroguin"
      },
      {
        "_id": "65369802016dc5360d0bde9d",
        "password": "$2a$10$YujMM0xWAx9ms16R9/3C1./bAfWW/YL1l3XTL6ySIsKhV5Jo4LwxG",
        "nombres": "juan",
        "apellidos": "quiroga",
        "email": "mq137267@gmail.co",
        "usuario": "juan"
      }
    ]
}

const FindOneMock = {
    "_id": "651dc5e8016dc5b14c0bdda5",
    "password": "$2a$10$zRiVr9OjycUc/YcDWXF/4elHo7dJglBEAfrJKhfWQ/9rJ252KGP/W",
    "nombres": "stiven",
    "apellidos": "barajas",
    "email": "brayan@gmail.com",
    "usuario": "stiven",
  };

describe("Test Users Repository", ()=>{

    beforeEach(()=>{
        jest.clearAllMocks();
    })

    it("should data Users", ()=>{
        FindAllUser.mockReturnValueOnce(returnUsers);
        const response = FindAllUser();

        expect(response).toBe(returnUsers);
    })

    it("should data Users Model", ()=>{
        Response.message = returnUsers.message;
        Response.status = returnUsers.status;
        Response.result = returnUsers.result;
        
        FindAllUser.mockReturnValueOnce(Response);
        const response = FindAllUser();

        expect(response).toBe(Response);
    })

    it("should one only user", ()=>{
        const id = "651dc5e8016dc5b14c0bdda5";
        FindOneUser.mockReturnValueOnce(FindOneMock);

        const response = FindOneUser(id);

        expect(response._id).toBe(FindOneMock._id);
        expect(response).not.toBeNull();
    })

})