import User from "../model/userModel.js";

class userController {
    static register = async (req, res) => {
        try {
            const postData = req.body;
            const randomString = Math.floor(100000 + Math.random() * 900000);
            var userData = await User.create({
                name: postData.name,
                email: postData.email,
                phoneNumber: req.body.phoneNumber,
                age: postData.age,
                profileImg: postData.profileImg,
                otp: randomString
            });
            res.send({ code: "200", msg: "User Registration successfully", data: userData });
        } catch (error) {
            res.send({ code: "500", error: error });
        };
    }
}

export default userController;