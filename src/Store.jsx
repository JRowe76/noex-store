import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Bodyweight Burner",
    duration: "4 Weeks",
    frequency: "2x / Week",
    price: 29,
    description: "A 10–20 min add-on for the end of any session. No equipment needed — just focused bodyweight work that builds real functional strength on top of what you're already doing.",
    badge: null,
    sessions: 8,
    squareLink: "https://square.link/u/ZJAxVUOc",
  },
  {
    id: 2,
    name: "Abs",
    duration: "6 Weeks",
    frequency: "4x / Week",
    price: 49,
    description: "A standalone 10–20 minute workout you can run any time — on top of your current program. Progressive core work that goes far beyond basic movements to build real, lasting strength.",
    badge: "Popular",
    sessions: 24,
    squareLink: "https://square.link/u/8IKulBpt",
  },
  {
    id: 3,
    name: "Arm Blast",
    duration: "4 Weeks",
    frequency: "3x / Week",
    price: 39,
    description: "A focused add-on for your upper body. 10–20 minutes at the end of your session targeting arms and shoulders with intention — minimal equipment, maximum focus.",
    badge: null,
    sessions: 12,
    squareLink: "https://square.link/u/hejlYxbR",
  },
  {
    id: 4,
    name: "Strength For Runners",
    duration: "8 Weeks",
    frequency: "2x / Week",
    price: 99,
    description: "A dedicated 10–20 minute strength session built exclusively for runners — added on top of your existing training. Keeps your body durable, balanced, and performing at its best.",
    upsell: { text: "Add a 3rd weekly session focused on explosive power — box jumps, bounding, reactive training — for stronger, faster legs.", price: 109, squareLink: "https://square.link/u/TMEdfQN4" },
    badge: "Best Value",
    sessions: 16,
    squareLink: "https://square.link/u/S02RRpbz",
  },
  {
    id: 5,
    name: "Stretching",
    duration: "8 Weeks",
    frequency: "5x / Week",
    price: 59,
    description: "10–20 minutes to start your morning or wind down your evening. A daily stretching practice that keeps your body loose, recovered, and ready — completely on its own or after any session.",
    badge: null,
    sessions: 40,
    squareLink: "https://square.link/u/hV6q8Xp2",
  },
];

export default function Store() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [addedId, setAddedId] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);
  const [selectedVariants, setSelectedVariants] = useState({});

  const cartCount = cart.reduce((s, i) => s + i.qty, 0);
  const cartTotal = cart.reduce((s, i) => s + i.price * i.qty, 0);

  function addToCart(product) {
    const variant = selectedVariants[product.id];
    const price = (product.upsell && variant === "upsell") ? product.upsell.price : product.price;
    const label = (product.upsell && variant === "upsell") ? "3x / Week" : product.frequency;
    const cartItem = { ...product, price, variantLabel: label };
    setCart((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) return prev.map((i) => i.id === product.id ? { ...cartItem, qty: i.qty + 1 } : i);
      return [...prev, { ...cartItem, qty: 1 }];
    });
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 900);
  }

  function removeFromCart(id) {
    setCart((prev) => prev.filter((i) => i.id !== id));
  }

  return (
    <div style={{ fontFamily: "'Barlow', sans-serif", background: "#ffffff", minHeight: "100vh", color: "#e8e8e8" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700&family=Barlow+Condensed:wght@500;600;700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }

        body { background: #ffffff; }

        .card {
          background: #f8f8f8;
          border: 1px solid #222;
          border-radius: 0;
          overflow: hidden;
          transition: border-color 0.25s ease, transform 0.25s ease;
          display: flex;
          flex-direction: column;
          position: relative;
        }
        .card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: #7a9e7e;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }
        .card:hover { border-color: #333; transform: translateY(-3px); }
        .card:hover::before { transform: scaleX(1); }

        .add-btn {
          width: 100%;
          padding: 16px;
          background: #7a9e7e;
          color: #fff;
          border: none;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          cursor: pointer;
          transition: background 0.2s ease;
          margin-top: auto;
        }
        .add-btn:hover { background: #5f856a; }
        .add-btn.added { background: #5f856a; }

        .cart-drawer {
          position: fixed; top: 0; right: 0; height: 100vh;
          width: 380px; background: #ffffff;
          border-left: 1px solid #222;
          transform: translateX(100%);
          transition: transform 0.4s cubic-bezier(.25,.8,.25,1);
          z-index: 200;
          display: flex; flex-direction: column;
        }
        .cart-drawer.open { transform: translateX(0); }

        .overlay {
          position: fixed; inset: 0; background: rgba(0,0,0,0.7);
          z-index: 150; opacity: 0; pointer-events: none;
          transition: opacity 0.3s;
        }
        .overlay.show { opacity: 1; pointer-events: all; }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 1px;
          background: #1a1a1a;
          border: 1px solid #1a1a1a;
        }

        .badge {
          display: inline-block;
          background: transparent;
          color: #7a9e7e;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          padding: 3px 0;
          margin-bottom: 10px;
          border-left: 2px solid #7a9e7e;
          padding-left: 8px;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .stat-label {
          font-size: 9px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #444;
          font-weight: 600;
        }
        .stat-value {
          font-size: 13px;
          font-weight: 600;
          color: #aaa;
          font-family: 'Barlow Condensed', sans-serif;
          letter-spacing: 0.5px;
        }

        .divider {
          width: 1px;
          background: #222;
          align-self: stretch;
        }

        .cart-item-divider {
          border: none;
          border-top: 1px solid #1e1e1e;
          margin: 0;
        }

        .checkout-btn {
          width: 100%;
          padding: 16px;
          background: #7a9e7e;
          color: #fff;
          border: none;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          cursor: pointer;
          border-radius: 0;
          transition: background 0.2s;
        }
        .checkout-btn:hover { background: #5f856a; }

        .cart-btn {
          background: none;
          border: 1px solid #2a2a2a;
          padding: 10px 22px;
          cursor: pointer;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #aaa;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: border-color 0.2s, color 0.2s;
        }
        .cart-btn:hover { border-color: #7a9e7e; color: #fff; }

        .jordans-tag {
          display: inline-block;
          border: 1px solid #7a9e7e;
          color: #7a9e7e;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 4px;
          text-transform: uppercase;
          padding: 4px 12px;
          margin-bottom: 24px;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .card { animation: fadeIn 0.4s ease both; }

        @media (max-width: 600px) {
          .cart-drawer { width: 100vw; }
          .grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* Header */}
      <header style={{ background: "#ffffff", borderBottom: "1px solid #1a1a1a", padding: "0 40px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64, position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABOYAAATmCAIAAAAKnjl9AABbTmNhQlgAAFtOanVtYgAAAB5qdW1kYzJwYQARABCAAACqADibcQNjMnBhAAAAWyhqdW1iAAAAR2p1bWRjMm1hABEAEIAAAKoAOJtxA3VybjpjMnBhOjA0NWQ3ZWEyLWM5NjgtNDMzNy05Yjc0LTJjNWQ5ODU1YmYxOAAAABHxanVtYgAAAClqdW1kYzJhcwARABCAAACqADibcQNjMnBhLmFzc2VydGlvbnMAAAAJ0Wp1bWIAAAA7anVtZEDLDDK7ikidpwsq1vR/Q2kTYzJwYS5pY29uAAAAABhjMnNo2s3Gwc20jOCPGkWTZfFL3wAAABdiZmRiAGltYWdlL3N2Zyt4bWwAAAAJd2JpZGI8c3ZnIHdpZHRoPSI3MTYiIGhlaWdodD0iNzE2IiB2aWV3Qm94PSIwIDAgNzE2IDcxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUwOC43NDkgMzE3LjM5OUM1MTYuNzc3IDI4Ny4zMTQgNTA4Ljk5MSAyNTMuODg0IDQ4NS4zODkgMjMwLjI4MkM0NjEuNzg4IDIwNi42ODEgNDI4LjM2IDE5OC44OTUgMzk4LjI3MyAyMDYuOTIzQzM3Ni4yMzEgMTg0LjkyOCAzNDMuMzkgMTc0Ljk1NiAzMTEuMTQ4IDE4My41OTZDMjc4LjkwNiAxOTIuMjM0IDI1NS40NSAyMTcuMjkyIDI0Ny4zNiAyNDcuMzYxQzIxNy4yOTEgMjU1LjQ1MSAxOTIuMjMzIDI3OC45MSAxODMuNTk1IDMxMS4xNDlDMTc0Ljk1NyAzNDMuMzkxIDE4NC45MjcgMzc2LjIzMiAyMDYuOTI0IDM5OC4yNzRDMTk4Ljg5NiA0MjguMzU5IDIwNi42ODMgNDYxLjc4OSAyMzAuMjg0IDQ4NS4zOTFDMjUzLjg4NSA1MDguOTkyIDI4Ny4zMTMgNTE2Ljc3OSAzMTcuNDAxIDUwOC43NUMzMzkuNDQyIDUzMC43NDUgMzcyLjI4NiA1NDAuNzE3IDQwNC41MjUgNTMyLjA3OUM0MzYuNzY3IDUyMy40NDEgNDYwLjIyMyA0OTguMzg0IDQ2OC4zMTMgNDY4LjMxNUM0OTguMzgzIDQ2MC4yMjQgNTIzLjQ0IDQzNi43NjYgNTMyLjA3OCA0MDQuNTI2QzU0MC43MTYgMzcyLjI4NSA1MzAuNzQ3IDMzOS40NDMgNTA4Ljc0OSAzMTcuNDAyVjMxNy4zOTlaTTQ3MC44OTkgMjQ0Ljc3NkM0ODYuODkyIDI2MC43NyA0OTMuNDg4IDI4Mi42MDEgNDkwLjY4NyAzMDMuNDEyTDQxNS41NzcgMjYwLjA0NkM0MTIuNDExIDI1OC4yMTggNDA4LjUwOSAyNTguMjE4IDQwNS4zNDUgMjYwLjA0NkwzMTcuNDAxIDMxMC44MlYyNzcuNTI2QzMxNy40MDEgMjc1LjE5MSAzMTguNjUyIDI3My4wMDUgMzIwLjY3NiAyNzEuODM3TDM4Ny42NDQgMjMzLjE3NEM0MTQuMTc4IDIxOC4zNTMgNDQ4LjM0NiAyMjIuMjIzIDQ3MC45MDEgMjQ0Ljc3Nkg0NzAuODk5Wk0zNTcuODM3IDMxMS4xNDRMMzk4LjI3NSAzMzQuNDkxVjM4MS4xODVMMzU3LjgzNyA0MDQuNTMyTDMxNy4zOTggMzgxLjE4NVYzMzQuNDkxTDM1Ny44MzcgMzExLjE0NFpNMjY0Ljc3NiAyNjkuNjkzQzI2NS4yMDcgMjM5LjMwNSAyODUuNjQ0IDIxMS42NDkgMzE2LjQ1MyAyMDMuMzkzQzMzOC4zIDE5Ny41NCAzNjAuNTA1IDIwMi43NDQgMzc3LjEyNyAyMTUuNTczTDMwMi4wMTQgMjU4LjkzN0MyOTguODQ4IDI2MC43NjQgMjk2Ljg5OCAyNjQuMTQ0IDI5Ni44OTggMjY3Ljc5OFYzNjkuMzQ2TDI2OC4wNjUgMzUyLjY5OUMyNjYuMDQzIDM1MS41MzEgMjY0Ljc3NiAzNDkuMzUzIDI2NC43NzYgMzQ3LjAxN1YyNjkuNjkxVjI2OS42OTNaTTIwMy4zOTEgMzE2LjQ1NEMyMDkuMjQ0IDI5NC42MDggMjI0Ljg1NCAyNzcuOTc4IDI0NC4yNzYgMjY5Ljk5OVYzNTYuNzNDMjQ0LjI3NiAzNjAuMzg0IDI0Ni4yMjYgMzYzLjc2MyAyNDkuMzkyIDM2NS41OTFMMzM3LjMzNyA0MTYuMzY1TDMwOC41MDMgNDMzLjAxM0MzMDYuNDgxIDQzNC4xODEgMzAzLjk2MSA0MzQuMTg4IDMwMS45MzkgNDMzLjAyTDIzNC45NzEgMzk0LjM1N0MyMDguODY4IDM3OC43ODkgMTk1LjEzOCAzNDcuMjYxIDIwMy4zOTEgMzE2LjQ1NFpNMjQ0Ljc3NSA0NzAuOUMyMjguNzgxIDQ1NC45MDYgMjIyLjE4NiA0MzMuMDc1IDIyNC45ODYgNDEyLjI2NEwzMDAuMDk2IDQ1NS42M0MzMDMuMjYzIDQ1Ny40NTcgMzA3LjE2NCA0NTcuNDU3IDMxMC4zMjggNDU1LjYzTDM5OC4yNzMgNDA0Ljg1NlY0MzguMTQ5QzM5OC4yNzMgNDQwLjQ4NSAzOTcuMDIyIDQ0Mi42NzEgMzk0Ljk5NyA0NDMuODM5TDMyOC4wMjkgNDgyLjUwMkMzMDEuNDk1IDQ5Ny4zMjIgMjY3LjMyNyA0OTMuNDUyIDI0NC43NzIgNDcwLjlIMjQ0Ljc3NVpNNDUwLjg5NyA0NDUuOTgyQzQ1MC40NjYgNDc2LjM3MSA0MzAuMDI5IDUwNC4wMjcgMzk5LjIyIDUxMi4yODNDMzc3LjM3MyA1MTguMTM2IDM1NS4xNjggNTEyLjkzMiAzMzguNTQ3IDUwMC4xMDJMNDEzLjY1OSA0NTYuNzM4QzQxNi44MjYgNDU0LjkxMSA0MTguNzc1IDQ1MS41MzIgNDE4Ljc3NSA0NDcuODc3VjM0Ni4zMjlMNDQ3LjYwOSAzNjIuOTc3QzQ0OS42MzEgMzY0LjE0NSA0NTAuODk3IDM2Ni4zMjMgNDUwLjg5NyAzNjguNjU5VjQ0NS45ODVWNDQ1Ljk4MlpNNTEyLjI4MiAzOTkuMjIxQzUwNi40MjkgNDIxLjA2OCA0OTAuODE5IDQzNy42OTcgNDcxLjM5NyA0NDUuNjc2VjM1OC45NDZDNDcxLjM5NyAzNTUuMjkyIDQ2OS40NDggMzUxLjkxMiA0NjYuMjgxIDM1MC4wODVMMzc4LjMzNiAyOTkuMzExTDQwNy4xNyAyODIuNjYzQzQwOS4xOTIgMjgxLjQ5NSA0MTEuNzEyIDI4MS40ODcgNDEzLjczNCAyODIuNjU1TDQ4MC43MDIgMzIxLjMxOEM1MDYuODA1IDMzNi44ODcgNTIwLjUzNiAzNjguNDE1IDUxMi4yODIgMzk5LjIyMVoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgoAAAFBanVtYgAAAEFqdW1kY2JvcgARABCAAACqADibcRNjMnBhLmFjdGlvbnMudjIAAAAAGGMyc2jrGwoNeJYiTtqIk78dBTCOAAAA+GNib3KhZ2FjdGlvbnOCpGZhY3Rpb25sYzJwYS5jcmVhdGVkZHdoZW7AdDIwMjYtMDUtMTJUMDA6MDA6MDBabXNvZnR3YXJlQWdlbnSiZG5hbWVpZ3B0LWltYWdlZ3ZlcnNpb25jMi4wcWRpZ2l0YWxTb3VyY2VUeXBleEZodHRwOi8vY3YuaXB0Yy5vcmcvbmV3c2NvZGVzL2RpZ2l0YWxzb3VyY2V0eXBlL3RyYWluZWRBbGdvcml0aG1pY01lZGlhomZhY3Rpb25uYzJwYS5jb252ZXJ0ZWRkd2hlbsB0MjAyNi0wNS0xMlQwMDowMDowMFoAAAXranVtYgAAAElqdW1kY2JvcgARABCAAACqADibcRNjMnBhLmNlcnRpZmljYXRlLXN0YXR1cwAAAAAYYzJzaBDvnUDZMoxE9R+001+vu8sAAAWaY2JvcqFob2NzcFZhbHOBeQWE" 
            alt="Jordan's Logo" 
            style={{ height: 36, width: 36, objectFit: "contain" }} 
          />
          <div>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 20, fontWeight: 800, letterSpacing: 3, textTransform: "uppercase", color: "#111", lineHeight: 1 }}>Jordan's</div>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: 3, textTransform: "uppercase", color: "#888", marginTop: 2 }}>Training Programs</div>
          </div>
        </div>
        <button className="cart-btn" onClick={() => setCartOpen(true)}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/>
          </svg>
          Cart {cartCount > 0 && <span style={{ background: "#7a9e7e", color: "#fff", borderRadius: "50%", width: 18, height: 18, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700 }}>{cartCount}</span>}
        </button>
      </header>

      {/* Hero */}
      <section style={{ padding: "72px 40px 56px", maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
        <div className="jordans-tag">Jordan's Training Programs</div>
        <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(42px, 7vw, 72px)", fontWeight: 800, letterSpacing: 2, textTransform: "uppercase", color: "#111", lineHeight: 0.95, marginBottom: 24 }}>
          NOEX<br />Additions<br />
          <span style={{ color: "#7a9e7e" }}>Built For Results</span>
        </h1>
        <p style={{ fontSize: 16, color: "#555", maxWidth: 520, margin: "0 auto", lineHeight: 1.7, fontWeight: 400 }}>
          Short, focused sessions designed to stack on top of what you're already doing — 10 to 20 minutes, maximum impact.
        </p>
      </section>

      {/* Grid */}
      <main style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px 80px" }}>
        <div className="grid">
          {products.map((p, i) => (
            <div key={p.id} className="card" style={{ animationDelay: `${i * 0.07}s` }}>
              <div style={{ padding: "28px 28px 20px", flex: 1, display: "flex", flexDirection: "column" }}>
                {p.badge && <span className="badge">{p.badge}</span>}
                <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 26, fontWeight: 800, letterSpacing: 1, textTransform: "uppercase", color: "#111", marginBottom: 12, lineHeight: 1 }}>{p.name}</h2>
                <p style={{ fontSize: 13, color: "#555", lineHeight: 1.65, marginBottom: 20, fontWeight: 400 }}>{p.description}</p>

                {/* Stats */}
                <div style={{ display: "flex", gap: 0, marginBottom: 20 }}>
                  <div className="stat-item" style={{ flex: 1 }}>
                    <span className="stat-label">Duration</span>
                    <span className="stat-value">{p.duration}</span>
                  </div>
                  <div className="divider" />
                  <div className="stat-item" style={{ flex: 1, paddingLeft: 16 }}>
                    <span className="stat-label">Frequency</span>
                    <span className="stat-value">{p.frequency}</span>
                  </div>
                  <div className="divider" />
                  <div className="stat-item" style={{ flex: 1, paddingLeft: 16 }}>
                    <span className="stat-label">Sessions</span>
                    <span className="stat-value">{p.sessions} total</span>
                  </div>
                </div>

                {/* Upsell */}
                {p.upsell && (
                  <div style={{ marginBottom: 20 }}>
                    <div style={{ fontSize: 9, letterSpacing: 2, textTransform: "uppercase", color: "#444", fontWeight: 600, marginBottom: 8 }}>Choose Your Plan</div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                      {[
                        { key: "base", label: `2x / Week — $${p.price}` },
                        { key: "upsell", label: `3x / Week — $${p.upsell.price}` },
                      ].map(opt => (
                        <label key={opt.key} style={{ display: "flex", alignItems: "flex-start", gap: 8, cursor: "pointer", padding: "8px 10px", border: `1px solid ${selectedVariants[p.id] === opt.key || (!selectedVariants[p.id] && opt.key === "base") ? "#7a9e7e" : "#222"}`, background: selectedVariants[p.id] === opt.key || (!selectedVariants[p.id] && opt.key === "base") ? "rgba(122,158,126,0.06)" : "transparent", transition: "all 0.2s" }}>
                          <input type="radio" name={`variant-${p.id}`} value={opt.key} checked={selectedVariants[p.id] === opt.key || (!selectedVariants[p.id] && opt.key === "base")} onChange={() => setSelectedVariants(v => ({ ...v, [p.id]: opt.key }))} style={{ accentColor: "#7a9e7e", marginTop: 2 }} />
                          <span style={{ fontSize: 12, color: "#333", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, letterSpacing: 1 }}>{opt.label}</span>
                        </label>
                      ))}
                    </div>
                    {(selectedVariants[p.id] === "upsell") && (
                      <p style={{ fontSize: 11, color: "#666", marginTop: 8, lineHeight: 1.5 }}>{p.upsell.text}</p>
                    )}
                  </div>
                )}

                {/* Price */}
                <div style={{ marginBottom: 20, marginTop: "auto" }}>
                  <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 32, fontWeight: 800, color: "#111", letterSpacing: 1 }}>
                    ${p.upsell && selectedVariants[p.id] === "upsell" ? p.upsell.price : p.price}
                  </span>
                  <span style={{ fontSize: 12, color: "#888", marginLeft: 6 }}>one-time</span>
                </div>
              </div>

              <button className={`add-btn${addedId === p.id ? " added" : ""}`} onClick={() => addToCart(p)}>
                {addedId === p.id ? "✓ Added" : "Add to Cart"}
              </button>
            </div>
          ))}
        </div>
      </main>

      {/* Overlay */}
      <div className={`overlay${cartOpen ? " show" : ""}`} onClick={() => setCartOpen(false)} />

      {/* Cart Drawer */}
      <div className={`cart-drawer${cartOpen ? " open" : ""}`}>
        <div style={{ padding: "24px 24px 16px", borderBottom: "1px solid #1a1a1a", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 16, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", color: "#111" }}>Your Cart</span>
          <button onClick={() => setCartOpen(false)} style={{ background: "none", border: "none", cursor: "pointer", color: "#555", fontSize: 20, lineHeight: 1 }}>×</button>
        </div>

        <div style={{ flex: 1, overflowY: "auto" }}>
          {cart.length === 0 ? (
            <div style={{ padding: 40, textAlign: "center", color: "#555", fontSize: 13 }}>Your cart is empty.</div>
          ) : (
            cart.map((item, idx) => (
              <div key={item.id}>
                {idx > 0 && <hr className="cart-item-divider" />}
                <div style={{ padding: "16px 24px", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 15, fontWeight: 700, letterSpacing: 1, color: "#111", textTransform: "uppercase" }}>{item.name}</div>
                    <div style={{ fontSize: 11, color: "#888", marginTop: 3 }}>{item.variantLabel} · {item.duration}</div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 16, fontWeight: 700, color: "#111" }}>${item.price}</span>
                    <button onClick={() => removeFromCart(item.id)} style={{ background: "none", border: "none", cursor: "pointer", color: "#888", fontSize: 16, lineHeight: 1 }}>×</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div style={{ borderTop: "1px solid #1a1a1a", padding: "16px 24px 24px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
              <span style={{ fontSize: 12, color: "#555", letterSpacing: 1, textTransform: "uppercase" }}>Total</span>
              <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 22, fontWeight: 800, color: "#111" }}>${cartTotal}</span>
            </div>
            {cart.length === 1 ? (
              <a href={cart[0].squareLink} target="_blank" rel="noopener noreferrer" style={{ display: "block", textDecoration: "none" }}>
                <button className="checkout-btn">Checkout</button>
              </a>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <div style={{ fontSize: 11, color: "#888", textAlign: "center", marginBottom: 4 }}>Complete each purchase separately:</div>
                {cart.map(item => (
                  <a key={item.id} href={item.squareLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                    <button className="checkout-btn" style={{ fontSize: 11, padding: "12px" }}>
                      Buy {item.name} — ${item.price}
                    </button>
                  </a>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
