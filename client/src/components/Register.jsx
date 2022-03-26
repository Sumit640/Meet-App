import "../index.css"

function Register(){
    return (
        <div class="login-form">
            <form action="login.html" method="get">
                <h1>Register</h1>
                <div class="content">
                    <div class="input-field">
                        <input type="text" placeholder="First Name" autocomplete="nope"/>
                    </div>
                    <div class="input-field">
                        <input type="text" placeholder="Last Name" autocomplete="nope"/>
                    </div>
                    <div class="input-field">
                        <input type="text" placeholder="Mobile No." autocomplete="nope"/>
                    </div>
                    <div class="input-field">
                        <input type="email" placeholder="Email" autocomplete="nope"/>
                    </div>
                    <div class="input-field">
                        <input type="password" placeholder="Password" autocomplete="new-password"/>
                    </div>
                </div>
                <div class="action">
                    <button onClick={()=>{alert("Successfully Registered!!!");}}>Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Register;