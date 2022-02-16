import { useState, useEffect } from "react";

const Loaded = () => {
  return (
    <div>
      <div style={{ width: "200px", height: "200px", backgroundColor: "lightsteelblue", border: "solid lightgreen 1px" }}>Loaded</div>
    </div>)
}

const Loading = (props: { index: number, fileToUpload?: string, onFileUpload: (index: number, file: string) => void; }) => {
  const { index, fileToUpload, onFileUpload } = props
  const [time, setTime] = useState<number>(0)

  useEffect(() => {
    console.log("file to upload in loading is ---> ", fileToUpload)
    let timer = setTimeout(() => {
      setTime(index)
      fileToUpload && onFileUpload(index, fileToUpload)
    }, 2000 + index * 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [])

  return (
    <div>
      <div style={{ width: "200px", height: "200px", backgroundColor: "steelblue", border: "solid lightgreen 1px" }}>
        <div>Loading...</div>
        <div>file: {fileToUpload}</div>
        <div>index: {index.toString()}</div>
        <div>time: {time.toString()}</div>
      </div>
      <div>{time.toString()}</div>
    </div>
  )
}

const TestTabs = () => {
  const [pictures, setPictures] = useState<Array<string | undefined>>(["pic-one", "pic-two"])
  const [files, setFiles] = useState<Array<string | undefined>>([])

  const onLoad = () => {
    const uploadingFiles: string[] = [`file-${(pictures.length + 1).toString()}`, `file-${(pictures.length + 2).toString()}`]

    setTimeout(() => {
      setFiles([...new Array(pictures.length).fill(undefined), ...uploadingFiles])
      setPictures([...pictures, ...new Array(uploadingFiles.length).fill(undefined)])
    }, 5000)
  }

  const onFileUpload = (index: number, file: string) => {
    console.log("calling index ---> ", index)

    setPictures(pictures => {
      const newPictures: Array<string | undefined> = [...pictures];
      newPictures[index] = file;

      return newPictures
    })

    setFiles(files => {
      let newFiles: Array<string | undefined> = [...files];
      newFiles[index] = undefined;
      console.log("files are", newFiles)

      if (!newFiles.some(file => !!file)) {
        console.log("all falsy")
        newFiles = [];
      }

      return newFiles
    })
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "600px", margin: "auto" }}>
      <h1>Test Picture Loading</h1>
      <div style={{ display: "flex" }}>
        {pictures.map((item, index) => {
          return !!item ? <Loaded /> : <Loading index={index} fileToUpload={files[index]} onFileUpload={onFileUpload} />
        })}
      </div>
      <div>
        <div>pictures: {JSON.stringify(pictures)}</div>
        <div>files: {JSON.stringify(files)}</div>
      </div>
      <div>
        <button onClick={() => onLoad()}>Loading</button>
      </div>
    </div>
  );
};

export default TestTabs;
