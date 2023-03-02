const Login = () => {
    return (
        <div className="form_container">
            <form>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">شماره موبایل</label>
                    <input type="email" className="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" />
                </div>
                <button type="submit" className="btn btn-primary btn-auth">ورود</button>
            </form>
        </div>
    )
}

export default Login;