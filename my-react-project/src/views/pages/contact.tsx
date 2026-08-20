import { useState } from "react";

function Contact() {

    const API_URL =
        "http://localhost/my-react-project/api/lead-api.php";

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (
        e: React.FormEvent
    ) => {

        e.preventDefault();

        setLoading(true);
        setSuccess(false);

        try {

            const response = await fetch(API_URL, {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                },

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
                    name: "",
                    email: "",
                    phone: "",
                    company: "",
                    subject: "",
                    message: "",
                });

            } else {

                alert(result.message);

            }

        } catch (error) {

            console.error(
                "Contact form error:",
                error
            );

            alert(
                "Something went wrong. Please try again."
            );

        } finally {

            setLoading(false);

        }
    };


    return (

        <div className="container mt-5 mb-5">

            <div className="row justify-content-center">

                <div className="col-md-8">

                    <div className="card">

                        <div className="card-body">

                            <h3 className="card-title mb-4">
                                Contact Us
                            </h3>


                            {success && (

                                <div className="alert alert-success">

                                    Thank you! Your message
                                    has been submitted
                                    successfully.

                                </div>

                            )}


                            <form onSubmit={handleSubmit}>

                                {/* Name */}

                                <div className="form-group">

                                    <label>
                                        Full Name *
                                    </label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        value={form.name}
                                        onChange={(e) =>
                                            setForm({
                                                ...form,
                                                name: e.target.value,
                                            })
                                        }
                                        required
                                    />

                                </div>


                                {/* Email */}

                                <div className="form-group">

                                    <label>
                                        Email *
                                    </label>

                                    <input
                                        type="email"
                                        className="form-control"
                                        value={form.email}
                                        onChange={(e) =>
                                            setForm({
                                                ...form,
                                                email: e.target.value,
                                            })
                                        }
                                        required
                                    />

                                </div>


                                {/* Phone */}

                                <div className="form-group">

                                    <label>
                                        Phone
                                    </label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        value={form.phone}
                                        onChange={(e) =>
                                            setForm({
                                                ...form,
                                                phone: e.target.value,
                                            })
                                        }
                                    />

                                </div>


                                {/* Company */}

                                <div className="form-group">

                                    <label>
                                        Company
                                    </label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        value={form.company}
                                        onChange={(e) =>
                                            setForm({
                                                ...form,
                                                company:
                                                    e.target.value,
                                            })
                                        }
                                    />

                                </div>


                                {/* Subject */}

                                <div className="form-group">

                                    <label>
                                        Subject
                                    </label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        value={form.subject}
                                        onChange={(e) =>
                                            setForm({
                                                ...form,
                                                subject:
                                                    e.target.value,
                                            })
                                        }
                                    />

                                </div>


                                {/* Message */}

                                <div className="form-group">

                                    <label>
                                        Message *
                                    </label>

                                    <textarea
                                        className="form-control"
                                        rows={5}
                                        value={form.message}
                                        onChange={(e) =>
                                            setForm({
                                                ...form,
                                                message:
                                                    e.target.value,
                                            })
                                        }
                                        required
                                    />

                                </div>


                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    disabled={loading}
                                >

                                    {loading
                                        ? "Sending..."
                                        : "Send Message"}

                                </button>

                            </form>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );
}

export default Contact;