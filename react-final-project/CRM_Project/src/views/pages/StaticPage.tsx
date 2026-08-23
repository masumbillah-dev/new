import ModulePage from "./ModulePage";
import { configs } from "./staticConfigs";

type Props = { configKey: keyof typeof configs };

export default function StaticPage({ configKey }: Props) {
  return <ModulePage config={configs[configKey]} />;
}
