const express = require("express");

const conectDB = require("./config/database");

// const User = require("./models/user");

// const { validateSignUpData } = require("./util/validation");

// const bcrypt = require("bcrypt");

const cookieParser = require("cookie-parser");

// const jwt = require("jsonwebtoken");

const app = express();

// const { userAuth } = require("../src/middlewares/auth");

app.use(express.json());

app.use(cookieParser());

const authRouter = require("./routes/auth");
const profileRouter = require("./routes/profile");
const requestRouter = require("./routes/request");
const userRouter = require("./routes/user");

app.use("/", authRouter);
app.use("/", profileRouter);
app.use("/", requestRouter);
app.use("/", userRouter);

// app.post("/signup", async (req, res) => {
//   console.log(req.body);

//   try {
//     // Validation of data
//     validateSignUpData(req);
//     const { firstName, lastName, emailId, password } = req.body;
//     // Encrypt the password
//     const passwordHash = await bcrypt.hash(password, 10);

//     // Creating a new instance of the user model
//     const user = new User({
//       firstName,
//       lastName,
//       emailId,
//       password: passwordHash,
//     });
//     await user.save();
//     res.send("User added successfully..!");
//   } catch (err) {
//     res.status(400).send("ERROR : " + err.message);
//   }
// });

// app.post("/login", async (req, res) => {
//   try {
//     const { emailId, password } = req.body;
//     const user = await User.findOne({ emailId: emailId });
//     if (!user) {
//       throw new Error("EmailID is not present in DB");
//     }
//     // const isPasswordValid = await bcrypt.compare(password, user.password);
//     const isPasswordValid = await user.validatePassword(password, user.password);
//     if (isPasswordValid) {
//       // const token = await jwt.sign({ _id: user._id }, "DEV@Tinder$790", {
//       //   expiresIn: "1d",
//       // });
//       const token = await user.getJWT();
//       res.cookie("token", token, {
//         expires: new Date(Date.now() + 8 * 3600000), // cookie will be removed after 8 hours
//       });
//       res.send("Login Successfull!!!");
//     } else {
//       throw new Error("password is not correct");
//     }
//   } catch (err) {
//     res.status(400).send("ERROR : " + err.message);
//   }
// });

// // GET user by email
// app.get("/user", async (req, res) => {
//   const userEmail = req.body.emailId;
//   try {
//     const user = await User.findOne({ emailId: userEmail });
//     // const user = await User.find({ emailId: userEmail });
//     // if (user.length == 0) {
//     //   res.status(404).send("user not found");
//     // } else {
//     //   res.send(user);
//     // }
//     if (!user) {
//       res.status(404).send("user not found");
//     } else {
//       res.send(user);
//     }
//   } catch (err) {
//     res.status(400).send("Something went wrong ");
//   }
// });

// // Feed Api - GET / feed - get all the users from the database
// app.get("/feed", async (req, res) => {
//   try {
//     const users = await User.find({});
//     res.send(users);
//   } catch (err) {
//     res.status(400).send("Something went wrong ");
//   }
// });

// app.delete("/user", async (req, res) => {
//   const userId = req.body.userId;
//   try {
//     const users = await User.findByIdAndDelete(userId);
//     res.send("Users deleted sucessfully");
//   } catch (err) {
//     res.status(400).send("Something went wrong ");
//   }
// });

// app.patch("/user/:userId", async (req, res) => {
//   const userId = req.params?.userId;
//   const data = req.body;
//   try {
//     const ALLOWED_UPDATES = ["photoUrl", "about", "gender", "age", "skills"];
//     const isUpdatedAllowed = Object.keys(data).every((k) => {
//       ALLOWED_UPDATES.includes(k);
//     });
//     if (!isUpdatedAllowed) {
//       throw new Error("update not allowed");
//     }
//     if (data?.skills.length > 10) {
//       throw new Error("skills cannot be more then 10");
//     }
//     await User.findByIdAndUpdate({ _id: userId }, data, {
//       runValidators: true,
//     });
//     res.send("Data updated successfully");
//   } catch {
//     res.status(400).send("update failed:" + err.message);
//   }
// });

// app.get("/profile", userAuth, async (req, res) => {
//   try {
//     const user = req.user;

//     res.send(user);
//   } catch (err) {
//     res.status(400).send("ERROR : " + err.message);
//   }
// });

conectDB()
  .then(() => {
    console.log("Database connection established...");
    app.listen(3000, () => {
      console.log("Server is successfully listening on port 3000...");
    });
  })
  .catch((err) => {
    console.error("Database cannot be connected!!");
  });
