import { ReactElement, useMemo } from "react"; // useState, useEffect
import { Cell } from "react-table";
import Table from "./components/Table";

export default function App(): ReactElement {
  // const [isLoading, setIsLoading] = useState<boolean>(false);
  // const [requestData, setRequestData] = useState<Array<object>>([]);

  // mocked data for now
  const cachedColumns = useMemo(
    () => [
      {
        Header: "Joke 1",
        accessor: "joke1",
        cell: (cell: Cell) => cell.value,
      },
      {
        Header: "Joke 2",
        accessor: "joke2",
        cell: (cell: Cell) => cell.value,
      },
    ],
    []
  );

  const cachedData = useMemo(
    () => [
      //...requestData
      {
        id: 1,
        joke1: "['hip', 'hip'] - (hip hip array)",
        joke2: "abc",
      },
      {
        id: 2,
        joke1:
          "What's the object-oriented way to become wealthy? - Inheritance",
        joke2: "def",
      },
      {
        id: 3,
        joke1:
          "Why did the programmer quit his job? - Because he didn't get arrays.",
        joke2: "ghi",
      },
      {
        id: 4,
        joke1:
          "A SQL query walks into a bar, walks up to two tables and asks... - 'Can I join you?'",
        joke2: "jkl",
      },
      {
        id: 5,
        joke1:
          "A DHCP packet walks into a bar and asks for a beer. - Bartender says, 'here, but I’ll need that back in an hour!'",
        joke2: "mno",
      },
      {
        id: 6,
        joke1: "Which song would an exception sing? - Can't catch me - Avicii",
        joke2: "pqr",
      }
    ],
    [] // requestData
  );

  // useEffect(() => {
  //   setIsLoading(true);
  //   getSomeEndpoint()
  //     .then((data: any) => {
  //       setRequestData(data?.xxx);
  //       setIsLoading(false);
  //     })
  //     .catch((err: any) => console.error(err));
  // }, []);

  return (
    <>
      {/* {isLoading && <p>Loading...</p>} */}
      <Table columns={cachedColumns} data={cachedData} />
    </>
  );
}
