interface NavBarProps {
  onSignOut: () => void;
}

function NavBar({ onSignOut }: NavBarProps) {
  return (
    <nav className='nav-bar'>
      <span className='nav-brand'>Product Store</span>
      <button className='nav-sign-out' type='button' onClick={onSignOut}>
        Sign out
      </button>
    </nav>
  );
}

export default NavBar;
