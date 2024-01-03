import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";

const FileUploader = () => {
  const [files, setFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    // 將新選擇的檔案加入到已有的檔案列表中
    setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*", // 只接受圖片檔案，可以根據需求修改
  });

  return (
    <div>
      <button type="button" {...getRootProps()} className="upload-button">
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>拖曳檔案到這裡</p>
        ) : (
          <p>點擊選擇檔案，或拖曳檔案到這裡</p>
        )}
      </button>

      {/* 彈跳視窗，顯示已選取的檔案 */}
      {files.length > 0 && (
        <div className="popup">
          <h2>注意事項：</h2>
          {/* 加入其他注意事項項目 */}
          <ul>
            <li>注意事項 1</li>
            <li>注意事項 2</li>
          </ul>

          {/* 顯示已選取的檔案 */}
          <h3>已選取的檔案：</h3>
          <ul>
            {files.map((file) => (
              <li key={file.name}>{file.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FileUploader;
