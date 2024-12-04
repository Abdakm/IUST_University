import { useEffect, useState } from "react";
import { Home, Login, Account } from "./components/index";
import { useStore } from "./contexts/userContext";
import { useLocation } from 'react-router-dom'
import axios from 'axios'

function App() {
  const { user, setUser } = useStore();
  return (
    <div className="select-none mt-20">
      { user === null 
      ? <Home />
      : <Account />
      }
    </div>
  );

  /*
    const [file, setFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [message, setMessage] = useState("");

    const handleFileChange = (e) => {
      setFile(e.target.files[0]); // Set the selected file to state
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!file) {
        setMessage("Please select a file before submitting.");
        return;
      }
      setUploading(true);
      setMessage("");

      try {
        const formData = new FormData();
        formData.append("file", file);

        const { data } = await axios.post("http://localhost:4000/api/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        setMessage("File uploaded successfully!");
        console.log("Response Data:", data);
      } catch (err) {
        console.error("Upload Error:", err);
        setMessage(err.response.data.error);
      } finally {
        setUploading(false);
      }
    };
    return(
      <div className="text-white">
        <form onSubmit={handleSubmit}>
          <input type="file" name="file" onChange={handleFileChange} />
          <button type="submit" disabled={uploading}>
            {uploading ? "Uploading..." : "Submit"}
          </button>
        </form>
        {message && <p>{message}</p>}
      </div>
    )
  */
}

export default App;
