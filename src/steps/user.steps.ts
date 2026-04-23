import { Then } from "@cucumber/cucumber";
import { UserService } from "../api/services/UserService";
import { expectField } from "../utils/validator";
import { User } from "../types/user.types";

Then("I validate user details", async () => {
  const user = await UserService.getUser(1);
  if (user !== null) expectField(user, "id", 1);
});
