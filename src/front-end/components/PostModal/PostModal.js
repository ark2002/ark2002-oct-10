import { useRef, useState } from "react";
import { useOnClickOutside } from "../../hooks/onClickOutsideHook";
import { VisibilityModal } from "../VisibilityModal/VisibilityModal";
import "./PostModal.css";

const PostModal = () => {
  const [wordCount, setWordCount] = useState(0);
  const [isVisiblityModal, setIsVisiblityModal] = useState(false);
  const [visiblity, setVisiblity] = useState("private");
  const ref = useRef();

  useOnClickOutside(ref, () => setIsVisiblityModal(false));

  return (
    <div className="post-modal__container flex__column-center">
      <div className="post-modal__top flex__row-center">
        <h3 className="post-modal__title">Create a new post</h3>
        <span className="material-icons close__btn">close</span>
      </div>
      <div className="post-modal__details flex__row-center">
        <img
          src="https://picsum.photos/100"
          alt="user-profile-img"
          className="user__profile-img"
        />
        <h2 className="user__profile-name">John Doe</h2>
        <div
          className="post__visibility-dropdown flex__row-center"
          onClick={() => setIsVisiblityModal(!isVisiblityModal)}
          ref={ref}
        >
          <span className="material-icons public__icon">
            {visiblity === "public" ? "public" : "lock"}
          </span>
          <h3 className="post__visiblity-selected">
            {visiblity === "public" ? "Public" : "Private"}
          </h3>
          <span className="expand__btn material-icons">expand_more</span>
          <VisibilityModal
            visiblity={visiblity}
            setVisiblity={setVisiblity}
            isVisiblityModal={isVisiblityModal}
          />
        </div>
      </div>
      <div className="post__modal-input flex__column-center">
        <textarea
          className="post__modal-textarea"
          placeholder="What's Happening?"
          onChange={(e) => setWordCount(e.target.value.length)}
        />
        <h3
          className={`post__modal-counter ${
            wordCount > 250
              ? `counter--error`
              : wordCount >= 240
              ? `counter--warn`
              : wordCount > 0
              ? `counter--count`
              : ``
          } `}
        >
          {wordCount} / 250
        </h3>
      </div>
      <div className="post__modal-choices flex__row-center">
        <span className="material-icons add-image__btn">image</span>
        <span className="material-icons add-emoji__btn">mood</span>
        <button
          className={`post__modal-postbtn flex__row-center ${
            wordCount < 1 || wordCount > 250 ? `postbtn--disabled` : ``
          }`}
          disabled={wordCount < 1 || wordCount > 250}
        >
          <span>Send Post</span>
          <span className="material-icons post__icon">double_arrow</span>
        </button>
      </div>
    </div>
  );
};

export { PostModal };
