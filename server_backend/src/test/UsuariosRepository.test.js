const UserModel = require("../models/UsuariosModels");
const { FindAllUser, FindOneUser, CreateUser, deleteUser, updateUser } = require("../repository/UserRepository");

describe("Test Usuarios", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Should findAll Response ok", async () => {
    jest
      .spyOn(UserModel, "find")
      .mockReturnValue(Promise.resolve([{ email: "test@gmail.com" }]));

    const expected = await FindAllUser();
    console.log(expected);
    expect(expected.status).toBe(200);
  });

  it("Should FindAll response Fail", async () => {
    const expectedErrorData = { errorMessage: "test error scenario" };
    jest
      .spyOn(UserModel, "find")
      .mockImplementationOnce(() =>
        Promise.reject(new Error(expectedErrorData))
      );

    try {
      await FindAllUser();
    } catch (error) {
      expect(error.status).toEqual(500);
    }
  });

  it("Shoul FindOne User response ok", async () => {
    const userId = "123";
    const user = { _id: userId, name: "User1", usuario: "user1" };

    jest
      .spyOn(UserModel, "findOne")
      .mockImplementationOnce((userId) => Promise.resolve(user));

    const result = await FindOneUser(userId);

    expect(result.status).toBe(200);
    expect(result.message).toBe("Registros Encontrados");
    expect(result.result).toEqual(user);
  });

  it("Shoul FindOne User response Fail", async () => {
    const userId = "123";
    const expectedErrorData = { errorMessage: "test error scenario" };

    jest
      .spyOn(UserModel, "findOne")
      .mockImplementationOnce((userId) =>
        Promise.reject(new Error(expectedErrorData))
      );

    try {
      await FindOneUser(userId);
    } catch (error) {
      expect(error.status).toBe(500);
    }
  });

  it("Shoul Save User response ok", async () => {
    const user = new UserModel();
    user.nombres = "test nombres";
    user.apellidos = "test apellidos";
    user.telefono = "test telefono";
    user.email = "test email";
    user.edad = "test edad";
    user.usuario = "userTest";

    jest
      .spyOn(user, "save")
      .mockImplementationOnce((user) => Promise.resolve(user));

    const result = await CreateUser(user);
    console.log(result)
    expect(result.status).toBe(201);
    expect(result.message).toBe("Se ha creado el Usuario Correctamente");
  });

  it("Shoul Save User response Fail", async () => {
    const expectedErrorData = { errorMessage: "test error scenario" };
    const user = new UserModel();
    user.nombres = "test nombres";
    user.apellidos = "test apellidos";
    user.telefono = "test telefono";
    user.email = "test email";
    user.edad = "test edad";
    user.usuario = "userTest";

    jest
      .spyOn(user, "save")
      .mockImplementationOnce((user) => Promise.reject(new Error(expectedErrorData)));

    try {
      await CreateUser(user);
    } catch (error) {
      expect(error.status).toBe(500);
      expect(error.message).toBe("Ocurrio un error en el servidor");
    }
  });

  it("Shoul DeleteUser response ok", async () => {
    const userId = "123";
    const user = { _id: userId, name: "User1", usuario: "user1" };

    jest
      .spyOn(UserModel, "findByIdAndDelete")
      .mockImplementationOnce((userId) => Promise.resolve(user));

    const result = await deleteUser(userId);

    expect(result.status).toBe(200);
    expect(result.message).toBe("Registro Eliminado correctamente");
    expect(result.result).toEqual(user);
  });

  it("Shoul deleteUser response Fail", async () => {
    const userId = "123";
    const expectedErrorData = { errorMessage: "test error scenario" };

    jest
      .spyOn(UserModel, "findByIdAndDelete")
      .mockImplementationOnce((userId) =>
        Promise.reject(new Error(expectedErrorData))
      );

    try {
      await deleteUser(userId);
    } catch (error) {
      expect(error.status).toBe(500);
    }
  });

  it("Shoul updateUser response ok", async () => {
    const userId = "654afad180c86c12c0c29d14";
    
    const user = new UserModel();
    user.nombres = "test nombres";
    user.apellidos = "test apellidos";

    jest
      .spyOn(UserModel, "findOneAndUpdate")
      .mockImplementationOnce((userId, user) => Promise.resolve(user));

    const result = await updateUser(userId, user);

    expect(result.status).toBe(200);
    expect(result.message).toBe("Registro Actualizado correctamente");
  });

  it("Shoul updateUser response Fail", async () => {
    const userId = "654afad180c86c12c0c29d14";
    const expectedErrorData = { errorMessage: "test error scenario" };

    const user = new UserModel();
    user.nombres = "test nombres";
    user.apellidos = "test apellidos";

    jest
      .spyOn(UserModel, "findOneAndUpdate")
      .mockImplementationOnce((userId, user) =>
        Promise.reject(new Error(expectedErrorData))
      );

    try {
      await updateUser(userId, user);
    } catch (error) {
      expect(error.status).toBe(500);
    }
  });
});
