import { EStatus } from "@/components/Status";

export const PAGE_SIZE = 10;

export const SELECT_NONE_OPTIONS =
  { id: "", label: "Chọn vùng", value: "" }


export const STATUS = [
  { id: "", label: "Chọn trạng thái", value: "" },
  { id: "1", label: "Đang hoạt động", value: EStatus.active },
  { id: "2", label: "Chưa kích hoạt", value: EStatus.notActive },
  { id: "3", label: "Đã khóa tài khoản", value: EStatus.block },
]

export const SHOW_BUTTON = 5;
export const LEFT_NUMBER_BUTTON = 2;
export const FIRST_PAGE = 1;