import { PetBehavior, User } from "../models/associations";

class UserService {
  public static async getAllUsers(): Promise<User[]> {
    try {
      const users = await User.findAll();
      return users;
    } catch (error) {
      console.error("Error fetching Users:", error);
      throw error;
    }
  }

  public static async createUser(
    username: string,
    email: string,
    password: string,
    preferences: string[]
  ): Promise<string> {
    try {
      console.log("Creating user with username:", username);
      const newUser = await User.create(
        {
          username: username,
          email: email,
          password: password,
          preferences: preferences.map((behavior) => ({ behavior })),
        },
        {
          include: [{ model: PetBehavior, as: "preferences" }],
        }
      );
      console.log("User created:", email);
      console.log("Preferences added to user:", email, preferences);
      return newUser.generateToken();
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    }
  }
}

export default UserService;
