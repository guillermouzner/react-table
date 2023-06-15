import {FormattingTable} from "@/components/formatting-table";
import {RowActionTable} from "@/components/row-actions-table";
import {SimpleTable} from "@/components/simple-table";

export default function HomePage() {
  return (
    <div className="py-10 flex flex-col gap-5 justify-center px-5">
      <div className="text-black">
        <p>Simple Table</p>
        <SimpleTable />
      </div>
      <div className="text-black">
        <p>Formatting Table</p>
        <FormattingTable />
      </div>
      <div className="text-black">
        <p>Row Actions</p>
        <RowActionTable />
      </div>
    </div>
  );
}
