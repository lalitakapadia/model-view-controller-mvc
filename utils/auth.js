const isAuth = (req, res, next) => {
    if (!req.session.loggedIn) {
      res.redirect('login');
    } else {
      next();
    }
  };
  
  module.exports = isAuth;


//   const isAuth = (req, res, next) => {
//     if (req.session.loggedIn) {
//         console.log("still logged in")
//         next();
//     } else {
//         res.redirect('/login');
//     }
//   };
  
//   module.exports = isAuth;