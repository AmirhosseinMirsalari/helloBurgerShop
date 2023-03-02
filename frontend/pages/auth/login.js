import Login from "@/components/auth/Login";

const LoginPage = () => {
    return (
        <section className="auth_section book_section">
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-4 offset-md-4">
                        <div className="card">
                            <div className="card-body">
                                <Login />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LoginPage;