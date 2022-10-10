import "./PostModal.css";

const PostModal = () => {

  return (
    <div className="post-model__container flex__column-center">
      <div className="post-model__top flex__row-center">
        <h3 className="post-model__title">Create a new post</h3>
        <span className="material-icons close__btn">close</span>
      </div>
      <div className="post-model__details flex__row-center">
        <img
          src="https://picsum.photos/100"
          alt="user-profile-img"
          className="user__profile-img"
        />
        <h2 className="user__profile-name">John Doe</h2>
        <div className="post__visibility-dropdown flex__row-center">
          <span className="material-icons public__icon">public</span>
          <h3 className="post__visiblity-selected">Public</h3>
          <span className="expand__btn material-icons">expand_more</span>
        </div>
      </div>
      <div className="post__model-input flex__column-center">
        <textarea
          className="post__model-textarea"
          placeholder="What's Happening?"
        />
        <h3 className="post__model-counter">0 / 250</h3>
      </div>
      <div className="post__model-choices flex__row-center">
        <span className="material-icons add-image__btn">image</span>
        <span className="material-icons add-emoji__btn">mood</span>
        <button className="post__model-postbtn flex__row-center">
          <span>Send Post</span>
          <span className="material-icons post__icon">double_arrow</span>
        </button>
      </div>
    </div>
  );
};

export { PostModal };
