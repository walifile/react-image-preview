import React, { useState } from "react";

const Image = () => {
  const [file, setFile] = useState(null);
  console.log(file);
  return (
    <>
      <div>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <div>{file && <img src={URL.createObjectURL(file)} alt="" />}</div>
      </div>
    </>
  );
};

export default Image;
