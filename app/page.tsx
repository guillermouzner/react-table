import {SimpleTable} from "@/components/simple-table";

export default function HomePage() {
  return (
    <div className="py-10 flex justify-center">
      <div className="text-black">
        <p>Simple Table</p>
        <SimpleTable />
      </div>
    </div>
  );
}
