import Header from "./Header";
import SearchBar from "./SearchBar";
import EmployeeList from "./EmployeeList";

export default function Home() {
    return (
    <>
        <Header title="Employees" />
        <SearchBar />
        <EmployeeList />
    </>
    );
}