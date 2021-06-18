import './App.css';
import { Select, Menu, SubMenu } from "./theme/components/select/index";
import { HStack } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <HStack spacing={6}>
        <Select disabled placeholder="Select Option" append prepend>
          <Menu menuLabel="Bank" append>
            <SubMenu>Bank BCA</SubMenu>
            <SubMenu>Bank BNI</SubMenu>
            <SubMenu>Bank BRI</SubMenu>
            <SubMenu>Bank Maybank</SubMenu>
          </Menu>
          <Menu menuLabel="Perusahaan" append>
            <SubMenu>PT Agricon</SubMenu>
            <SubMenu>PT Agri Hari Ini</SubMenu>
            <SubMenu>PT Harapan Anak Bangsa</SubMenu>
            <SubMenu>PT FanAttics</SubMenu>
          </Menu>
        </Select>
        <Select placeholder="Select Option" append prepend>
          <Menu menuLabel="Bank" append>
            <SubMenu>Bank BCA</SubMenu>
            <SubMenu>Bank BNI</SubMenu>
            <SubMenu>Bank BRI</SubMenu>
            <SubMenu>Bank Maybank</SubMenu>
          </Menu>
          <Menu menuLabel="Perusahaan" append>
            <SubMenu>PT Agricon</SubMenu>
            <SubMenu>PT Agri Hari Ini</SubMenu>
            <SubMenu>PT Harapan Anak Bangsa</SubMenu>
            <SubMenu>PT FanAttics</SubMenu>
          </Menu>
        </Select>
      </HStack>
    </div>
  );
}

export default App;
