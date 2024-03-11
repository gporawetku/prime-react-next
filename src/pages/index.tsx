import { Inter } from "next/font/google";
import { Card } from "primereact/card";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dropdown } from "primereact/dropdown";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const data = [{ name: "test" }, { name: "test" }];

  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
      <div className="">
        <Card style={{ minWidth: "50vw" }}>
          <Dropdown options={data} optionLabel="name" />
          {/* <DataTable value={data}>
            <Column header="name" field="name" />
          </DataTable> */}
        </Card>
      </div>
    </main>
  );
}
