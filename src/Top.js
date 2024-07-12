export function Top() {
  const handleSignUpClick = () => {
    const bottomElement = document.getElementById('bp');
    
    if (bottomElement) {
      bottomElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="topdiv">
      <b>Landing-Page</b>
      <button onClick={handleSignUpClick} className="topbut">Sign Up</button>
    </div>
  );
}
