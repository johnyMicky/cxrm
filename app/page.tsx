import Link from "next/link";

export default function HomePage() {
  return (
    <main className="page">
      <div className="card">
        <h1>cxrm</h1>
        <p>Private CRM starter.</p>

        <div>
          <Link className="btn" href="/dashboard">
            Dashboard
          </Link>
          <Link className="btn" href="/login">
            Login
          </Link>
          <Link className="btn" href="/leads">
            Leads
          </Link>
        </div>
      </div>
    </main>
  );
}
