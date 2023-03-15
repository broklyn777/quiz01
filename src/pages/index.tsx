// pages/index.tsx
import { Quiz } from "../components/Quiz";

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Frågesport</h1>
      <Quiz />
    </div>
  );
};

export default HomePage;
