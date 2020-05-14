export const join = (req, res) => res.render("Join");
export const login = (req, res) => res.render("Login");
export const logout = (req, res) => res.render("Logout");
export const userDetail = (req, res) =>
  res.render("userDetail", { pateTitle: "User Detail" });
export const editProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "Edit Profile" });
export const changePassword = (req, res) => res.render("Change Password");
