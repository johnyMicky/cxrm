export default function LoginPage() {
  return (
    <main className="page">
      <div className="card">
        <h1>Login</h1>
        <input className="input" type="email" placeholder="Email" />
        <input className="input" type="password" placeholder="Password" />
        <div>
          <button className="btn" type="button">
            Sign In
          </button>
        </div>
      </div>
    </main>
  );
}
