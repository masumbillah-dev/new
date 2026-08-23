# CRM React Project

This version keeps the existing Corona-style CRM layout and completes the sidebar navigation for the deadline/demo flow.

## Working / Demo modules
- Dashboard
- Leads: connected to the existing PHP API/database flow
- Public Contact Form: `/contact` creates leads through the existing Lead API
- Contacts
- Companies
- Deals
- Activities
- Sales Pipeline
- Quotes
- Invoices
- Payments
- Tasks
- Meetings
- Calls
- Calendar
- Products
- Categories
- Brands
- ChatBoat placeholder
- FAQ
- Live Chat placeholder
- Users
- Roles
- Permissions
- Sales Report
- Lead Report
- Revenue Report
- Performance
- Settings

The non-Lead modules are intentionally front-end demo modules for the project deadline. Add/Edit/View/Delete and search/filter interactions work in the browser using in-memory state, while the existing Lead flow remains the backend-connected part.

## Run
1. Import `crm.sql` into MySQL/MariaDB in XAMPP.
2. Check `config/db.php` credentials.
3. Run the PHP API through XAMPP/Apache.
4. Run the React app with `npm install` then `npm run dev`.
