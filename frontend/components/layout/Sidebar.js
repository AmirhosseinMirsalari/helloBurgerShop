const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-header">
          <h3>My Sidebar</h3>
        </div>
        <div className="sidebar-body">
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="content-overlay"></div>
    </>
  );
};

export default Sidebar;
