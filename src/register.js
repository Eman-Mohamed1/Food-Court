import { Link } from "react-router-dom";
const Register = () => {



    return(
      <div className="login-page">
      <div className="form">
        <form className="register-form">
          <input type="text" placeholder="name"/>
          <input type="password" placeholder="password"/>
          <input type="text" placeholder="email address"/>
          <button>create</button>
          <p className="message">Already registered? <Link to = "/Login"> Login</Link></p>
        </form>
        
      </div>
    </div>
    )
    
    
    
    }
    export default  Register ;