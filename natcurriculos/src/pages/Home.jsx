// UploadImage.js
import React, { useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { storage, db } from "../firebase/FireBaseConecet";

export const Home = () => {
  const [progress, setProgress] = useState(0);
  const [file, setFile] = useState(null);
  const [groupFiles, setGroupFiles] = useState([]);

  const [url, setUrl] = useState("");
  console.log(url);

  function handlefileChange(e) {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  }

  async function handleItem(e) {
    e.preventDefault();

    if (!file) {
      alert("Please select an image");
      return;
    }

    const refStorage = ref(storage, `imagens4/${file.name}`);
    await uploadBytes(refStorage, file).then((uploadResult) => {
      getDownloadURL(uploadResult.ref).then((downloadURL) => {
        const refDb = collection(db, "imagens5");
        const objectImg = {
          url: downloadURL,
          name: file.name,
          prewiverULR: URL.createObjectURL(file),
        };
        addDoc(refDb, {
          url: downloadURL,
          name: file.name,
          prevURL: URL.createObjectURL(file),
        })
          .then(() => {
            setGroupFiles((contain) => [
              ...contain,
              {
                name: objectImg.name,
                dwlURL: objectImg.url,
                urlViwer: objectImg.prewiverULR,
              },
            ]);
          })
          .then(() => {
            alert("ARQUIVO ENVIADO");
          });
      });
    });
  }

  console.log(groupFiles);

  return (
    <div className="max-w-96 flex items-center justify-center flex-col m-auto">
      <form
        onSubmit={handleItem}
        className="flex items-center justify-center flex-col my-10"
      >
        <input type="file" onChange={handlefileChange} />
        <button type="submit" className="bg-yellow-400 px-10 mt-10">
          Enviar
        </button>
      </form>
      <progress value={progress} max={100} />
      {groupFiles.map((item, index) => {
        return (
          <div key={index}>
            <img src={item.urlViwer} alt={item.name} />
            <a
              target="_blacnk"
              href={item.dwlURL}
              className="bg-yellow-400 px-10 mt-10"
            >
              Donwload
            </a>
          </div>
        );
      })}
    </div>
  );
};
