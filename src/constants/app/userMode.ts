export enum UserMode {
  Parent = "Parent",
  Child = "Child",
  Guest = "Guest",
}

type ModeDescription = {
  [key in UserMode]: string;
};

export const DESCRIPTIONS: ModeDescription = {
  [UserMode.Parent]:
    "The Parent Mode is designed to be used in conjunction with the Child Mode on a separate device. To activate this mode, both devices must be connected to the internet. Once paired, the parent can monitor and interact with the child's activities remotely in real time.",
  [UserMode.Child]:
    "The Child Mode must be connected to the Parent Mode from another device in order to function. An active internet connection is required during the setup and usage. This mode enables the child's device to share data and receive guidance or restrictions defined by the parent.",
  [UserMode.Guest]:
    "Guest Mode allows you to use both parent and child functionalities on a single device without the need for pairing or an internet connection. It is ideal for quick access, offline use, or testing purposes when using multiple devices is not possible.",
};

export const IMAGES = {
  [UserMode.Parent]: require("../../assets/icons/parents.png"),
  [UserMode.Child]: require("../../assets/icons/children.png"),
  [UserMode.Guest]: require("../../assets/icons/family.png"),
};
