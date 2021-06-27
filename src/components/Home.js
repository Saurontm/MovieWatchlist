import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import "../buttonStyles.css";

function HomePage() {
  return (
    <div>
      <AwesomeButton type="primary">Button</AwesomeButton>
      <AwesomeButton type="secondary">Button</AwesomeButton>
    </div>
  );
}
export default HomePage;
