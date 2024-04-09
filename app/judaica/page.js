import axios from "axios";
import Grid from "../../utils/grid/grid";

export default async function JudaicaPage() {
  const result = await axios.get(
    "https://express-project-ou7o.onrender.com/judaica"
  );
  return (
    <div>
      <Grid grid_items_list={result.data} />
    </div>
  );
}
