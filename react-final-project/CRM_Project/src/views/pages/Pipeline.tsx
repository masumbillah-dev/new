import ModulePage from "./ModulePage";
import { configs } from "./staticConfigs";

export default function Pipeline() {
  return <ModulePage config={{ ...configs.deals, title: "Sales Pipeline", singular: "Opportunity" }} />;
}
