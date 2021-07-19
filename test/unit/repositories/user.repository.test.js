const { UserRepository } = require("../../../src/repositories");
const mockingoose = require("mockingoose");
const { User } = require("../../../src/models");
const {
  UserModelMock: { user, users },
} = require("../../mocks");

describe("User repository test", () => {
  beforeEach(() => {
    mockingoose.resetAll();
    jest.clearAllMocks();
  });

  it("should return a user by id", async () => {
    const _user = { ...user };
    delete _user.password;
    mockingoose(User).toReturn(user, "findOne");

    const _userRepository = new UserRepository({ User });
    const expected = await _userRepository.get(_user._id);

    expect(JSON.parse(JSON.stringify(expected))).toMatchObject(_user);
  });

  it("should find a user by username", async () => {
    const _user = { ...user };
    delete _user.password;
    mockingoose(User).toReturn(user, "findOne");

    const _userRepository = new UserRepository({ User });
    const expected = await _userRepository.getUserByUsername(_user._id);

    expect(JSON.parse(JSON.stringify(expected))).toMatchObject(_user);
  });

  it("should retunr a user collection", async () => {
    const _users = users.map((user) => {
      delete user.password;
      return user;
    });
    mockingoose(User).toReturn(users, "find");

    const _userRepository = new UserRepository({ User });
    const expected = await _userRepository.getAll(_users._id);

    expect(JSON.parse(JSON.stringify(expected))).toMatchObject(_users);
  });

  it("should update an especific user by id", async () => {
    const _user = { ...user };
    delete _user.password;
    mockingoose(User).toReturn(user, "findOneAndUpdate");

    const _userRepository = new UserRepository({ User });
    const expected = await _userRepository.update(_user._id);

    expect(JSON.parse(JSON.stringify(expected))).toMatchObject(_user);
  });

  it("should delete an especific user by id", async () => {
    const _user = { ...user };
    delete _user.password;
    mockingoose(User).toReturn(user, "findOneAndDelete");

    const _userRepository = new UserRepository({ User });
    const expected = await _userRepository.delete(_user._id);

    expect(JSON.parse(JSON.stringify(expected))).toEqual(true);
  });
});
