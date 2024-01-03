import React, { useState } from "react";

const FileUploadButton = () => {
  // 使用狀態管理是否顯示彈跳視窗
  const [showPopup, setShowPopup] = useState(false);

  // 使用狀態管理已選擇的檔案列表
  const [selectedFiles, setSelectedFiles] = useState([]);

  // 處理上傳檔案的邏輯
  const handleFileUpload = () => {
    console.log("Uploading files:", selectedFiles);
    // 在實際應用中，你可以使用適當的 API 進行檔案上傳
    // 示範：fetch('/upload', { method: 'POST', body: selectedFiles[0] });
  };

  // 處理選擇檔案的事件，更新已選擇的檔案列表
  const handleFileSelect = (e) => {
    setSelectedFiles([...e.target.files]);
  };

  // 處理重設檔案的事件，清空已選擇的檔案列表
  const handleReset = () => {
    setSelectedFiles([]);
  };

  // 處理取消的事件，清空已選擇的檔案列表並隱藏彈跳視窗
  const handleCancel = () => {
    setSelectedFiles([]);
    setShowPopup(false);
  };

  return (
    <div>
      {/* 按鈕觸發彈跳視窗顯示 */}
      <button
        onClick={() => setShowPopup(true)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        上傳檔案
      </button>

      {/* 彈跳視窗的條件渲染 */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-md">
            {/* 彈跳視窗標題 */}
            <h2 className="text-2xl font-bold mb-4">資料上傳</h2>

            {/* 注意事項 */}
            <p className="text-gray-700 mb-4">請注意以下事項：</p>
            <ul className="list-disc pl-6 mb-4">
              <li>上傳檔案格式請用PDF、DOC、ODT、DOCX。</li>
              <li>單次上傳數量上限為20筆。</li>
              <li>單次上傳檔案大小上限為50MB</li>
              {/* 其他注意事項... */}
            </ul>

            {/* 顯示已選擇的檔案 */}
            {selectedFiles.length > 0 && (
              <div className="mb-4">
                <p className="text-lg font-bold mb-2">已選擇的檔案：</p>
                <ul>
                  {selectedFiles.map((file, index) => (
                    <li key={index}>{file.name}</li>
                  ))}
                </ul>

                {/* 顯示重設按鈕 */}
                <button
                  onClick={handleReset}
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-2"
                >
                  重設
                </button>
              </div>
            )}

            {/* 隱藏拖曳區域 */}
            {selectedFiles.length === 0 && (
              <div className="border-dashed border-2 border-gray-300 p-4 mb-4">
                <p className="text-gray-700 mb-2">將檔案拖曳到此區域進行上傳</p>

                {/* 檔案選擇輸入框 */}
                <input
                  type="file"
                  onChange={handleFileSelect}
                  className="hidden"
                />

                {/* 點擊選擇檔案的提示 */}
                <div
                  className="bg-gray-100 p-4 text-gray-500 cursor-pointer"
                  onClick={() =>
                    document.querySelector('input[type="file"]').click()
                  }
                >
                  點擊選擇檔案
                </div>
              </div>
            )}

            {/* 上傳檔案按鈕 */}
            <button
              onClick={handleFileUpload}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              上傳檔案
            </button>

            {/* 取消按鈕 */}
            <button
              onClick={handleCancel}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
            >
              取消
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FileUploadButton;
