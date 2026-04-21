const User=require("../models/user");

//render signup form
module.exports.renderSignUpForm=(req,res)=>{
    res.render("users/signup.ejs");
};

//signUp
module.exports.signUp=async(req,res,next)=>{
    try{
        let {username,email,password}=req.body;
        const newUser=new User({email,username});
        const registerdUser=await User.register(newUser,password);
        req.login(registerdUser,(err)=>{
            if(err){
                return next(err);
            }
            req.flash("success","welcom to Wanderlust!");
             res.redirect("/listings");
        });

        }catch(e){
            req.flash("error",e.message);
            res.redirect("/signup");
        }
};

//render login form
module.exports.renderLoginForm=(req,res)=>{
    res.render("users/login.ejs");
}
module.exports.login = async (req, res) => {
  req.flash("success", "Welcome back to Wanderlust!");
  let redirectUrl = res.locals.redirectUrl;
  if (!redirectUrl || redirectUrl === "/login" || redirectUrl === "/signup") {
    redirectUrl = "/listings";
  }
  res.redirect(redirectUrl);
};

//logout
module.exports.logout=(req,res,next)=>{
    req.logout((err)=>{
        if(err){
            return next(err);
        }
        req.flash("success"," you are logged out!");
        res.redirect("/listings");
    });
};