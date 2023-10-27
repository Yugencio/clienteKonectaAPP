export function Usuario() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <form>
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="input-group mb-3">
                    <span className="input-group-text"><i class="bi bi-person"></i></span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Apellidos"
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="input-group mb-3">
                    <span className="input-group-text"><i class="bi bi-person"></i></span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nombres"
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-12 col-md-3">
                  <div className="input-group mb-3">
                    <span className="input-group-text"><i class="bi bi-person-badge"></i></span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Documento"
                    />
                  </div>
                </div>
                <div className="col-12 col-md-3">
                  <div className="input-group mb-3">
                    <span className="input-group-text"><i class="bi bi-phone"></i></span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Telefono"
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="input-group mb-3">
                    <span className="input-group-text"><i class="bi bi-calendar-date"></i></span>
                    <input
                      type="date"
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-12">
                <div className="input-group mb-3">
                  <span className="input-group-text"><i class="bi bi-envelope-at-fill"></i></span>
                  <input
                    type="e-mail"
                    className="form-control"
                    placeholder="Correo"
                  />
                </div>
              </div>

              <div className="col-12 col-md-6">
                <div className="input-group mb-3">
                  <span className="input-group-text"><i class="bi bi-geo-alt"></i></span>
                  <select
                    type=""
                    className="form-control"
                    placeholder="Depto"
                  />
                </div>
                <div className="col-12 col-md-6">
                  <div className="input-group mb-3">
                    <span className="input-group-text"><i class="bi bi-geo-alt-fill"></i></span>
                    <select
                      type=""
                      className="form-control"
                      placeholder="ññññ"
                    />
                  </div>
                </div>
              </div>

              <button type="button" className="btn btn-outline-primary w-50 mx-auto d-block">
                Registrar
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
