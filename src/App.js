import './App.css';
import { Select, Menu, SubMenu } from "./theme/components/select/index";

function App() {
  return (
    <div className="App">
      <Select placeholder="Select Option" append prepend>
        <Menu menuLabel="Bank" append>
          <SubMenu>Bank BCA</SubMenu>
          <SubMenu>Bank BCA</SubMenu>
          <SubMenu>Bank BCA</SubMenu>
          <SubMenu>Bank BCA</SubMenu>
        </Menu>
        <Menu menuLabel="Perusahaan" append>
          <SubMenu>Bank BCA</SubMenu>
          <SubMenu>Bank BCA</SubMenu>
          <SubMenu>Bank BCA</SubMenu>
          <SubMenu>Bank BCA</SubMenu>
        </Menu>
      </Select>
    </div>
  );
}

export default App;
