"use client";

import React from "react";
import { FormEvent } from "react";
import { FileUpload } from "@/app/ui";
import { navigate } from "@/app/actions";


export default function Page() {
  const [error, setError] = React.useState<string | boolean>(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const formData = new FormData();
      const file = event.currentTarget.files[0];

      if (!file) {
        // Ignore as user probably just closed the select window
        return;
      }

      if (!file.name.endsWith(".log")) {
        setError("Ops! Only .log files are supported at this stage :(");
        return;
      }

      formData.append("file", file);

      const response = await fetch("/api/log/upload", {
        method: "POST",
        body: formData,
      });

      const { filePath } = await response.json();

      setError(false);
      navigate(`/${filePath}`);
    } catch (error: any) {
      console.error(error);
      setError(error.message);
    }
  }

  if (error) {
    return (
      <div data-testid="error-area" className="h-full flex flex-col items-center justify-center p-10">
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
        <FileUpload handleSubmit={onSubmit} />
      </div>
    </div>
  );
}
