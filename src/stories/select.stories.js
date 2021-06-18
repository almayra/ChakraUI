import { Select, Menu, SubMenu } from "../theme/components/select/index";
import { FormControl, FormLabel, HStack } from "@chakra-ui/react";

export const withLabel = () => (
  <FormControl>
    <FormLabel>Filter</FormLabel>
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
  </FormControl>
)

export const state = () => (
  <HStack spacing={6}>
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
  </HStack>
)
