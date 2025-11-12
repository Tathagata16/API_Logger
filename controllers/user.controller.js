export const getUsers = (req, res, next) => {
  try {
    const users = [
      { id: 1, name: "Tathagata" },
      { id: 2, name: "Rahul" },
    ];
    res.json(users);
  } catch (error) {
    next(error);
  }
};

export const getUserById = (req, res, next) => {
  try {
    const users = [
      { id: 1, name: "Tathagata" },
      { id: 2, name: "Rahul" },
    ];
    const user = users.find((u) => u.id === parseInt(req.params.id));
    if (!user) {
      res.status(404);
      throw new Error("User not found");
    }
    res.json(user);
  } catch (error) {
    next(error);
  }
};
