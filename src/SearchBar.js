import { InputText } from "primereact/inputtext";
function SearchBar() {
  return (
    <span className="p-input-icon-left">
      <i className="pi pi-search" />
      <InputText placeholder="Search" />
    </span>
  );
}

export default SearchBar;
