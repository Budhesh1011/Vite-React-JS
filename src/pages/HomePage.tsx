import { Badge } from "@mantine/core";
import Loader from "../components/common/Loader";

const HomePage = () => {
  return (
    <Loader>
      <Badge color="green" variant="light">
        Home Page
      </Badge>
    </Loader>
  );
};

export default HomePage;
