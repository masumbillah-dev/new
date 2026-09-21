import { useState } from "react";

function Contact() {
    const API_URL = "http://localhost/my-react-project/api/lead-api.php";

    const [form, setForm] = useState({
        name: "", email: "", phone: "", company: "", subject: "", message: ""
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setSuccess(false);

        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...form,
                    source: "Website",
                    status: "New",
                }),
            });

            const result = await response.json();

            if (result.success) {
                setSuccess(true);
                setForm({
                    name: "", email: "", phone: "", company: "", subject: "", message: ""
                });
                window.scrollTo({ top: 0, behavior: "smooth" });
            } else {
                alert(result.message || "Unable to submit your message.");
            }
        } catch (error) {
            console.error("Contact form error:", error);
            alert("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const inputStyle: React.CSSProperties = {
        height: "48px",
        background: "#292f3b",
        border: "1px solid #3a4251",
        color: "#ffffff",
        borderRadius: "10px",
    };

    const labelStyle: React.CSSProperties = {
        color: "#cbd3e1",
        fontWeight: 600,
        fontSize: "13px",
    };

    return (
        <div
            style={{
                minHeight: "100vh",
                background:
                    "radial-gradient(circle at 10% 10%, rgba(0,198,255,.14), transparent 28%), radial-gradient(circle at 90% 15%, rgba(124,77,255,.16), transparent 30%), #0f1118",
                padding: "45px 20px 60px",
            }}
        >
            <div className="container" style={{ maxWidth: "1180px" }}>

                <div className="text-center mb-5" style={{ color: "#fff" }}>
                    <div
                        className="d-inline-flex align-items-center justify-content-center mb-3"
                        style={{
                            width: 64, height: 64, borderRadius: 18,
                            background: "linear-gradient(135deg,#00c6ff,#7c4dff)",
                            boxShadow: "0 12px 35px rgba(0,198,255,.25)",
                        }}
                    >
                        <i className="mdi mdi-chart-line" style={{ fontSize: 34 }} />
                    </div>

                    <h1
                        className="font-weight-bold mb-2"
                        style={{ fontSize: "clamp(30px,5vw,46px)", letterSpacing: "-1px" }}
                    >
                        Let's Start a Conversation
                    </h1>

                    <p
                        className="mb-0"
                        style={{
                            color: "#aeb6c7", fontSize: 17, maxWidth: 680,
                            margin: "0 auto", lineHeight: 1.7,
                        }}
                    >
                        Have a project, business idea, or question? Send us a message
                        and our team will get back to you as soon as possible.
                    </p>
                </div>

                {success && (
                    <div
                        className="d-flex align-items-center mb-4"
                        style={{
                            maxWidth: 1000, margin: "0 auto 25px",
                            background: "rgba(40,199,111,.12)",
                            border: "1px solid rgba(40,199,111,.35)",
                            color: "#65e6a1", borderRadius: 14, padding: "16px 20px",
                        }}
                    >
                        <i className="mdi mdi-check-circle mr-3" style={{ fontSize: 25 }} />
                        <div>
                            <strong>Message sent successfully!</strong>
                            <div style={{ color: "#a7d9bb", fontSize: 14 }}>
                                Thank you for contacting us. We will get back to you soon.
                            </div>
                        </div>
                    </div>
                )}

                <div className="row">

                    <div className="col-lg-5 mb-4 mb-lg-0">
                        <div
                            style={{
                                height: "100%", padding: 32, borderRadius: 22,
                                background: "linear-gradient(145deg,rgba(31,36,49,.96),rgba(21,24,34,.96))",
                                border: "1px solid rgba(255,255,255,.07)",
                                boxShadow: "0 25px 70px rgba(0,0,0,.28)",
                            }}
                        >
                            <span
                                className="d-inline-block mb-3"
                                style={{
                                    color: "#00c6ff", fontSize: 13, fontWeight: 700,
                                    textTransform: "uppercase", letterSpacing: 1.5,
                                }}
                            >
                                Contact Nexus CRM
                            </span>

                            <h2
                                className="font-weight-bold mb-3"
                                style={{ color: "#fff", fontSize: 32, lineHeight: 1.25 }}
                            >
                                We would love to{" "}
                                <span style={{ color: "#00c6ff" }}>hear from you.</span>
                            </h2>

                            <p style={{ color: "#9ca6ba", lineHeight: 1.8, marginBottom: 30 }}>
                                Tell us what you need and give us a few details about your
                                project. We will review your message and contact you with the next steps.
                            </p>

                            {[
                                ["mdi-email-outline", "#00c6ff", "EMAIL", "support@nexuscrm.com"],
                                ["mdi-phone-outline", "#9a7cff", "PHONE", "+880 1700-000000"],
                                ["mdi-clock-outline", "#28c76f", "RESPONSE TIME", "Usually within 24 hours"],
                            ].map(([icon, color, title, value]) => (
                                <div
                                    key={title}
                                    className="d-flex align-items-center mb-3"
                                    style={{
                                        padding: 16, borderRadius: 14,
                                        background: "rgba(255,255,255,.035)",
                                        border: "1px solid rgba(255,255,255,.05)",
                                    }}
                                >
                                    <div
                                        className="d-flex align-items-center justify-content-center mr-3"
                                        style={{
                                            minWidth: 46, width: 46, height: 46,
                                            borderRadius: 12,
                                            background: `${color}1f`,
                                            color,
                                        }}
                                    >
                                        <i className={`mdi ${icon}`} style={{ fontSize: 23 }} />
                                    </div>
                                    <div>
                                        <div style={{ color: "#7f8ba3", fontSize: 12, marginBottom: 3 }}>
                                            {title}
                                        </div>
                                        <div style={{ color: "#fff", fontWeight: 600 }}>
                                            {value}
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <div
                                className="mt-4"
                                style={{
                                    padding: 18, borderRadius: 14,
                                    background: "linear-gradient(135deg,rgba(0,198,255,.10),rgba(124,77,255,.10))",
                                    border: "1px solid rgba(0,198,255,.12)",
                                }}
                            >
                                <div className="d-flex align-items-center">
                                    <i className="mdi mdi-shield-check-outline mr-2"
                                       style={{ color: "#00c6ff", fontSize: 22 }} />
                                    <span style={{ color: "#d7deea", fontSize: 14 }}>
                                        Your information is handled securely.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-7">
                        <div
                            style={{
                                padding: 32, borderRadius: 22,
                                background: "linear-gradient(145deg,rgba(31,36,49,.98),rgba(21,24,34,.98))",
                                border: "1px solid rgba(255,255,255,.07)",
                                boxShadow: "0 25px 70px rgba(0,0,0,.28)",
                            }}
                        >
                            <div className="d-flex align-items-center mb-4">
                                <div
                                    className="d-flex align-items-center justify-content-center mr-3"
                                    style={{
                                        width: 48, height: 48, borderRadius: 13,
                                        background: "linear-gradient(135deg,#00c6ff,#7c4dff)",
                                    }}
                                >
                                    <i className="mdi mdi-message-text-outline"
                                       style={{ fontSize: 24, color: "#fff" }} />
                                </div>
                                <div>
                                    <h3 className="mb-1" style={{ color: "#fff", fontWeight: 700 }}>
                                        Send us a message
                                    </h3>
                                    <p className="mb-0" style={{ color: "#7f8ba3", fontSize: 13 }}>
                                        All fields marked with * are required.
                                    </p>
                                </div>
                            </div>

                            <form onSubmit={handleSubmit}>
                                <div className="row">

                                    <div className="col-md-6 mb-3">
                                        <label style={labelStyle}>
                                            <i className="mdi mdi-account-outline mr-1" /> Full Name *
                                        </label>
                                        <input
                                            type="text" name="name"
                                            className="form-control"
                                            placeholder="Enter your full name"
                                            value={form.name} onChange={handleChange} required
                                            style={inputStyle}
                                        />
                                    </div>

                                    <div className="col-md-6 mb-3">
                                        <label style={labelStyle}>
                                            <i className="mdi mdi-email-outline mr-1" /> Email *
                                        </label>
                                        <input
                                            type="email" name="email"
                                            className="form-control"
                                            placeholder="you@example.com"
                                            value={form.email} onChange={handleChange} required
                                            style={inputStyle}
                                        />
                                    </div>

                                    <div className="col-md-6 mb-3">
                                        <label style={labelStyle}>
                                            <i className="mdi mdi-phone-outline mr-1" /> Phone
                                        </label>
                                        <input
                                            type="text" name="phone"
                                            className="form-control"
                                            placeholder="01XXXXXXXXX"
                                            value={form.phone} onChange={handleChange}
                                            style={inputStyle}
                                        />
                                    </div>

                                    <div className="col-md-6 mb-3">
                                        <label style={labelStyle}>
                                            <i className="mdi mdi-office-building-outline mr-1" /> Company
                                        </label>
                                        <input
                                            type="text" name="company"
                                            className="form-control"
                                            placeholder="Company name"
                                            value={form.company} onChange={handleChange}
                                            style={inputStyle}
                                        />
                                    </div>

                                    <div className="col-md-12 mb-3">
                                        <label style={labelStyle}>
                                            <i className="mdi mdi-format-title mr-1" /> Subject
                                        </label>
                                        <input
                                            type="text" name="subject"
                                            className="form-control"
                                            placeholder="What would you like to discuss?"
                                            value={form.subject} onChange={handleChange}
                                            style={inputStyle}
                                        />
                                    </div>

                                    <div className="col-md-12 mb-4">
                                        <label style={labelStyle}>
                                            <i className="mdi mdi-message-text-outline mr-1" /> Message *
                                        </label>
                                        <textarea
                                            name="message"
                                            className="form-control"
                                            rows={6}
                                            placeholder="Tell us a little about your requirement..."
                                            value={form.message} onChange={handleChange} required
                                            style={{
                                                background: "#292f3b",
                                                border: "1px solid #3a4251",
                                                color: "#fff",
                                                borderRadius: 10,
                                                resize: "vertical",
                                            }}
                                        />
                                    </div>
                                </div>

                                <div
                                    className="d-flex align-items-center justify-content-between flex-wrap"
                                    style={{ gap: 15 }}
                                >
                                    <div style={{ color: "#7f8ba3", fontSize: 12 }}>
                                        <i className="mdi mdi-lock-outline mr-1" />
                                        Your details are safe with us.
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn"
                                        disabled={loading}
                                        style={{
                                            minWidth: 175, height: 48, borderRadius: 10,
                                            border: "none", color: "#fff", fontWeight: 700,
                                            background: loading
                                                ? "#4b5362"
                                                : "linear-gradient(135deg,#00a8ff,#7c4dff)",
                                            boxShadow: loading
                                                ? "none"
                                                : "0 10px 25px rgba(0,168,255,.20)",
                                        }}
                                    >
                                        <i
                                            className={
                                                loading
                                                    ? "mdi mdi-loading mdi-spin mr-1"
                                                    : "mdi mdi-send-outline mr-1"
                                            }
                                        />
                                        {loading ? "Sending..." : "Send Message"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>

                <div
                    className="text-center mt-5"
                    style={{ color: "#687389", fontSize: 12 }}
                >
                    © 2026 Nexus CRM. All rights reserved.
                </div>
            </div>
        </div>
    );
}

export default Contact;