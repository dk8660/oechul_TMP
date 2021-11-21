import User from "../models/User";
import bcrypt from "bcrypt";

export const createAccount = (req, res) => {
  res.render("createAccount", { title: "Create New Account!" });
};

export const createAccount_process = async (req, res) => {
  const { email, name, password, password2 } = req.body;
  if (password !== password2) {
    return res
      .status(400)
      .render("createAccount", { title: "The Password Doesn't Match!" });
  }
  const usernameExists = await User.exists({ email });
  if (usernameExists) {
    return res
      .status(400)
      .render("createAccount", { title: "Already Exsiting Email address!" });
  }
  await User.create({
    email,
    name,
    password,
  });
  return res.redirect("login");
};

export const login = (req, res) => {
  return res.render("login", { title: "LOG IN" });
};

export const login_process = async (req, res) => {
  const { email, password } = req.body;
  const user = User.findOne({ email });
  if (!user) {
    return res
      .status(400)
      .render("login", { title: "No Exists Email Address!" });
  }
  const check = await bcrypt.compare(password, user.password);
  if (!check) {
    return res.status(400).render("login", { title: "Wrong Password!" });
  }
  return res.redirect("/");
};
