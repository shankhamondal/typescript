let user = {
  Name: "Dr. Stephen Strange",
  Role: "Editor",
};
if (user.Role === "Admin" || user.Role === "Editor" || user.Role === "User") {
  if (user.Role === "Admin") {
    console.log(`Hello ${user.Name}! You have full access of the Aplication.`);
  }
  if (user.Role === "Editor") {
    console.log(
      `Hello ${user.Name}! You have edit & view only access of the Aplication.`,
    );
  }
  if (user.Role === "User") {
    console.log(
      `Hello ${user.Name}! You have edit & view only access of the Application.`,
    );
  }
} else {
  console.log(
    `Hello ${user.Name}! You don't have any access of the Application.`,
  );
}
