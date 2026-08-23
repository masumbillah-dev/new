import type { ModuleConfig } from "./ModulePage";

export const configs: Record<string, ModuleConfig> = {
  contacts: {
    title: "Contacts", singular: "Contact", idPrefix: "CT", icon: "mdi-account-multiple", statusKey: "status", statuses: ["Active", "Inactive"],
    columns: [
      { key: "name", label: "Name" }, { key: "company", label: "Company" }, { key: "jobTitle", label: "Job Title" }, { key: "phone", label: "Phone" }, { key: "email", label: "Email" }, { key: "status", label: "Status" }
    ],
    initialRows: [
      { id: 1, name: "Rahim Ahmed", company: "Rahim Technologies", jobTitle: "Managing Director", phone: "01712345678", email: "rahim@gmail.com", status: "Active" },
      { id: 2, name: "Sarah Khan", company: "XYZ Corporation", jobTitle: "Marketing Manager", phone: "01800000000", email: "sarah@example.com", status: "Active" },
      { id: 3, name: "John Smith", company: "ABC Limited", jobTitle: "Project Manager", phone: "01700000000", email: "john@example.com", status: "Inactive" },
    ],
  },
  companies: {
    title: "Companies", singular: "Company", idPrefix: "CO", icon: "mdi-domain", statusKey: "status", statuses: ["Active", "Inactive"],
    columns: [
      { key: "name", label: "Company" }, { key: "industry", label: "Industry" }, { key: "contactPerson", label: "Contact Person" }, { key: "phone", label: "Phone" }, { key: "email", label: "Email" }, { key: "status", label: "Status" }
    ],
    initialRows: [
      { id: 1, name: "Rahim Technologies", industry: "Technology", contactPerson: "Rahim Ahmed", phone: "01712345678", email: "info@rahimtech.com", status: "Active" },
      { id: 2, name: "ABC Limited", industry: "Software", contactPerson: "John Smith", phone: "01700000000", email: "info@abclimited.com", status: "Active" },
      { id: 3, name: "XYZ Corporation", industry: "Marketing", contactPerson: "Sarah Khan", phone: "01800000000", email: "info@xyzcorp.com", status: "Inactive" },
    ],
  },
  deals: {
    title: "Deals", singular: "Deal", idPrefix: "DL", icon: "mdi-briefcase", statusKey: "stage", statuses: ["New", "Proposal", "Negotiation", "Won", "Lost"],
    columns: [
      { key: "name", label: "Deal Name" }, { key: "company", label: "Company" }, { key: "contact", label: "Contact" }, { key: "amount", label: "Amount" }, { key: "stage", label: "Stage" }, { key: "closeDate", label: "Close Date" }
    ],
    initialRows: [
      { id: 1, name: "Website Development", company: "Rahim Technologies", contact: "Rahim Ahmed", amount: 80000, stage: "Negotiation", closeDate: "2026-08-30" },
      { id: 2, name: "CRM Development", company: "ABC Limited", contact: "John Smith", amount: 150000, stage: "Proposal", closeDate: "2026-09-10" },
      { id: 3, name: "Digital Marketing", company: "XYZ Corporation", contact: "Sarah Khan", amount: 60000, stage: "Won", closeDate: "2026-08-20" },
      { id: 4, name: "Software Maintenance", company: "ABC Limited", contact: "John Smith", amount: 45000, stage: "New", closeDate: "2026-09-20" },
    ],
  },
  tasks: {
    title: "Tasks", singular: "Task", idPrefix: "TS", icon: "mdi-checkbox-marked-circle-outline", statusKey: "status", statuses: ["Pending", "In Progress", "Completed"],
    columns: [{ key: "subject", label: "Task" }, { key: "relatedTo", label: "Related To" }, { key: "dueDate", label: "Due Date" }, { key: "priority", label: "Priority" }, { key: "status", label: "Status" }],
    initialRows: [
      { id: 1, subject: "Prepare quotation", relatedTo: "ABC Limited", dueDate: "2026-08-28", priority: "High", status: "Pending" },
      { id: 2, subject: "Follow up with client", relatedTo: "Rahim Technologies", dueDate: "2026-08-24", priority: "Medium", status: "In Progress" },
      { id: 3, subject: "Update CRM records", relatedTo: "Internal", dueDate: "2026-08-26", priority: "Low", status: "Completed" },
    ],
  },
  meetings: {
    title: "Meetings", singular: "Meeting", idPrefix: "MT", icon: "mdi-calendar", statusKey: "status", statuses: ["Scheduled", "Completed", "Cancelled"],
    columns: [{ key: "subject", label: "Subject" }, { key: "with", label: "With" }, { key: "date", label: "Date" }, { key: "time", label: "Time" }, { key: "status", label: "Status" }],
    initialRows: [
      { id: 1, subject: "CRM project discussion", with: "ABC Limited", date: "2026-08-26", time: "11:00 AM", status: "Scheduled" },
      { id: 2, subject: "Project demo", with: "Rahim Technologies", date: "2026-08-27", time: "03:00 PM", status: "Scheduled" },
      { id: 3, subject: "Initial consultation", with: "XYZ Corporation", date: "2026-08-20", time: "02:00 PM", status: "Completed" },
    ],
  },
  calls: {
    title: "Calls", singular: "Call", idPrefix: "CL", icon: "mdi-phone", statusKey: "status", statuses: ["Planned", "Completed", "Missed"],
    columns: [{ key: "subject", label: "Subject" }, { key: "contact", label: "Contact" }, { key: "date", label: "Date" }, { key: "duration", label: "Duration" }, { key: "status", label: "Status" }],
    initialRows: [
      { id: 1, subject: "Website follow-up", contact: "Rahim Ahmed", date: "2026-08-24", duration: "15 min", status: "Planned" },
      { id: 2, subject: "Proposal feedback", contact: "Sarah Khan", date: "2026-08-22", duration: "20 min", status: "Completed" },
    ],
  },
  calendar: {
    title: "Calendar", singular: "Event", idPrefix: "EV", icon: "mdi-calendar-month", statusKey: "status", statuses: ["Scheduled", "Completed", "Cancelled"],
    columns: [{ key: "title", label: "Event" }, { key: "date", label: "Date" }, { key: "time", label: "Time" }, { key: "type", label: "Type" }, { key: "status", label: "Status" }],
    initialRows: [
      { id: 1, title: "Client meeting", date: "2026-08-26", time: "11:00 AM", type: "Meeting", status: "Scheduled" },
      { id: 2, title: "Follow-up call", date: "2026-08-27", time: "03:00 PM", type: "Call", status: "Scheduled" },
    ],
  },
  products: {
    title: "Products", singular: "Product", idPrefix: "PR", icon: "mdi-package-variant", statusKey: "status", statuses: ["Active", "Inactive"],
    columns: [{ key: "name", label: "Product" }, { key: "category", label: "Category" }, { key: "price", label: "Price" }, { key: "stock", label: "Stock" }, { key: "status", label: "Status" }],
    initialRows: [
      { id: 1, name: "CRM Starter", category: "Software", price: "৳25,000", stock: 50, status: "Active" },
      { id: 2, name: "CRM Pro", category: "Software", price: "৳60,000", stock: 25, status: "Active" },
      { id: 3, name: "Support Package", category: "Service", price: "৳15,000", stock: 100, status: "Inactive" },
    ],
  },
  categories: {
    title: "Categories", singular: "Category", idPrefix: "CAT", icon: "mdi-shape", statusKey: "status", statuses: ["Active", "Inactive"],
    columns: [{ key: "name", label: "Category" }, { key: "description", label: "Description" }, { key: "productCount", label: "Products" }, { key: "status", label: "Status" }],
    initialRows: [
      { id: 1, name: "Software", description: "Software products", productCount: 12, status: "Active" },
      { id: 2, name: "Service", description: "Professional services", productCount: 8, status: "Active" },
      { id: 3, name: "Support", description: "Support packages", productCount: 4, status: "Inactive" },
    ],
  },
  brands: {
    title: "Brands", singular: "Brand", idPrefix: "BR", icon: "mdi-tag", statusKey: "status", statuses: ["Active", "Inactive"],
    columns: [{ key: "name", label: "Brand" }, { key: "website", label: "Website" }, { key: "productCount", label: "Products" }, { key: "status", label: "Status" }],
    initialRows: [
      { id: 1, name: "Nexus CRM", website: "nexuscrm.example", productCount: 6, status: "Active" },
      { id: 2, name: "MasumArafat", website: "masumarafat.com", productCount: 4, status: "Active" },
    ],
  },
  tickets: {
    title: "ChatBoat", singular: "Chat", idPrefix: "CH", icon: "mdi-chat", statusKey: "status", statuses: ["Open", "Pending", "Resolved"],
    columns: [{ key: "subject", label: "Subject" }, { key: "customer", label: "Customer" }, { key: "lastMessage", label: "Last Message" }, { key: "status", label: "Status" }],
    initialRows: [
      { id: 1, subject: "Need help with pricing", customer: "Rahim Ahmed", lastMessage: "Can you send a quote?", status: "Open" },
      { id: 2, subject: "Login issue", customer: "Sarah Khan", lastMessage: "Issue resolved", status: "Resolved" },
    ],
  },
  knowledgeBase: {
    title: "FAQ", singular: "FAQ", idPrefix: "FAQ", icon: "mdi-help-circle", statusKey: "status", statuses: ["Published", "Draft"],
    columns: [{ key: "question", label: "Question" }, { key: "category", label: "Category" }, { key: "updated", label: "Updated" }, { key: "status", label: "Status" }],
    initialRows: [
      { id: 1, question: "How do I create a lead?", category: "CRM", updated: "2026-08-21", status: "Published" },
      { id: 2, question: "How do I update a deal?", category: "Sales", updated: "2026-08-20", status: "Published" },
    ],
  },
  faq: {
    title: "Live Chat", singular: "Chat Session", idPrefix: "LC", icon: "mdi-message-text", statusKey: "status", statuses: ["Online", "Waiting", "Closed"],
    columns: [{ key: "visitor", label: "Visitor" }, { key: "topic", label: "Topic" }, { key: "agent", label: "Agent" }, { key: "status", label: "Status" }],
    initialRows: [
      { id: 1, visitor: "John Smith", topic: "Pricing", agent: "Admin", status: "Online" },
      { id: 2, visitor: "Sarah Khan", topic: "Support", agent: "Admin", status: "Waiting" },
    ],
  },
  users: {
    title: "Users", singular: "User", idPrefix: "USR", icon: "mdi-account", statusKey: "status", statuses: ["Active", "Inactive"],
    columns: [{ key: "name", label: "Name" }, { key: "email", label: "Email" }, { key: "role", label: "Role" }, { key: "lastLogin", label: "Last Login" }, { key: "status", label: "Status" }],
    initialRows: [
      { id: 1, name: "Masum Billah", email: "admin@example.com", role: "Administrator", lastLogin: "Today", status: "Active" },
      { id: 2, name: "Sales User", email: "sales@example.com", role: "Sales", lastLogin: "2026-08-21", status: "Active" },
    ],
  },
  roles: {
    title: "Roles", singular: "Role", idPrefix: "ROL", icon: "mdi-shield-account", statusKey: "status", statuses: ["Active", "Inactive"],
    columns: [{ key: "name", label: "Role" }, { key: "users", label: "Users" }, { key: "scope", label: "Scope" }, { key: "status", label: "Status" }],
    initialRows: [
      { id: 1, name: "Administrator", users: 1, scope: "Full Access", status: "Active" },
      { id: 2, name: "Sales", users: 3, scope: "CRM & Sales", status: "Active" },
      { id: 3, name: "Support", users: 2, scope: "Support", status: "Active" },
    ],
  },
  permissions: {
    title: "Permissions", singular: "Permission", idPrefix: "PER", icon: "mdi-lock", statusKey: "status", statuses: ["Enabled", "Disabled"],
    columns: [{ key: "name", label: "Permission" }, { key: "module", label: "Module" }, { key: "description", label: "Description" }, { key: "status", label: "Status" }],
    initialRows: [
      { id: 1, name: "Manage Leads", module: "CRM", description: "Create, edit and delete leads", status: "Enabled" },
      { id: 2, name: "Manage Deals", module: "Sales", description: "Manage sales opportunities", status: "Enabled" },
    ],
  },
  quotes: {
    title: "Quotes", singular: "Quote", idPrefix: "QT", icon: "mdi-file-document", statusKey: "status", statuses: ["Draft", "Sent", "Accepted", "Rejected"],
    columns: [{ key: "quoteNo", label: "Quote No." }, { key: "customer", label: "Customer" }, { key: "amount", label: "Amount" }, { key: "date", label: "Date" }, { key: "status", label: "Status" }],
    initialRows: [
      { id: 1, quoteNo: "Q-1001", customer: "Rahim Technologies", amount: "৳80,000", date: "2026-08-21", status: "Sent" },
      { id: 2, quoteNo: "Q-1002", customer: "ABC Limited", amount: "৳150,000", date: "2026-08-20", status: "Accepted" },
    ],
  },
  invoices: {
    title: "Invoices", singular: "Invoice", idPrefix: "INV", icon: "mdi-receipt", statusKey: "status", statuses: ["Draft", "Sent", "Paid", "Overdue"],
    columns: [{ key: "invoiceNo", label: "Invoice No." }, { key: "customer", label: "Customer" }, { key: "amount", label: "Amount" }, { key: "dueDate", label: "Due Date" }, { key: "status", label: "Status" }],
    initialRows: [
      { id: 1, invoiceNo: "INV-1001", customer: "XYZ Corporation", amount: "৳60,000", dueDate: "2026-08-25", status: "Paid" },
      { id: 2, invoiceNo: "INV-1002", customer: "ABC Limited", amount: "৳150,000", dueDate: "2026-09-05", status: "Sent" },
    ],
  },
  payments: {
    title: "Payments", singular: "Payment", idPrefix: "PAY", icon: "mdi-cash", statusKey: "status", statuses: ["Completed", "Pending", "Failed"],
    columns: [{ key: "reference", label: "Reference" }, { key: "customer", label: "Customer" }, { key: "amount", label: "Amount" }, { key: "method", label: "Method" }, { key: "status", label: "Status" }],
    initialRows: [
      { id: 1, reference: "PAY-1001", customer: "XYZ Corporation", amount: "৳60,000", method: "Bank", status: "Completed" },
      { id: 2, reference: "PAY-1002", customer: "ABC Limited", amount: "৳50,000", method: "Card", status: "Pending" },
    ],
  },
};
