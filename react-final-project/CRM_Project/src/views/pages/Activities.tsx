import ModulePage from "./ModulePage";
import { configs } from "./staticConfigs";

export default function Activities() {
  const config = {
    ...configs.tasks,
    title: "Activities",
    singular: "Activity",
    idPrefix: "AC",
    columns: [
      { key: "type", label: "Type" },
      { key: "subject", label: "Subject" },
      { key: "relatedTo", label: "Related To" },
      { key: "dueDate", label: "Due Date" },
      { key: "status", label: "Status" },
    ],
    statuses: ["Pending", "Completed", "Cancelled"],
    initialRows: [
      { id: 1, type: "Call", subject: "Follow-up about website project", relatedTo: "Rahim Technologies", dueDate: "2026-08-24", status: "Pending" },
      { id: 2, type: "Meeting", subject: "CRM project discussion", relatedTo: "ABC Limited", dueDate: "2026-08-26", status: "Pending" },
      { id: 3, type: "Email", subject: "Send project proposal", relatedTo: "XYZ Corporation", dueDate: "2026-08-22", status: "Completed" },
      { id: 4, type: "Task", subject: "Prepare quotation", relatedTo: "ABC Limited", dueDate: "2026-08-28", status: "Pending" },
    ],
  };
  return <ModulePage config={config} />;
}
