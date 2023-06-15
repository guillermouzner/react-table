import {FormattingTable} from "@/components/formatting-table";
import {PaginationTable} from "@/components/pagination-table";
import {RowActionTable} from "@/components/row-actions-table";
import {SimpleTable} from "@/components/simple-table";
import {SortingTable} from "@/components/sorting-table";

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
      <div className="text-black">
        <p>Pagination Table</p>
        <PaginationTable />
      </div>
      <div className="text-black">
        <p>Sorting Table</p>
        <SortingTable />
      </div>
      <div className="text-black">
        <p>Filtering Table</p>
        <SortingTable />
      </div>
    </div>
  );
}
