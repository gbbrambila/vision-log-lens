import React from "react";
import { FormEvent } from "react";
import { navigate } from "../actions";

const uploadFileHook = () => {
  const [error, setError] = React.useState<string | boolean>(false);

  async function onUploadSubmit(event: FormEvent<HTMLFormElement>) {
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

  return { error, setError, onUploadSubmit };
};

export { uploadFileHook };
