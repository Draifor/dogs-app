import './button.css';

function ReloadButton() {
  return <button onClick={() => window.location.reload()}>Recargar</button>;
}

export default ReloadButton;
