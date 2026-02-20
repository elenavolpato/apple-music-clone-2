import { useState } from "react"

type NavItem = {
  id: string
  label: string
  icon: string
}

const navItems: NavItem[] = [
  { id: "home", label: "Home", icon: "bi-house" },
  { id: "novita", label: "Novità", icon: "bi-grid" },
  { id: "radio", label: "Radio", icon: "bi-broadcast" },
]

const Sidebar = () => {
  const [active, setActive] = useState<string>("novita")
  const [search, setSearch] = useState<string>("")

  return (
    <aside
      className="d-none d-md-flex flex-column vh-100 flex-shrink-0"
      style={{
        width: "224px",
        background: "#1c1c1e",
        borderRight: "1px solid #2c2c2e",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* Logo */}
      <div style={{ padding: "20px 16px 16px" }}>
        <img
          src="src/assets/logos/Apple_Music_logo.svg"
          alt="apple logo"
          className="white-logo"
        />
      </div>

      {/* Search */}
      <div style={{ padding: "0 12px 12px" }}>
        <div
          className="d-flex align-items-center gap-2"
          style={{
            background: "#2c2c2e",
            borderRadius: "8px",
            padding: "6px 10px",
          }}
        >
          <i
            className="bi bi-search"
            style={{ color: "#8e8e93", fontSize: "13px" }}
          />
          <input
            type="text"
            placeholder="Cerca"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              background: "transparent",
              border: "none",
              outline: "none",
              color: "#e5e5ea",
              caretColor: "#FC3C44",
              fontSize: "14px",
              width: "100%",
            }}
          />
        </div>
      </div>

      {/* Nav Items */}
      <nav
        className="d-flex flex-column"
        style={{ gap: "2px", padding: "0 8px" }}
      >
        {navItems.map((item) => {
          const isActive = active === item.id
          return (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className="d-flex align-items-center gap-3"
              style={{
                background: isActive ? "#3a3a3c" : "transparent",
                border: "none",
                borderRadius: "8px",
                padding: "8px 12px",
                color: isActive ? "#fff" : "rgba(235,235,245,0.8)",
                fontWeight: isActive ? 500 : 400,
                fontSize: "14px",
                cursor: "pointer",
                textAlign: "left",
                width: "100%",
              }}
            >
              <i
                className={`bi ${item.icon}`}
                style={{ color: "#FC3C44", fontSize: "16px", width: "18px" }}
              />
              {item.label}
            </button>
          )
        })}
      </nav>
    </aside>
  )
}

export default Sidebar
