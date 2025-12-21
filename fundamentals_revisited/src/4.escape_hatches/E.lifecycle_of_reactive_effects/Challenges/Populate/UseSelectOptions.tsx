import { useEffect, useState } from "react";
import { FetchData, type ResultInterface } from "./Api";

export function UseSelectOptions(url: string | null) {
  const [list, setList] = useState<ResultInterface[]>([]);
  const [selectedId, setSelectedId] = useState<string>("");
  useEffect(() => {
    if (url === null) {
      return;
    }

    let ignore = false;
    FetchData(url).then((result) => {
      if (!ignore) {
        setList(result);
        setSelectedId(result[0].id);
      }
    });
    return () => {
      ignore = true;
    };
  }, [url]);
  return [list, selectedId, setSelectedId] as const;
}
