export class ShopInfo {
  BusinessType = String || "";
  account = String || "";
  bank = String || "";
  contact = String || "";
  corporateNum = String || "";
  franchise = String || "";
  marcket = String || "";
  route = String || "";
  textArea = String || "";
}
export class CeoInfo {
  name = String || "";
  Contact = String || "";
  email = String || "";
}

export class CeoList {
  CeoItem = Array(new CeoInfo());
}
