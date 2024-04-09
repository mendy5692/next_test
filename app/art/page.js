import axios from "axios";
import Grid from "../../utils/grid/grid";

export default async function ArtPage() {
  const result = await axios.get(
    "https://express-project-ou7o.onrender.com/art"
  );
  return (
    <div>sss
      <Grid grid_items_list={result.data} />
    </div>
  );
}
