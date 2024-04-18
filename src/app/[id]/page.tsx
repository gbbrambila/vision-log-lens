import { loadLogFile } from "@/app//actions";
import { LogFileViewer } from "@/app/ui";
import Link from "next/link";

type Props = {
  params: {
    id: string;
  };
};

export default async function Page({ params }: Props) {
  const { id } = params;

  const response = await loadLogFile(id);

  const { data, status, error } = response;

  if (status !== 200 && error) {
    return (
      <div className="h-full flex flex-col items-center justify-center p-10">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white mb-5 pb-2">
          {error}
        </h5>
        <Link
          href={`/`}
          className={`text-sm font-medium text-blue-600 hover:underline dark:text-blue-500`}
        >
          Come back
        </Link>
      </div>
    );
  }

  return <LogFileViewer logFileData={data} />;
}
