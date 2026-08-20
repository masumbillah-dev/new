function Dashboard() {
  return (
    <div className="content-wrapper">

      {/* Welcome */}

      <div className="row">

        <div className="col-12 grid-margin stretch-card">

          <div className="card">

            <div className="card-body">

              <div className="d-sm-flex justify-content-between align-items-center">

                <div>

                  <h3 className="mb-1">
                    Welcome Back, Administrator 👋
                  </h3>

                  <p className="text-muted mb-0">
                    Customer Relationship Management Dashboard
                  </p>

                </div>

                <div>

                  <button className="btn btn-primary">
                    + New Lead
                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>



      {/* Statistics */}

      <div className="row">

        <div className="col-xl-3 col-sm-6 grid-margin stretch-card">

          <div className="card">

            <div className="card-body">

              <div className="d-flex justify-content-between">

                <div>

                  <h6 className="text-muted">
                    Total Leads
                  </h6>

                  <h3>
                    1,250
                  </h3>

                  <span className="text-success">
                    +12%
                  </span>

                </div>

                <div className="icon icon-box-success">

                  <span className="mdi mdi-account-plus icon-item"></span>

                </div>

              </div>

            </div>

          </div>

        </div>



        <div className="col-xl-3 col-sm-6 grid-margin stretch-card">

          <div className="card">

            <div className="card-body">

              <div className="d-flex justify-content-between">

                <div>

                  <h6 className="text-muted">
                    Contacts
                  </h6>

                  <h3>
                    860
                  </h3>

                  <span className="text-info">
                    +8%
                  </span>

                </div>

                <div className="icon icon-box-info">

                  <span className="mdi mdi-account-multiple icon-item"></span>

                </div>

              </div>

            </div>

          </div>

        </div>



        <div className="col-xl-3 col-sm-6 grid-margin stretch-card">

          <div className="card">

            <div className="card-body">

              <div className="d-flex justify-content-between">

                <div>

                  <h6 className="text-muted">
                    Companies
                  </h6>

                  <h3>
                    315
                  </h3>

                  <span className="text-warning">
                    +4%
                  </span>

                </div>

                <div className="icon icon-box-warning">

                  <span className="mdi mdi-domain icon-item"></span>

                </div>

              </div>

            </div>

          </div>

        </div>



        <div className="col-xl-3 col-sm-6 grid-margin stretch-card">

          <div className="card">

            <div className="card-body">

              <div className="d-flex justify-content-between">

                <div>

                  <h6 className="text-muted">
                    Active Deals
                  </h6>

                  <h3>
                    97
                  </h3>

                  <span className="text-danger">
                    +15%
                  </span>

                </div>

                <div className="icon icon-box-danger">

                  <span className="mdi mdi-briefcase icon-item"></span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

            {/* CRM Overview */}

      <div className="row">

        <div className="col-xl-8 grid-margin stretch-card">

          <div className="card">

            <div className="card-body">

              <div className="d-flex justify-content-between align-items-center mb-4">

                <h4 className="card-title mb-0">
                  Sales Overview
                </h4>

                <button className="btn btn-outline-primary btn-sm">
                  This Month
                </button>

              </div>

              <div
                className="d-flex justify-content-center align-items-center"
                style={{ height: "320px" }}
              >

                <div className="text-center">

                  <i
                    className="mdi mdi-chart-line"
                    style={{
                      fontSize: "70px",
                      color: "#4B49AC",
                    }}
                  ></i>

                  <h5 className="mt-3">
                    Sales Chart
                  </h5>

                  <p className="text-muted">
                    Chart.js / ApexCharts will be added later
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>



        <div className="col-xl-4 grid-margin stretch-card">

          <div className="card">

            <div className="card-body">

              <h4 className="card-title">
                Recent Activities
              </h4>

              <div className="preview-list">

                <div className="preview-item border-bottom">

                  <div className="preview-thumbnail">

                    <div className="preview-icon bg-success">
                      <i className="mdi mdi-account-plus"></i>
                    </div>

                  </div>

                  <div className="preview-item-content">

                    <h6 className="preview-subject">
                      New Lead Added
                    </h6>

                    <p className="text-muted mb-0">
                      ABC Corporation
                    </p>

                  </div>

                </div>



                <div className="preview-item border-bottom">

                  <div className="preview-thumbnail">

                    <div className="preview-icon bg-info">
                      <i className="mdi mdi-phone"></i>
                    </div>

                  </div>

                  <div className="preview-item-content">

                    <h6 className="preview-subject">
                      Client Call
                    </h6>

                    <p className="text-muted mb-0">
                      John Smith
                    </p>

                  </div>

                </div>



                <div className="preview-item border-bottom">

                  <div className="preview-thumbnail">

                    <div className="preview-icon bg-warning">
                      <i className="mdi mdi-calendar"></i>
                    </div>

                  </div>

                  <div className="preview-item-content">

                    <h6 className="preview-subject">
                      Meeting Scheduled
                    </h6>

                    <p className="text-muted mb-0">
                      Tomorrow 10:00 AM
                    </p>

                  </div>

                </div>



                <div className="preview-item">

                  <div className="preview-thumbnail">

                    <div className="preview-icon bg-danger">
                      <i className="mdi mdi-cash"></i>
                    </div>

                  </div>

                  <div className="preview-item-content">

                    <h6 className="preview-subject">
                      Invoice Paid
                    </h6>

                    <p className="text-muted mb-0">
                      $4,850
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

            {/* Bottom Section */}

      <div className="row">

        <div className="col-lg-8 grid-margin stretch-card">

          <div className="card">

            <div className="card-body">

              <div className="d-flex justify-content-between align-items-center mb-3">

                <h4 className="card-title mb-0">
                  Recent Leads
                </h4>

                <button className="btn btn-outline-success btn-sm">
                  View All
                </button>

              </div>

              <div className="table-responsive">

                <table className="table table-hover">

                  <thead>

                    <tr>

                      <th>Name</th>

                      <th>Company</th>

                      <th>Status</th>

                      <th>Source</th>

                    </tr>

                  </thead>

                  <tbody>

                    <tr>

                      <td>John Smith</td>

                      <td>ABC Corporation</td>

                      <td>
                        <span className="badge badge-success">
                          Qualified
                        </span>
                      </td>

                      <td>Website</td>

                    </tr>

                    <tr>

                      <td>Emily Johnson</td>

                      <td>Pixel Studio</td>

                      <td>
                        <span className="badge badge-warning">
                          Follow Up
                        </span>
                      </td>

                      <td>Facebook</td>

                    </tr>

                    <tr>

                      <td>Michael Brown</td>

                      <td>Nova Ltd</td>

                      <td>
                        <span className="badge badge-info">
                          New
                        </span>
                      </td>

                      <td>Email</td>

                    </tr>

                    <tr>

                      <td>David Wilson</td>

                      <td>SoftTech</td>

                      <td>
                        <span className="badge badge-danger">
                          Lost
                        </span>
                      </td>

                      <td>Referral</td>

                    </tr>

                  </tbody>

                </table>

              </div>

            </div>

          </div>

        </div>



        <div className="col-lg-4 grid-margin stretch-card">

          <div className="card">

            <div className="card-body">

              <h4 className="card-title">
                Upcoming Tasks
              </h4>

              <div className="preview-list">

                <div className="preview-item border-bottom">

                  <div className="preview-thumbnail">

                    <div className="preview-icon bg-primary">

                      <i className="mdi mdi-phone"></i>

                    </div>

                  </div>

                  <div className="preview-item-content">

                    <h6 className="preview-subject">
                      Call ABC Corporation
                    </h6>

                    <p className="text-muted mb-0">
                      Today • 11:30 AM
                    </p>

                  </div>

                </div>

                <div className="preview-item border-bottom">

                  <div className="preview-thumbnail">

                    <div className="preview-icon bg-success">

                      <i className="mdi mdi-account-check"></i>

                    </div>

                  </div>

                  <div className="preview-item-content">

                    <h6 className="preview-subject">
                      Client Follow Up
                    </h6>

                    <p className="text-muted mb-0">
                      2:00 PM
                    </p>

                  </div>

                </div>

                <div className="preview-item border-bottom">

                  <div className="preview-thumbnail">

                    <div className="preview-icon bg-warning">

                      <i className="mdi mdi-calendar"></i>

                    </div>

                  </div>

                  <div className="preview-item-content">

                    <h6 className="preview-subject">
                      Team Meeting
                    </h6>

                    <p className="text-muted mb-0">
                      Tomorrow • 10:00 AM
                    </p>

                  </div>

                </div>

                <div className="preview-item">

                  <div className="preview-thumbnail">

                    <div className="preview-icon bg-danger">

                      <i className="mdi mdi-file-document"></i>

                    </div>

                  </div>

                  <div className="preview-item-content">

                    <h6 className="preview-subject">
                      Send Proposal
                    </h6>

                    <p className="text-muted mb-0">
                      Friday
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;