"use client";

import React from "react";
import { FileUpload } from "@/app/ui";
import { uploadFileHook } from "@/app/hooks/uploadFile.hook";

export default function Page() {
  const { error, setError, onUploadSubmit } = uploadFileHook();

  if (error) {
    return (
      <div
        data-testid="error-area"
        className="h-full flex flex-col items-center justify-center p-10"
      >
        <div className="h-full flex flex-col items-center justify-center p-10">
          <h5 className="text-md leading-none text-gray-900 dark:text-white mb-5 pb-2">
            {error}
          </h5>
          <button
            className={`text-sm font-medium text-blue-600 hover:underline dark:text-blue-500`}
            onClick={() => setError(false)}
          >
            Try again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col items-center justify-center p-10">
      <div className="w-4/5" data-testid="upload-area">
        <FileUpload handleSubmit={onUploadSubmit} />
      </div>
    </div>
  );
}
