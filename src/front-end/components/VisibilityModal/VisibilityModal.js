import "./VisibilityModal.css";

const VisibilityModal = ({ isVisiblityModal, setVisiblity, visiblity }) => {
  return (
    isVisiblityModal && (
      <div className="post__visibility-choices flex__column">
        <div
          className={`post__visibility-choice flex__row ${
            visiblity === "public" ? "visiblity--selected" : ""
          }`}
          onClick={() => setVisiblity("public")}
        >
          <span className="material-icons public__icon">public</span>
          <div className="visiblity-choice__text flex__column">
            <h3 className="post__visiblity-title">Public</h3>
            <p className="post__visiblity-subtitle">Visible to everyone</p>
          </div>
          {visiblity === "public" && (
            <span className="material-icons selected__icon">done</span>
          )}
        </div>
        <div
          className={`post__visibility-choice flex__row ${
            visiblity === "private" ? "visiblity--selected" : ""
          }`}
          onClick={() => setVisiblity("private")}
        >
          <span className="material-icons public__icon">lock</span>
          <div className="visiblity-choice__text flex__column">
            <h3 className="post__visiblity-title">Private</h3>
            <p className="post__visiblity-subtitle">
              Visible to your followers
            </p>
          </div>
          {visiblity === "private" && (
            <span className="material-icons selected__icon">done</span>
          )}
        </div>
      </div>
    )
  );
};

export { VisibilityModal };
