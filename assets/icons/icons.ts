export type IconsId =
  | "check_box"
  | "facebook"
  | "linkedin"
  | "location"
  | "message"
  | "phone"
  | "twitter";

export type IconsKey =
  | "CheckBox"
  | "Facebook"
  | "Linkedin"
  | "Location"
  | "Message"
  | "Phone"
  | "Twitter";

export enum Icons {
  CheckBox = "check_box",
  Facebook = "facebook",
  Linkedin = "linkedin",
  Location = "location",
  Message = "message",
  Phone = "phone",
  Twitter = "twitter",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.CheckBox]: "61697",
  [Icons.Facebook]: "61698",
  [Icons.Linkedin]: "61699",
  [Icons.Location]: "61700",
  [Icons.Message]: "61701",
  [Icons.Phone]: "61702",
  [Icons.Twitter]: "61703",
};
