export default function GitHubModal({ show, onClose, githubData }) {
  if (!show) return null;

  return (
    <>
      <div className="modal fade show d-block" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content bg-dark text-white">

            <div className="modal-header">
              <h5 className="modal-title">Mon profil GitHub</h5>
              <button
                type="button"
                className="btn-close"
                onClick={onClose}
              ></button>
            </div>

            <div className="modal-body d-flex flex-row align-items-center">
              {!githubData ? (
                <p>Loading...</p>
              ) : (
                <>
                    <div className="me-4">
                        <img
                            src={githubData.avatar_url}
                            alt="GitHub avatar"
                            className="rounded-circle mb-3"
                            width="240"
                        />
                    </div>
                    <div className="me-4">
                        <h5 className="bi bi-person d-block"> <a href={`https://github.com/${githubData.login}`} target="_blank">{githubData.name}</a></h5>
                        <span className="bi bi-geo-alt d-block"></span>
                        <span className="bi bi-card-text d-block"> {githubData.bio}</span>
                        <span className="bi bi-box d-block"> Repositories : {githubData.public_repos}</span> 
                        <span className="bi bi-people d-block"> Followers : {githubData.followers}</span> 
                        <span className="bi bi-people d-block"> Following : {githubData.following}</span>
                    </div>
                </>
              )}
            </div>

            <div className="modal-footer">
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