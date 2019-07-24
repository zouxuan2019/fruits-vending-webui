const loginHtml = `

<body>
<link rel="stylesheet" href="./login/login-style.css">

<div class="imgcontainer">
    <img src="./img/logo.png" alt="fruits vending" class="fvimg"/>
  </div>

  <div class="container">
    <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" required>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required>

    <button type="submit">Login</button>
    <label>
      <input type="checkbox" checked="checked" name="remember"> Remember me
    </label>
  <button type="button" class="signup">Sign up</button>
 
  </div>

  <div class="container" style="background-color:#f1f1f1">
    <button type="button" class="cancelbtn">Cancel</button>
    <span class="psw">Forgot <a href="#">password?</a></span>
  </div>
  </body>
`

class Login extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = loginHtml;
        this.$signup = this.shadowRoot.querySelector(".signup");
        this.$signup.addEventListener('click', (e) => {
            window.open("./signup/signup.html");
        });
    }

}

customElements.define('fv-login', Login);