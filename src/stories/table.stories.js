import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Checkbox
} from "@chakra-ui/react"
import { BsChevronExpand } from "react-icons/bs";
import { TableHeadCell } from "./theme/components/table/tableHeadCell";
import { TableCell } from "./theme/components/table/tableCell";
import AVATAR from "./assets/Avatar.png";

export const Simple = () => (
  <Table variant="simple" colorScheme="gray">
    <Thead>
      <Tr verticalAlign="top">
        <TableHeadCell secondString="Secondary String" append={<BsChevronExpand/>}>
          Primary String
        </TableHeadCell>
        <TableHeadCell>
          Primary String
        </TableHeadCell>
        <TableHeadCell>
          Primary String
        </TableHeadCell>
      </Tr>
    </Thead>
    <Tbody>
      <Tr verticalAlign="top">
        <Td> <Checkbox colorScheme="secondary"/> </Td>
        <TableCell bold image={AVATAR} secondString="secondary">Table Cell</TableCell>
        <TableCell>Table Cell</TableCell>
        {/* <TableCell prepend={<BsChevronExpand/>} secondString="secondary">Table Cell</TableCell>
        <TableCell prepend={<BsChevronExpand/>}>Table Cell</TableCell>
        <TableCell>Table Cell</TableCell> */}
      </Tr>
    </Tbody>
  </Table>
)

export const Variant = () => (
  <Table variant="simple" colorScheme="gray">
    <Thead>
      <Tr verticalAlign="top">
        <TableHeadCell secondString="Secondary String" append={<BsChevronExpand/>}>
          Primary String
        </TableHeadCell>
        <TableHeadCell secondString="Secondary String">
          Primary String
        </TableHeadCell>
        <TableHeadCell>
          Primary String
        </TableHeadCell>
        <TableHeadCell>
          Primary String
        </TableHeadCell>
      </Tr>
    </Thead>
    <Tbody>
      <Tr verticalAlign="top">
        <Td> <Checkbox colorScheme="secondary"/> </Td>
        <TableCell bold image={AVATAR} secondString="secondary">Table Cell</TableCell>
        <TableCell prepend={<BsChevronExpand/>} secondString="secondary">Table Cell</TableCell>
        <TableCell prepend={<BsChevronExpand/>}>Table Cell</TableCell>
      </Tr>
    </Tbody>
  </Table>
)

const TableStory = {
  title: "Table",
  component: Table
}

export default TableStory