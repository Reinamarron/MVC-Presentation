//http://yourapp.com/users/profile/1

//routes
//  users/profile/:id = User.getProfile(id)
  
// controllers
//    class Users {
//      function getProfile(id){
//        profile = this.UserModel.getProfile(id)
//        
//        renderView('users/profile', profile)
//     }
//  models
//     Class UserModel{
//       function getProfile(id){
//           data = this.db.get('SELECT * FROM users WHERE id = id')
 //          return data;
//     }
//  views
//      users
//        profile
//        <h1>{{profile.name}}</h1>
//        <ul>
//          <li>Email:{{profile.email}}</li>
//          <li>Phone:{{profile.phone}}</li>
//        </ul>
//     }

