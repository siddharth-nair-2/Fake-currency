import { useState } from "react";
import "./app.css";
import { MdCloudUpload, MdDelete } from "react-icons/md";
import { AiFillFileImage } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("No selected file");
  const notify = () =>
    toast.success("Result Calculated!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const handleImageInput = (e) => {
    if (e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
      setFileName(e.target.files[0].name);
    } else {
      setImage("");
      setFileName("No selected file");
    }
    console.log(e.target.files[0]);
  };

  return (
    <div className="container">
      <div className="navbar">Fake Currency Detection</div>
      <div className="upload-div">
        <form onClick={() => document.querySelector(".input-field").click()}>
          <input
            type="file"
            accept="image/*"
            className="input-field"
            hidden
            onChange={handleImageInput}
          />

          {image ? (
            <img src={image} className="preview-image" alt={fileName} />
          ) : (
            <>
              <MdCloudUpload color="#1475cf" size={60} />
              <p>Browse Files to upload</p>
            </>
          )}
        </form>

        <section className="uploaded-row">
          <AiFillFileImage color="#1475cf" />
          <span className="upload-content">
            {fileName} -
            <MdDelete
              onClick={() => {
                setFileName("No selected file");
                setImage(null);
              }}
              className="delete-icon"
            />
          </span>
        </section>
      </div>
      <button className="footer" onClick={notify}>
        RESULT
      </button>
      <ToastContainer />
    </div>
  );
}

export default App;
