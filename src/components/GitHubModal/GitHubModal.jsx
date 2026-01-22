export default function GitHubModal({ show, onClose, githubData }) {
  if (!show) return null;

  return (
    <>
      <div className="modal fade show d-block" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content bg-dark text-white border border-secondary">

            <div className="modal-header border-bottom border-secondary">
              <h5 className="modal-title">Mon profil GitHub</h5>
              <button
                type="button"
                className="btn-close"
                onClick={onClose}
              ></button>
            </div>

            <div className="modal-body d-flex flex-row align-items-center">
              <div className="me-4">
                <img
                  src={githubData.avatar_url}
                  alt="GitHub avatar"
                  className="mb-3"
                  width="360"
                />
              </div>
              <div className="me-4">
                <h5 className="bi bi-person d-block"> <a href={`https://github.com/${githubData.login}`} target="_blank">{githubData.name}</a></h5>
                <span className="bi bi-geo-alt d-block border-top border-secondary p-2"></span>
                <span className="bi bi-card-text d-block border-top border-secondary p-2"> {githubData.bio}</span>
                <span className="bi bi-box d-block border-top border-secondary p-2"> Repositories : {githubData.public_repos}</span> 
                <span className="bi bi-people d-block border-top border-secondary p-2"> Followers : {githubData.followers}</span> 
                <span className="bi bi-people d-block border-top border-secondary p-2"> Following : {githubData.following}</span>
              </div>
            </div>

            <div className="modal-footer border-top border-secondary">
              <button
                className="btn btn-secondary"
                onClick={onClose}
              >Fermer</button>
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      <div className="modal-backdrop fade show" onClick={onClose}></div>
    </>
  );
}