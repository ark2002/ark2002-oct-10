import "./ImageList.css";

const ImageList = ({ imageList, onImageRemove }) => {
  return (
    <div className="post__modal-imglist flex__column-center">
      {imageList.map((image, index) => (
        <div key={index} className="image-item">
          <img src={image.data_url} alt="" width="100" />
          <div className="image-item__btn-wrapper">
            <span
              onClick={() => onImageRemove(index)}
              className="material-icons remove__btn"
            >
              close
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export { ImageList };
