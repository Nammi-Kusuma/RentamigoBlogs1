import { useNavigate } from "react-router-dom"

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      HomePage
      <br />
      <button onClick={() => navigate('/blog/2')}>Go to blogs page</button>
    </div>
  )
}

export default HomePage