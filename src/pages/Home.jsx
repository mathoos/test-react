import { Outlet, NavLink } from 'react-router-dom'

function DashboardLayout() {
  return (
    <div>
      <nav>
        <NavLink to="profile">Profil</NavLink>
        <NavLink to="articles">Articles</NavLink>
      </nav>
      <hr />
      <Outlet /> {/* Affiche la sous-route ici */}
    </div>
  )
}

export default DashboardLayout