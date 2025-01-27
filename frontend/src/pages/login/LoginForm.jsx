// import styles from './LoginForm.module.css'
export default function LoginForm() {

        return (
            <div className="login-container">
                <h2 className="form-title">Login with Microsoft Account</h2>
                <div className="microsoft-login">
                    <button className="microsoft-button">
                        <img src="C:\Users\ChristianAcosta\Pictures\Microsoft_Logo_256px.png" className="microsoft-icon"/>
                        {/* add source for Microsoft button */}
                    </button>
                </div>

                <p className="separator"><span>or</span></p>

                <form action="#" className="login-form">
                    <div className="input-wrapper">
                        <input type="email" placeholder="Email Address" className="input-field" required/>
                        {/* Idk what i means */}
                        <i className="material-symbols-outlined">mail</i>
                    </div>

                    <div className="input-wrapper">
                        <input type="password" placeholder="Password" className="input-field" required/>
                        {/* Idk what i means */}
                        <i className="material-symbols-outlined">lock</i>
                    </div>
                    <a href="#" className="forgot-pass-link">Forgot Password?</a>

                    <button className="login-button">Log In</button>
                </form>
            </div>
        )
}